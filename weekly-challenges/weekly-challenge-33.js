/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en https://retosdeprogramacion.com/semanales2022.
 *
 */

const yearsCycle = [];
const zodiacSign = [
  "rata",
  "buey",
  "tigre",
  "conejo",
  "dragón",
  "serpiente",
  "caballo",
  "oveja",
  "mono",
  "gallo",
  "perro",
  "cerdo",
];
const wuXing = ["madera", "fuego", "tierra", "metal", "agua"];
const originalWuXing = [...wuXing];

const createCycle = () => {
  if (wuXing.length === 0) {
    console.log("pushing original wuXing array");
    wuXing.push(...originalWuXing);
  }
  zodiacSign.forEach((zodiac, zodiacIndex) => {
    wuXing.every((wuXingElement, wuXingIndex) => {
      yearsCycle.push({
        year: 1984 + zodiacIndex + wuXingIndex,
        zodiacSign: zodiac,
        wuXing: wuXingElement,
      });

      if (
        yearsCycle.filter((item) => item.wuXing === wuXingElement).length === 2
      ) {
        wuXing.shift();
        return false;
      }
    });
  });
  addCycles(3);
};

const getChineseSexagenarianCycle = (year = 1984) => {
  createCycle();
  const cycleSelected = yearsCycle.find((cycle) => cycle.year === year);
  return `${cycleSelected.zodiacSign} ${cycleSelected.wuXing}`;
};

export default getChineseSexagenarianCycle;

const addCycles = (numberOfCycles) => {
  for (let i = 0; i < numberOfCycles; i++) {
    yearsCycle.forEach((cycle) => {
      const year = cycle;
      yearsCycle.push({
        year: year.year + 10,
        zodiacSign: year.zodiacSign,
        wuXing: year.wuXing,
      });
    });
  }
};
