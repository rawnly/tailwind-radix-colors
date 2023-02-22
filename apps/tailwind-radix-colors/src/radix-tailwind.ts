import { toTailwindColors } from "./lib/format";
import { buildRgbString, hexToRgb } from "./lib/colors";
import twPlugin from "tailwindcss/plugin";
import * as radixColors from "@radix-ui/colors";

const strip = (color: string) => color.trim().replace(/\s/g, "");

export const colors = toTailwindColors(radixColors);

export type ColorType<T extends string> = {
  [color in T]: Record<string, string>;
} & {
  [color in `${T}Dark`]: Record<string, string>;
};

export type Options = {
  prefix?: string;
  properties?: string[];
  colors?: ColorType<string>;
  debug?: boolean;
};

export const createAlias = <T extends string>(
  name: T,
  color: keyof typeof radixColors
) => ({
  [name]: colors[color as keyof typeof colors],
  [`${name}Dark`]: colors[`${color}Dark` as keyof typeof colors],
});

export const plugin = twPlugin.withOptions<Options>(
  (options = {}) =>
    ({ addUtilities, addVariant, e, theme }) => {
      const {
        prefix = "rx",
        properties = ["bg", "shadow", "text", "border", "ring"],
        colors = radixColors,
        debug = false,
      } = options;

      const utilities = Object.keys(colors)
        .filter((color) => !/Dark|A|black|white$/.test(color))
        .reduce((acc, colorName) => {
          const colorStyles = Array.from(new Array(12)).reduce(
            (acc, _, idx) => {
              const value = idx + 1;

              const valueStyles = properties.reduce((acc, prop) => {
                const key = e(`${prefix}-${prop}-${colorName}-${value}`); // {rx}-{text}-{bronze}-{12}
                const invertPrefix = e(`${prefix}-invert`);

                const color = {
                  light: buildRgbString(
                    hexToRgb(
                      theme(`colors.${colorName}.${value}`),
                      `var(--tw-${prop}-opacity)`
                    )
                  ),
                  dark: buildRgbString(
                    hexToRgb(
                      theme(`colors.${colorName}Dark.${value}`),
                      `var(--tw-${prop}-opacity)`
                    )
                  ),
                };

                return {
                  ...acc,
                  [`.${key}`]: {
                    [`@apply ${prop}-[${strip(
                      color.light
                    )}] dark:${prop}-[${strip(color.dark)}]`]: {},
                  },
                  [`.${invertPrefix} .${key}`]: {
                    [`@apply ${prop}-[${strip(
                      color.dark
                    )}] dark:${prop}-[${strip(color.light)}]`]: {},
                  },
                  [`.${invertPrefix}.${key}`]: {
                    [`@apply ${prop}-[${strip(
                      color.dark
                    )}] dark:${prop}-[${strip(color.light)}]`]: {},
                  },
                };
              }, {});

              return { ...acc, ...valueStyles };
            },
            {}
          );

          return {
            ...acc,
            ...colorStyles,
          };
        }, {});

      if (debug) {
        console.debug(utilities);
      }

      addUtilities(utilities);
    }
);
