// Imagina que tienes un objeto que representa a un personaje de videojuego,
// y quieres extraer sus habilidades para poder utilizarlas más fácilmente
// en tu código. El objeto se ve así:
const player = {
  name: "Mario",
  lives: 3,
  abilities: {
    jump: "Super Jump",
    attack: "Fireball",
    defense: "Mushroom",
  },
};

// Tu tarea es utilizar la sintaxis de desestructuración para extraer las
// habilidades del jugador en tres constantes distintas (jump, attack y defense).
// Luego, deberás utilizar esas constantes para imprimir un mensaje que diga algo
// como "Mario tiene la habilidad de saltar muy alto con su Super Jump, puede lanzar
// bolas de fuego con su Fireball y se protege con su Mushroom".

// const {
//   abilities: { jump, attack, defense },
// } = player;

const { jump, attack, defense } = player.abilities;

// console.log(jump);

console.log(
  `${player.name} tiene la habilidad de saltar muy alto con su ${jump}, puede lanzar bolas de fuego con su ${attack} y se protege con su ${defense}.`
);

// const {jump, }
