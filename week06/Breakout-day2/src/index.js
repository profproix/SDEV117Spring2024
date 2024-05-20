//pokemon citation
//Mewtwo Pokédex: stats, moves, evolution & locations. (n.d.). Pokémon Database. https://pokemondb.net/pokedex/mewtwo

// Breakout Practice
// Hints:
//  array docs: https://www.w3schools.com/js/js_arrays.asp
//  objects doc: https://www.w3schools.com/js/js_objects.asp
//  slice & splice : https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

// Arrays
// Crate an array called pokemon containing the following strings.
// "Bulbasaur", "Ivysaur", "Venusaur", "Charmander","Charmeleon", "Charizard","Squirtle"

// Access the 1st element in this array
// start [] end
// Add "Wartortle" to the end of the array
// Add "Mew" to the start of the array
// Use Slice the pokemon array to create an array containing  "Bulbasaur", "Ivysaur", "Venusaur"
// Console log the pokemon array
// Use Splice to create an array with "Charmander","Charmeleon", "Charizard"
// Console.log the pokemon array again
// What is the difference between the Slice and Splice methods?

// Objects

let mewtwo = {
  id: 150,
  name: "mewtwo",
  weight: 1220,
  height: 20,
  sprites: [
    "https://pokeapi.co/api/v2/pokemon/mewtwo",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  ],
  pokedexEntry: function () {
    "Said to rest quietly in an undiscovered cave, this POKéMON was created solely for battling.";
  },
};

// Access the id, name weight, and hight values from the mewtwo object
// Update the height value to "6'7"
// Access the second index of the array from the sprite key.
// Call the pokedexEntry function from the mewtwo object.
// Use Object.keys to get an array of keys from the mewtwo object
// Use Object.values to get an array of values from the mewtwo object
// Use Object.entries to get an array of arrays with the key and values from the mewtwo object.
