export const parseHSL = (value: string): number[] =>
  value
    .replace("hsla", "hsl")
    .slice(4, -1)
    .replace(/%|\s+/g, "")
    .split(",")
    .map(Number);

export const hsl2hex = (
  h: number,
  s: number,
  l: number,
  alpha: number = 100
): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };

  const hex = `#${f(0)}${f(8)}${f(4)}`;

  const formattedAlpha = Math.round(alpha * 100);

  if (formattedAlpha >= 0 && formattedAlpha < 100) {
    return `${hex}${formattedAlpha.toString(16).padStart(2, "0")}`;
  }

  return hex;
};

export function hslToHex(hsl: string): string {
  const [h, s, l, alpha] = parseHSL(hsl);
  const hex = hsl2hex(h, s, l, alpha);

  return hex;
}

export const parseHex = (
  hexcode: string
): [r: string, g: string, b: string, a: string] => {
  let hex: string = hexcode;
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  const [r = "00", g = "00", b = "00", alpha = "ff"] =
    hex.match(/.{1,2}/g) ?? [];

  return [r, g, b, alpha];
};

// we want to convert 0-255 alpha value to 0-100%
// and then return the decimal value (0-1)
export const alphaConvert = (alpha: number) => {
  // alpha is the value of the hex and represents the percentage of the opacity
  // ie: 255 * 42% ~= 107 where 106 is 6B
  // for 255 / alpha = result
  const percentage = alpha / 255;

  // result must be between 0 and 1
  const a = Math.min(Math.max(0, percentage), 1);

  // round to 2 decimals
  return Math.floor(a * 100) / 100;
};

/**
 * @param hex {String} 2 or 6 or 8 chars len hexcode
 */
export const hexToRgb = (
  hex: string,
  alpha?: string
): [r: number, g: number, b: number, a: any] => {
  if ([2, 6, 8].includes(hex.length)) {
    throw new Error(
      "Invalid hexcode. Must be 2 or 6 chars length, received: " + hex.length
    );
  }

  const convert = (h: string): number => parseInt(h, 16);

  let [r = 0, g = 0, b = 0, a] = parseHex(hex).map(convert);
  a = alphaConvert(a);

  return [r, g, b, alpha ?? a];
};

export const buildRgbString = ([r = 0, g = 0, b = 0, a = 1]: number[]) =>
  `rgb(${r},${g},${b})`;
