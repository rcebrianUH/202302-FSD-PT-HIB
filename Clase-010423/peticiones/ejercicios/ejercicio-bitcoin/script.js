// Crea una aplicación web que muestre el precio actual del Bitcoin en
// dólares estadounidenses (USD). Para esto, utiliza la API pública
// de CoinDesk (https://api.coindesk.com/v1/bpi/currentprice/USD.json)
// y la función fetch() para hacer una solicitud GET y obtener los datos
// necesarios. Una vez que tengas los datos, muestra el precio actual
// del Bitcoin en la pantalla de la aplicación de forma clara y legible
// para el usuario. Además, agrega un botón de "actualizar" para que el
// usuario pueda obtener el precio actualizado en cualquier momento.
// Utiliza las promesas de fetch() para manejar la respuesta de la solicitud
// y cualquier error que se produzca. También, asegúrate de manejar adecuadamente
// cualquier excepción que pueda ocurrir en la lógica de la aplicación.

function updatePrice() {
  priceElement.textContent = "Loading price...";
  fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let valor = data.bpi.USD.rate;
      let currency = data.bpi.USD.description;
      priceElement.innerHTML = `${valor} ${currency}`;
    })
    .catch((error) => console.log(error));
}

const priceElement = document.getElementById("price");
const refreshButton = document.getElementById("refresh-btn");

updatePrice();
refreshButton.addEventListener("click", updatePrice);
