/*
 * Reto #37
 * LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"
 * Fecha publicación enunciado: 14/09/22
 * Fecha publicación resolución: 19/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡Han anunciado un nuevo "The Legend of Zelda"! Se llamará "Tears of the Kingdom"
 * y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto
 *   puedes usar el mes, o incluso inventártelo)
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

import zeldaJSON from "./zeldas.json" assert { type: "json" };

const getDiffBetweenTwoGames = (gameOlder, gameNewer) => {
  // console.log(
  //   `Older game is ${JSON.stringify(
  //     gameOlder
  //   )}\n\nNewer game is ${JSON.stringify(gameNewer)}`
  // );
  const dateOfOlderGame = new Date(gameOlder.released_date);
  const dateOfNewerGame = new Date(gameNewer.released_date);
  // console.log(
  //   `First game release is ${JSON.stringify(
  //     dateOfOlderGame
  //   )} and second game release is ${JSON.stringify(dateOfNewerGame)}`
  // );
  const diffTime = Math.abs(dateOfNewerGame - dateOfOlderGame);
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24 * 365));
  console.log(diffDays);
  return diffDays;
};

export default getDiffBetweenTwoGames;
