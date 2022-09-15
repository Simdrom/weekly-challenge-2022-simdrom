/*
 * Reto #35
 * BATALLA POKÉMON
 * Fecha publicación enunciado: 29/08/22
 * Fecha publicación resolución: 06/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */
const calculatePkmnDamage = (
  attackerType,
  defenserType,
  attackValue,
  defenseValue
) => {
  const effectivity = getEffectivityValue(attackerType, defenserType);
  const damage = 50 * (attackValue / defenseValue) * effectivity;
  console.log(`Damage is: ${damage}`);
  return Math.round(damage);
};

export default calculatePkmnDamage;

const getEffectivityValue = (attackerType, defenserType) => {
  if (attackerType === "Fire") {
    if (defenserType === "Fire") {
      return 1;
    } else if (defenserType === "Water") {
      return 0.5;
    } else if (defenserType === "Grass") {
      return 2;
    } else if (defenserType === "Electric") {
      return 1;
    }
  } else if (attackerType === "Water") {
    if (defenserType === "Fire") {
      return 2;
    } else if (defenserType === "Water") {
      return 1;
    } else if (defenserType === "Grass") {
      return 0.5;
    } else if (defenserType === "Electric") {
      return 0.5;
    }
  } else if (attackerType === "Grass") {
    if (defenserType === "Fire") {
      return 0.5;
    } else if (defenserType === "Water") {
      return 2;
    } else if (defenserType === "Grass") {
      return 1;
    } else if (defenserType === "Electric") {
      return 1;
    }
  } else if (attackerType === "Electric") {
    if (defenserType === "Fire") {
      return 1;
    } else if (defenserType === "Water") {
      return 0.5;
    } else if (defenserType === "Grass") {
      return 1;
    } else if (defenserType === "Electric") {
      return 1;
    }
  }
};
