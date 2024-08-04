            // # Execution Context

// when a function is called the exectution context is 
// created the function is pushed inside the call stack
// if the function calls another function then a new 
// execution context is created and the called function
// is pushed to the call stack over the calling function

            // # Global Execution Context

// Creates two functions by default
// 1) Global Object
// 2) this

// Global Object / Window === this --> output : true

            // # Lexical Environment

// Lexical Environment checks to see where the function
// || variable || object.

// Ex :
// Name = "Bhavith";
// function sayName(){
//     console.log("Namasthe ",Name);
// }

// sayName()

// Here the Name variable is searched in the global context

            // Hoisting

// Ex : 
// var teddy = undefined;

// console.log(teddy);
// console.log(sing());

// var teddy = 'bear';

// output : undefined

// function sing() {
//     console.log("ohh la la la");
// }

// output : "ohh la la la"

// function expression
// var sing2 = function() {
//     console.log('uhhh la la la')
// }

// output : undefined

// In this example we can see that the variable is defined
// "Undefined" before the variable declaration
// whereas the function is initialised before the 
// initialization

// In simple words :- function is saved in the memory and 
// save space for the variable but set it's value as 
// undefined at the begining before the initialisation

/* Note:- let and const keyword are not hoisted */


// Exercise :- 
// function a(){
//     console.log('hi');
// }

// a()

// function a() {
//     console.log('bye');
// }

// output : bye

// Exercise 2:-

// var favouriteFood = undefined;
// var foodThoughts = undefined;

// favouriteFood = "grapes";

// foodThoughts = function (){
    // this is because when the fuction is called a new 
    // execution context is created and the variable 
    // favouriteFood is hoisted inside the function execution
    // context

    // i.e var favouriteFood = undefined

//     console.log("Original favourite food: " + favouriteFood);

//     var favouriteFood = "sushi";

//     console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts();

// Output : Original favourite food: undefined
//          New favourite food: sushi

    // # It's recommended to avoid hoisting

    // Function Expression :- this is not hoisted
// var karnataka = function() {
//     console.log('cold');
// }
    // Function Declaration :- this is hoisted
// function india() {
//     console.log('cold');
// }

    // Function Invocation/Call/Execution
// karnataka();
// india();

            // # JS Arguments
// function marry(person1 ,person2){
//     console.log(arguments)
//     console.log(`${person1} is now married to ${person2}`)
// }

// marry('Tim','Tina')

            // Variable Environment

// function two() {
//     var isValid; //local variable
// }

// function one() {
//     var isValid = true; //local variable
//     two();
// }

// var isValid = false; //global variable
// one();

// console.log(isValid) //output : false

            // Scope chain

// var x = 'x';
// function findName() {
//     var b = 'b';
//     return printName();
// }

// function printName() {
//     console.log(x)
//     var c = 'c';
//     return 'Bhavith';
// }

// function sayMyName(){
//     var a = 'a';
//     return findName();
// }

// console.log(sayMyName())

    // if any variable can't be found in the local environment
    // then the variable is searched in the parent function / global execution

// function sayMyName() { //Lexical environment is Global Execution Context
//     var a = 'a';
//     return function findName() { //Lexical environment is sayMyName
//         var b = 'b';
//         return function printName() { //Lexical environment is findName
//             var c = 'c';
//             return "Bhavith";
//         }
//     }
// }

// console.log(sayMyName()()())

// block scope

/* Note :- var is function scoped. 
            let and const are block scoped */

// function loop() {
//     for(let i = 0; i < 5; i++) {
//         // Here i is block scoped and can't be accessed outside the the loop / block;
//         console.log(i)
//     }
//     console.log('final', i)
// }

// loop();

            // IIFE (Immediately invoked function expression)

            // (function fun() {
            //     a = 'a';
            // })();

            // 'this' keyword

// console.log(this); // output : web API

// Ex for this keyword usage
// const obj = {
//     name: 'chandra',
//     sing: function() {
//         return 'la la la ' + this.name;
//     },
//     singAgain(){
//         return this.sing() + "!";
//     }
// }

// console.log(obj.sing()) //output : la la la chandra
// console.log(obj.singAgain()); // output : la la la chandra!

// obj.name doesn't work inside the object itself so, the this keyword came into existance

            // Dynamic Scope vs Lexical Scope

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function() {
//             console.log('b', this)
//         }
//         anotherFunc();
//     }
// }

// obj.sing();
//output : 
// a { name: 'Billy', sing: [Function: sing] }
// b Window {}

//To fix the this problem

// 1)

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = ()=> { // arrow function is lexicaly bound
//             console.log('b', this)
//         }
//         anotherFunc();
//     }
// }

// obj.sing();

//output :
// a { name: 'Billy', sing: [Function: sing] }
// b { name: 'Billy', sing: [Function: sing] }

// 2)

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function() {
//             console.log('b', this)
//         }
//         return anotherFunc.bind(this); // the this in the bind is outside the 
//         // function so the this is pointing to the obj not the window
//         // and the bind function binds the this inside the function with the
//         // this outside the function
//     }
// }

// obj.sing()();

// output : 
// a { name: 'Billy', sing: [Function: sing] }
// b { name: 'Billy', sing: [Function: sing] }

// 3)

// const obj = {
//     name: 'Billy',
//     sing() {
//         console.log('a', this);
//         var self = this;
//         var anotherFunc = function() {
//             console.log('b', self)
//         }
//         return anotherFunc;
//     }
// }

// obj.sing()();

// output : 
// a { name: 'Billy', sing: [Function: sing] }
// b { name: 'Billy', sing: [Function: sing] }

// const a = function() {
//     console.log('a',this)
//     const b = function() {
//         console.log('b',this)
//         const c = {
//             hi:function(){
//                 console.log('c',this)
//             }
//         }
//         c.hi()
//     }
//     b()
// }
// a()

            // call(), apply(), bind()

// Example 1 :
// function a() {
//     console.log('hi')
// }

// a.call() // output : hi

// a.apply() // output : hi

// Example 2:
// const wizard = {
//     name : 'Merlin',
//     health: 50,
//     heal(num1,num2){
//         return this.health  += num1 + num2;
//     }
// }

// const archer = {
//     name : 'Robin Hood',
//     health: 30
// }

// console.log("1",archer)
// wizard.heal.call(archer,50,30) //with this we can use the other objects function to another object
// console.log("2",archer)

// console.log("1",archer)
// wizard.heal.apply(archer,[100,30]) //with this we can use the other objects function to another object
// console.log("2",archer)

// console.log("1",archer)
// const healArcher = wizard.heal.bind(archer,100,30) //with this we can use the other objects function to another object
// healArcher();
// console.log("2",archer)

// Exercise (My Solution):

// const array = [1,3,2];

// function getMaxNumber(arr){
//     let maxNum = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(maxNum < arr[i])
//             maxNum = arr[i]
//     }
//     return maxNum;
// }

// console.log("Max number = ",getMaxNumber(array))

//output : 3

// Exercise (ChatGPT Solution):

// const array = [1,3,2];

// function getMaxNumber(arr){
//     return Math.max.apply(null,arr);
// }

// console.log("Max number = ",getMaxNumber(array))

//output : 3

// Exercise (My Solution):

// const array = [1,2,3];

// function getMaxNumber(arr) {
//     return Math.max(...arr);
// }

// console.log(getMaxNumber(array));

// output : 3

        // # Function currying

// function multiply(a,b) {
//     return a*b
// }

// let multiplyByTwo = multiply.bind(this,2)

// console.log(multiplyByTwo(4))

// let multiplyByTen = multiply.bind(this,10)

// console.log(multiplyByTen(4))

// Exercise this keyword :

// var b = {
//     name: 'jay',
//     say(){console.log(this)}
// }
// var c = {
//     name: 'jay',
//     say(){return function() {console.log(this)}}
// }
// var d = {
//     name: 'jay',
//     say() {return ()=> console.log(this)}
// }

// d.say()()

// Exercise this keyword 2 :

// const character = {
//     name : 'Simon',
//     getCharacter(){
//         return this.name;
//     }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character); // Here bind function binds
// the character object as the this keyword and returns the getCharacter function

// //How would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return
// // 'Simon' but doesn't

