//Fetch all Pokemon  and build a select menu
const fetchPokemon = async () => {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let pokeData = await res.json();
  //pokemon = pokeData.results[0]
  //pokemon = pokeData.results[1]
  for (let pokemon of pokeData.results) {
    renderSelectMenuItem(pokemon);
  }
};

const fetchOnePokemon = async () => {
  let selectMenu = document.querySelector("select");
  let selectedPokemonURL = selectMenu.value;
  let res = await fetch(selectedPokemonURL);
  let pokemon = await res.json();
  renderOnePokemon(pokemon);
};

const renderOnePokemon = (pokemon) => {
  //Gets the main element and clear it
  //let cardDiv = document.querySelector("#pokemonCard");
  //cardDiv.innerHTML = "";
  document.querySelector(".prokemon");

  //Builds html elements for our pokemon card
  let div = document.createElement("div");
  let h3Id = document.createElement("h3");
  let h3Name = document.createElement("h3");
  let img = document.createElement("img");
  let pWeight = document.createElement("p");
  let pHeight = document.createElement("p");

  //Adds data to our pokemon card elements
  h3Id.textContent = pokemon.id;
  h3Name.textContent = pokemon.name;
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  img.className = "pokemon";
  pHeight = `Height: ${pokemon.height} `;
  pWeight = `Weight: ${pokemon.weight}`;

  //Combines our HTML elements together
  div.append(h3Id, h3Name, img, pHeight, pWeight);
  //Appends our Div to the DOM
  cardDiv.appendChild(div);
};

const renderSelectMenuItem = (pokemon) => {
  let selectMenu = document.querySelector("select");
  let option = document.createElement("option");
  option.textContent = pokemon.name;
  option.value = pokemon.url;
  selectMenu.appendChild(option);
};

const main = () => {
  fetchPokemon();
  let button = document.querySelector("button");
  button.addEventListener("click", fetchOnePokemon);
};
main();
