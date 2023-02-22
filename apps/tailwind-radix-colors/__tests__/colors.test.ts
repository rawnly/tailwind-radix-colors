import * as colors from "../src/lib/colors";

const hsla = "hsla(0, 100%, 50%, 0.5)"; // red
const hsl = "hsla(0, 100%, 50%)"; // red

describe("parseHSL", () => {
  it("Should parse an HSL", () => {
    const [h, s, l, a] = colors.parseHSL(hsl);

    expect(h).toBe(0);
    expect(s).toBe(100);
    expect(l).toBe(50);
    expect(a).toBe(undefined);
  });

  it("Should parse an HSLA", () => {
    const [h, s, l, a] = colors.parseHSL(hsla);

    expect(h).toBe(0);
    expect(s).toBe(100);
    expect(l).toBe(50);
    expect(a).toBe(0.5);
  });
});

describe("hsl2hex", () => {
  it("Should transform HSL to HEX", () => {
    const hex = colors.hsl2hex(0, 100, 50);

    expect(hex).toBe("#ff0000");
  });

  describe("HSLA", () => {
    it("Should transform to HEX", () => {
      const hex = colors.hsl2hex(0, 100, 50, 0.5);

      expect(hex).toBe("#ff000032");
    });

    it("Should not pass the alpha channel if is 1", () => {
      const hex = colors.hsl2hex(0, 100, 50, 1);

      expect(hex).toBe("#ff0000");
    });
  });
});

describe("hslToHex", () => {
  it("Shold transform HSL to HEX", () => {
    const hexcode = colors.hslToHex(hsl);

    expect(hexcode).toBe("#ff0000");
  });

  it("Shold transform HSLA to HEX", () => {
    const hexcode = colors.hslToHex(hsla);

    expect(hexcode).toBe("#ff000032");
  });
});

describe("parseHex", () => {
  it("should parse an hex color", () => {
    const result = colors.parseHex("#0080ff");
    expect(result).toStrictEqual(["00", "80", "ff", "ff"]);
  });

  it("should parse an hex color with alpha", () => {
    const result = colors.parseHex("#0080ffff");
    expect(result).toStrictEqual(["00", "80", "ff", "ff"]);
  });
});

describe("alphaConvert", () => {
  it("should convert 0-255 alpha to 0-1", () => {
    const result = [0xff, 0x80, 0x0].map(colors.alphaConvert);
    expect(result).toStrictEqual([1, 0.5, 0]);
  });
});

describe("hexToRgb", () => {
  it("Should convert a 6 chars hex to rgb", () => {
    const result = colors.hexToRgb("#0080ff");
    expect(result).toEqual([0, 128, 255, 1]);
  });

  it("Should convert hex with alpha to rgba", () => {
    const result = colors.hexToRgb("#0080ff80");
    expect(result).toEqual([0, 128, 255, 0.5]);
  });
});
