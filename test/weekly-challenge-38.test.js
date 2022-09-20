import chai from "chai";
const expect = chai.expect;

import convertDecimalToBinary from "../weekly-challenges/weekly-challenge-38.js";

describe("convertDecimalToBinary", function () {
  it("should return 1.00011001100110011001 entering 1.1", () => {
    const enteredDecimal = 1.1;
    const expectedResult = convertDecimalToBinary(enteredDecimal);
    expect(expectedResult).to.equal(`1.00011001100110011001`);
  });

  it("should return 00010000101000111010100.00100010010111100011 entering 545236.13425", () => {
    const enteredDecimal = 545236.13425;
    const expectedResult = convertDecimalToBinary(enteredDecimal);
    expect(expectedResult).to.equal(
      `10000101000111010100.00100010010111100011`
    );
  });
  it("should return 1001111011010101110010.01110000000110011001 entering 2602354.437890514538694513", () => {
    const enteredDecimal = "2602354.437890514538694513";
    const expectedResult = convertDecimalToBinary(enteredDecimal);
    expect(expectedResult).to.equal(
      `1001111011010101110010.01110000000110011001`
    );
  });
});
