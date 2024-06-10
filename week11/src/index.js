const main = () => {
  let array = ["a", "b", "c", "d"];

  //for
  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  // }
  //While
  // let i = 0;
  // while (i < array.length) {
  //   console.log(array[i]);
  //   i++;
  // }
  //Do while
  // do {
  //   console.log(i);
  //   i++;
  // } while (i < 0);
  // for in
  // let obj = { name: "rose", age: 13 };
  // for (let i in obj) {
  //   console.log(i);
  //   console.log(obj[i]);
  // }

  // for of
  // for (let i of array) {
  //   console.log(i);
  // }
  //Creates an empty object
  //let dog = new Object();
  // //Adds values to the name and eat property
  // dog.name = "fluffy";
  // //This property is a method
  // dog.eat = function (food) {
  //   document.write(this.name + " ate " + food);
  // };
  // console.log(dog);

  // let dog = {};
  // dog["name"] = "fluffy";
  // dog["eat"] = function (food) {
  //   document.write(this.name + " ate " + food);
  // };
  //Does not work
  // let dog = {
  //   name = "fluffy",
  //   eat = function(food) {
  //   document.write(this.name + " ate " + food);
  //   }
  //   }
  // let dog = {
  //   name: "fluffy",
  //   eat: function (food) {
  //     document.write(this.name + " ate " + food);
  //   },
  // };

  // console.log(dog);
  // let collegeProgramApplicant = {
  //   name: {
  //     first: "Ix",
  //     last: "Procopios",
  //   },
  //   address: {
  //     numbers: 9022,
  //     street: "90 sw",
  //     city: "Seattle",
  //     state: "WA",
  //     zip: 98693,
  //   },
  //   birthDate: "11/34/1932",
  // };
  // console.log(collegeProgramApplicant.name.last);
  // console.log(collegeProgramApplicant.name["last"]);
  // let movie = {
  //   title: "The Fellowship of the Ring",
  //   length: 178,
  //   director: {
  //     fName: "Peter",
  //     lName: "Jackson",
  //   },
  //   actors: ["Elijah Wood", "Liv Tyler", "Christopher Lee"],
  //   story: {
  //     genre: "High Fantasy",
  //     synopsis: "The was a Hobbit that lived in the ground...",
  //   },
  // };
  // //The movie length
  // console.log(movie.length);
  // //Genre of the movie
  // console.log(movie.story.genre);
  // //First actor listed in the movie
  // console.log(movie.actors[0]);
  // //Directors first and last name
  // console.log(movie.director.fName, movie.director.lName);
  //Gets one

  // console.log(document.getElementById("recommendations"));
  // console.log(document.querySelector("div"));
  // //Gets an array like object
  // console.log(document.querySelectorAll("div"));
  // console.log(document.getElementsByTagName("div"));
  // console.log(document.getElementsByClassName("catagory"));

  let body = document.querySelector("body");

  body.innerHTML = "";
  let bakingListIngredients = document.createElement("ul");
  let firstElement = document.createElement("li");
  let secondElement = document.createElement("li");
  let thirdElement = document.createElement("li");
  firstElement.textContent = "eggs";
  secondElement.textContent = "flour";
  thirdElement.textContent = "milk";
  bakingListIngredients.append(firstElement, secondElement, thirdElement);

  body.appendChild(bakingListIngredients);
};
main();
