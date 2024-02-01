//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/


///Answer to Exercise 1/////
let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [{
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt"
  }]
}

function displayFavoriteFoods(person) {
  for (let key in person) {
      if (Array.isArray(person[key])) {
          console.log(`${key}: ${person[key].join(", ")}`);
      } else if (typeof person[key] === 'object') {
          if (person[key][0] && typeof person[key][0] === 'object') {
              for (let subKey in person[key][0]) {
                  console.log(`${subKey}: ${person[key][0][subKey]}`);
              }
          } else {
              console.log(`${key}: ${JSON.stringify(person[key])}`);
          }
      } else {
          console.log(`${key}: ${person[key]}`);
      }
  }
}


displayFavoriteFoods(person3);

  

// ========== Exercise #2 ========== //
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one person's
age by 3 years. Use an arrow function for both methods
*/


///Answer to Exercise 2/////

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Use a regular function for the printInfo method
Person.prototype.printInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Use a regular function for the addAge method
Person.prototype.addAge = function (years) {
  this.age += years;
};

// Create two people
let person1 = new Person("John", 25);
let person2 = new Person("Jane", 30);

// Print their info
person1.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
person1.addAge(3);

// Print the updated info
person1.printInfo();
person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


///Answer to Exercise 3/////

function checkStringLength(str) {
  return new Promise((resolve, reject) => {
      if (str.length > 10) {
          resolve("Big word");
      } else {
          reject("Small Number");
      }
  });
}


checkStringLength("Coding Temple!")
  .then(result => console.log(result))
  .catch(error => console.log(error));

checkStringLength("Soft")
  .then(result => console.log(result))
  .catch(error => console.log(error));
