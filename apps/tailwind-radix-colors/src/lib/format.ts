import * as colors from "@radix-ui/colors";
import { hslToHex } from "./colors";

export type RadixColors = typeof colors;
export type RadixColor = RadixColors[keyof RadixColors];
export type RadixColorGrade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export const toTailwindColor = (color: RadixColor) =>
  Object.entries(color).reduce((acc, [key, value]) => {
    const k = parseInt((key.match(/\d+$/) || [])[0]);

    return {
      ...acc,
      [k]: value.startsWith("hsl") ? hslToHex(value) : value,
    };
  }, {} as Record<RadixColorGrade, string>);

export const toTailwindColors = (colors: RadixColors) =>
  Object.entries(colors).reduce(
    (acc, [colorName, color]) => ({
      ...acc,
      [colorName]: toTailwindColor(color),
    }),
    {} as Record<keyof RadixColors, Record<RadixColorGrade, string>>
  );
