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