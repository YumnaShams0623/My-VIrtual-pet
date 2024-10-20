// var pet ={
//     name : "Jerry",
//     type : "cat",
//     age  :  3,
//     happiness: 70,
//     hunger:20,

//      feed: function() {
//         if (this.hunger >= 20) {
//           this.hunger -= 20;
//         } else {
//           this.hunger = 0;
//         }
//         alert(`${this.name} was feed! He is ${this.hunger} % hungry.`);
//       },
//     //   ______________________________________________________________
    
//       play: function() {
//         if (this.happiness <= 80) {
//           this.happiness += 20;
//         } else {
//           this.happiness = 100;
//         }
//         alert(`${this.name} played! Happiness is now ${this.happiness}%.`);
//       },
//     //   _________________________________________________________________
  
//     };
    
//     function interactWithPet() {
//       var action = "";
//       while (action !== "exit") {
//         action = prompt(`What would you like to do with ${pet.name}? (feed, play, age, exit)`);
        
//         if (action === "feed") {
//           pet.feed();
//         } else if (action === "play") {
//           pet.play();
//          } else if (action === "exit") {
//           alert(`Goodbye! ${pet.name} will miss you!`);
//         } else {
//           alert("Please choose a valid Action: feed, play, age, or Exit.");
//         }
//       }
//     }
    
    
//     interactWithPet();
// -------------------------------------------------------------------------

var pet = {
  name: "",
  type: "",
  age: 0,
  happiness: "",
  hunger: "",

 
  feed: function() {
    this.hunger = Math.max(this.hunger);
    alert(`You fed ${this.name}. Hunger is now ${this.hunger}.`);
  },
  play: function() {
    this.happiness = Math.min( this.happiness);
    alert(`You played with ${this.name}. Happiness is now ${this.happiness}.`);
  },
  agePet: function() {
    this.age += 1;
    this.happiness = Math.max(0, this.happiness - 5);
    this.hunger = Math.min(100, this.hunger + 10);
    alert(`${this.name} has aged. Age is now ${this.age}. Happiness is ${this.happiness}. Hunger is ${this.hunger}.`);
  },
 
};
// ----------------------------------------------------------------
pet.name = prompt("What is your pet's name?");
pet.type = prompt("What kind of pet is it (cat, dog , rabbit , bird )?");
pet.age = prompt("What's Your Pet age?")
pet.happiness = prompt("How Happy is your Pet?")
pet.hunger = prompt("How hungry is your pet?")
// ------------------------------------------------------------------

while (true) {
  var action = prompt(`What would you like to do with ${pet.name}?\n1. Feed\n2. Play\n3. Age\n4.Quit`);
  switch (action) {
    case "1":
      pet.feed();
      break;
    case "2":
      pet.play();
      break;
    case "3":
      pet.agePet();
      break;
    case "4":
      alert(`Goodbye, ${pet.name}!`);
      exit();
    default:
      alert("Invalid choice. Please try again.");
  }
}


// ----------------------------------------------------------------