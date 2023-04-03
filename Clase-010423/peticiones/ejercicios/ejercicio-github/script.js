// Crea una aplicación web que muestre una lista de los 5
// repositorios más populares de GitHub para un lenguaje de programación
// específico. Para esto, utiliza la API pública de GitHub
// (https://api.github.com/search/repositories?q=language:<<lenguaje>>&sort=stars&order=desc)
// y la función fetch() para hacer una solicitud GET con el lenguaje
// de programación específico como parámetro de consulta.
// Una vez que tengas los datos, muestra los nombres y las descripciones
// de los 5 repositorios más populares en la pantalla de la aplicación de
// forma clara y legible para el usuario. Utiliza las promesas de fetch()
// para manejar la respuesta de la solicitud y cualquier error que se produzca.
// También, asegúrate de manejar adecuadamente cualquier excepción que pueda
// ocurrir en la lógica de la aplicación.

// RESUMEN: Conectarnos a la API sustituyendo el lenguaje por el que queramos, coger los 5 primeros repositorios y meterlos en la <ul></ul>

// <li><strong>nombre</strong>: descripcion</li>

function getPopularRepos(language) {
  fetch(
    `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let populares = data.items.slice(0, 5);
      let repoListItems = populares.map(
        (repo) =>
          `<li><strong>${repo.full_name}</strong>: ${repo.description}</li>`
      );
      console.log(populares);
      console.log(repoListItems);
      repoList.innerHTML = repoListItems.join("");
    });
}

const repoList = document.querySelector("#repo-list");
const res = prompt("Dime el lenguaje que quieres consultar", "");
getPopularRepos(res);
