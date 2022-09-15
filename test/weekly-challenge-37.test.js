import chai from "chai";

import { before } from "mocha";

import getDiffBetweenTwoGames from "../weekly-challenges/weekly-challenge-37/weekly-challenge-37.js";
import zeldaJSON from "../weekly-challenges/weekly-challenge-37/zeldas.json" assert { type: "json" };

const expect = chai.expect;

describe("getDiffBetweenTwoGames", function () {
  it("should return 35 when entering first (1986) and last (2020) zelda game", () => {
    const allZeldaInfo = zeldaJSON.data.sort(
      (a, b) => new Date(a.released_date) - new Date(b.released_date)
    );
    // console.log(allZeldaInfo);
    // console.log("All Zelda games and its releases dates are: ");

    // allZeldaInfo.data.forEach(
    //   (zeldaGame) => `\n${zeldaGame.name} - ${zeldaGame.released_date}`
    // );
    const enteredGameOlder = allZeldaInfo[0];
    const enteredGameNewer = allZeldaInfo[allZeldaInfo.length - 1];

    const expectedResult = getDiffBetweenTwoGames(
      enteredGameOlder,
      enteredGameNewer
    );
    expect(expectedResult).to.equal(35);
  });

  it("should return 18 filtering Ocarina of Time (1998) and Breath of the Wild (2017) zelda game", () => {
    const allZeldaInfo = zeldaJSON.data.sort(
      (a, b) => new Date(a.released_date) - new Date(b.released_date)
    );
    // console.log(allZeldaInfo);
    // console.log("All Zelda games and its releases dates are: ");

    // allZeldaInfo.data.forEach(
    //   (zeldaGame) => `\n${zeldaGame.name} - ${zeldaGame.released_date}`
    // );
    const enteredGameOlder = allZeldaInfo.filter(
      (game) => game.name === "The Legend of Zelda: Ocarina of Time"
    )[0];
    const enteredGameNewer = allZeldaInfo.filter(
      (game) => game.name === "The Legend of Zelda: Breath of the Wild"
    )[0];

    const expectedResult = getDiffBetweenTwoGames(
      enteredGameOlder,
      enteredGameNewer
    );
    expect(expectedResult).to.equal(18);
  });
});
