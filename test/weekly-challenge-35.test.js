import chai from "chai";
import calculatePkmnDamage from "../weekly-challenges/weekly-challenge-35.js";

const expect = chai.expect;

describe("calculatePkmnDamage", function () {
  // attackerType, defenserType, attackValue, defenseValue;
  it("expect 50, entering Fire vs Firex and having 1 damage and defense", () => {
    const enteredAttackerType = "Fire";
    const enteredDefenserType = "Fire";
    const enteredAttackValue = 1;
    const enteredDefenseValue = 1;
    const expectedResult = calculatePkmnDamage(
      enteredAttackerType,
      enteredDefenserType,
      enteredAttackValue,
      enteredDefenseValue
    );
    expect(expectedResult).to.equal(50);
  });
  it("expect 6, entering Fire vs Grass and having 60 damage and 100 defense", () => {
    const enteredAttackerType = "Fire";
    const enteredDefenserType = "Grass";
    const enteredAttackValue = 60;
    const enteredDefenseValue = 100;
    const expectedResult = calculatePkmnDamage(
      enteredAttackerType,
      enteredDefenserType,
      enteredAttackValue,
      enteredDefenseValue
    );
    expect(expectedResult).to.equal(60);
  });
  it("expect 17, entering Electric vs Water and having 65 damage and 98 defense", () => {
    const enteredAttackerType = "Electric";
    const enteredDefenserType = "Water";
    const enteredAttackValue = 65;
    const enteredDefenseValue = 98;
    const expectedResult = calculatePkmnDamage(
      enteredAttackerType,
      enteredDefenserType,
      enteredAttackValue,
      enteredDefenseValue
    );
    expect(expectedResult).to.equal(17);
  });
});
