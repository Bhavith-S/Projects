            // OOP (Object Oriented Programming)

    // # Constructor Functions
    // these function should be called with the "new" keyword and 
    // the function name should be in capital letter (it's not a rule but it's recommended)

    // # The "new" keyword points the "this" keyword to the object

// function Elf(name,weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }

// Elf.prototype.attack = function() {
//     return 'attack with ' + this.weapon
// }

// const peter = new Elf('Peter','stones')
// console.log(peter.attack())

// const sam = new Elf('Sam','fire')
// console.log(sam.attack())

// // OR

// const Elf1 = new Function('name','weapon',
//     `this.name = name;
//     this.weapon = weapon;`
// )

// const sarah = new Elf1('Sarah','fireworks')
// console.log(sarah)

    // Thing about JS

// var a = new Number(5);  // typeof object
// console.log(typeof a);

// var b = 5;              // typeof number
// console.log(typeof b);

// console.log(a === b);   // false

            // # OOP's

// ES6 Class (Syntactic sugar)

// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack() {
//         return 'attack with ' + this.weapon
//     }
// }

// const peter = new Elf('Peter', 'stones')
// console.log(peter instanceof Elf) // true
// console.log(peter.attack());

// const sam = new Elf('Sam', 'fire');
// console.log(sam.attack());

//To fix the this problem

// 4) new binding this

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person('Xavier', 55)
// console.log(person1)

    // Inheritance

// class Character {
//     constructor(name, weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack(){
//         return 'attack with ' + this.weapon;
//     }
// }

// class Elf extends Character {
//     constructor(name, weapon, type) {
//         //calls the base class and sets the values for itself
//         super(name, weapon);
//         this.type = type
//     }
// }

// class Ogre extends Character {
//     constructor(name, weapon, color){
//         super(name,weapon);
//         this.color = color;
//     }
//     makeFort() {
//         return 'strongest fort in the world made';
//     }
// }

// const dolby = new Elf("Dolby",'cloth', 'house')
// console.log(dolby.attack())
// const shrek = new Ogre('Shrek', 'club', 'green');
// console.log(shrek.makeFort())

    // OOP's Exercise

// class Character {
//     constructor(name, weapon) {
//       this.name = name;
//       this.weapon = weapon;
//     }
//     attack() {
//       return 'atack with ' + this.weapon
//     }
//   }
// //   //Polymorphism--
// //   //Extend the Character class to have a Queen class. The output of the below code should be:
// //   const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
  
// //   victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

// class Queen extends Character {
//     constructor(name,weapon,type){
//         super(name,weapon);
//         this.type = type;
//     }

//     attack(){
//         return `I am the ${this.name} of ${this.type}, now bow down to me! `;
//     }
// }

// const victoria = new Queen('Victoria', 'army', 'hearts')

// console.log(victoria.attack())
