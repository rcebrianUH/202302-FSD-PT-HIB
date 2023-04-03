// fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
//   .then((response) => {
//     let respuesta;
//     return response.json();
//   })
//   .then((data) => console.log(data));

async function updatePrice() {
  priceElement.textContent = "Loading price...";
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/USD.json"
    );

    const data = await response.json();
    const price = data.bpi.USD.rate;
    const description = data.bpi.USD.description;
    priceElement.textContent = `${price} ${description}`;
  } catch (error) {
    console.log(error);
  }
}

const priceElement = document.getElementById("price");
const refreshButton = document.getElementById("refresh-btn");

updatePrice();
refreshButton.addEventListener("click", updatePrice);
