// URL para buscar un pokemon por nombre -> https://pokeapi.co/api/v2/pokemon/${pokemonName}

const form = document.querySelector("form");
const pokemonInfo = document.getElementById("pokemon-info");

const formHandler = (event) => {
  event.preventDefault();
  const pokemonName = document.getElementById("pokemon").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se ha encontrado el pokemon");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const pokemon = {
        name: data.name,
        type: data.types[0].type.name,
        image: data.sprites.front_default,
      };
      const html = `
      <h2>${pokemon.name}</h2><img src="${pokemon.image}"
      alt="${pokemon.name}">
      <p>Type: ${pokemon.type}</p>
      `;
      pokemonInfo.innerHTML = html;
    })
    .catch(
      (error) => (pokemonInfo.innerHTML = `<p>Error: ${error.message}</p>`)
    );
};

form.addEventListener("submit", formHandler);
