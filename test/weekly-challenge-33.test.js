import chai from "chai";
import getChineseSexagenarianCycle from "../weekly-challenges/weekly-challenge-33.js";

const expect = chai.expect;

describe.skip("getChineseSexagenarianCycle", function () {
  it("expect 'rata madera' not inputting nothing", () => {
    const expectedResult = getChineseSexagenarianCycle();
    expect(expectedResult).to.equal("rata madera");
  });
  it("expect 'rata madera' entering 1984", () => {
    const enteredYear = 1984;
    const expectedResult = getChineseSexagenarianCycle(enteredYear);
    expect(expectedResult).to.equal("rata madera");
  });

  it("expect 'mono agua' entering 2022", () => {
    const enteredYear = 2022;
    const expectedResult = getChineseSexagenarianCycle(enteredYear);
    expect(expectedResult).to.equal("mono agua");
  });
});
