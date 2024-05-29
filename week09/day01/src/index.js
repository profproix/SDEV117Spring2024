//FETCH Requests
//async function fetchPokemon() {}
//async turns our function into an Async Function
const fetchPokemon = async () => {
  //Await identifies the part of the function we are waiting on
  let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  let pokeData = await res.json();
  for (pokemon of pokeData.results) {
    renderAllPokemon(pokemon);
  }
};

const fetchOnePokemon = async (pokeUrl) => {
  let res = await fetch(pokeUrl);
  let pokeOneData = await res.json();
  renderOnePokemon(pokeOneData);
};

//Fetch with .then
// const fetchOnePokemon = (pokeUrl) => {
//   fetch(pokeUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((pokeData) => renderAllPokemon(pokeData));
// };

//Render
const renderAllPokemon = (pokemon) => {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = pokemon.name;

  div.addEventListener("click", () => fetchOnePokemon(pokemon.url));

  div.appendChild(h3);
  document.querySelector("main").appendChild(div);
};

const renderOnePokemon = (pokemon) => {
  //Gets the main element and clear it
  let main = document.querySelector("main");
  main.innerHTML = "";

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
  pHeight = `Height: ${pokemon.height} `;
  pWeight = `Weight: ${pokemon.weight}`;

  //Combines our HTML elements together
  div.append(h3Id, h3Name, img, pHeight, pWeight);
  //Appends our Div to the DOM
  main.appendChild(div);
};
const main = () => {
  //Stretch goal Click Event
  document.querySelector("button").addEventListener("click", fetchPokemon);
};

main();

//Homework example
// API key should come from Cat API account
// DO not push or share API key

// const APIKEY = "kjdsayhgo3295784ghbsld0psna9iwafbn934";

// const fetchCats = async () => {
//   let res = await fetch("https://api.thecatapi.com/v1/breeds", {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key": APIKEY,
//     },
//   });
//   let data = await res.json();
//   //Put render logic here
//   console.log(data);
// };
// Alt
//fetch(" https://api.thecatapi.com/v1/breeds?api_key=APIKEY");
//   let data = await res.json();
//   //Put render logic here
//   console.log(data);
// };
