    // The ways of invoking a function

//     // 1)
// function one() {
//     return 1
// }

// console.log(one())

//     // 2)
// function two() {
//     return 2
// }

// console.log(two.call())

//     // 3)
// function three() {
//     return 3
// }

// console.log(three.apply())

//     // 4)
// const four = new Function('num','return num')

// console.log(four(4))

        // function are a special type of objects

        // functions come with a set of methods and properties like
        // methods :- .call(), .apply(), .bind(), ()
        // properties :- arguments, name, length, toString

            // # Functions are first class citizens in JS

//     // # 1)
// var stuff  = function(){}

//     // # 2)
// function a(fn) {
//     fn()
// }

// a(function() {console.log('hi there')})

//     // # 3)
// function b() {
//     return function c() {console.log('bye')}
// }

// var d = b()
// d()

            // Extra Bits

// function a(param = 6){ // if the parameter is not passed while calling a function
//     //  its initialized to the set default value
//     return param
// }

// console.log(a(5)) // if a value is passed it is used

            // Higher Order Functions (HOF)

            // HOF are the function which returns a function or takes a function as an argument


            // #Child Goku
// function letAdamLogin() {
//     let array = [];
//     for (let i = 0; i < 1000000; i++) {
//         array.push(i)
//     }
//     return "Access Granted to Adam"
// }

// function letEvaLogin() {
//     let array = [];
//     for (let i = 0; i < 1000000; i++) {
//         array.push(i)
//     }
//     return "Access Granted to Eva"
// }

// console.log(letAdamLogin())
// console.log(letEvaLogin())

            // #Adult Goku
// function letUserLogin(user) {
//     let array = [];
//     for(let i = 0; i<1000000; i++) {
//         array.push(i)
//     }
//     return 'Access Granted to ' + user;
// }

// console.log(letUserLogin('Adam'))
// console.log(letUserLogin('Eva'))

            // #Adult Goku++
// const giveAccessTo = (name)=>
//     'Access Granted to ' + name

// function letUserLogin(user) {
//     let array = [];
//     for(let i = 0; i<1000000; i++) {
//         array.push(i)
//     }
//     return giveAccessTo(user);
// }

// console.log(letUserLogin('Adam'))
// console.log(letUserLogin('Eva'))

            // #Powered Goku++
// const giveAccessTo = (name)=>
//     'Access Granted to ' + name

// function authenticate(verify) {
//     let array = [];
//     for(let i = 0; i<verify; i++) {
//         array.push(i)
//     }
//     return true;
// }

// function letPerson(person, fn){          //Higher order function / HOF
//     if(person.level === 'admin') {
//         fn(50000)
//     } else if(person.level === 'user') {
//         fn(10000)
//     }
//     return giveAccessTo(person.name)
// }

// console.log(letPerson(
//     {level: 'admin', name: 'Sally'},
//     authenticate
// ))

    // Exercise: HOF

// const multiplyBy = function (num1){  //HOF
//     return  function (num2){
//         return num1 * num2;
//     }
// }

        // OR

// const multiplyBy = (num1) => (num2) => num1 * num2 //HOF using arrow function

// const multiplyByTwo = multiplyBy(2);

// const multiplyByTen = multiplyBy(10);

// console.log(multiplyByTwo(4));
// console.log(multiplyByTen(4));

                        // 1st Piller Closures

                        // Closure is a temprary memory space where all the variables of
                        //  the outer funciton are stored for later use inside the inner function

                        // Note :- closure is created if and only if any outside function variable
                        //  is refrenced inside the inner function

// Example 1 :
// function a() {                  //HOF
//     let grandpa = 'grandpa'
//     return function b() {       //HOF
//         let father = 'father'
//         return function c() {
//             let son = 'son'
//             return `${grandpa} > ${father} > ${son}`
//         }
//     }
// }

// console.log(a()()())

// Example 2 :
// const boo = (string)=>(name)=>(name2)=>
//     console.log(`${string} ${name} ${name2}`)

// const booString = boo('hi');
// // 5 years later
// const booStringName = booString("Chandra");
// const booStringFinal = booStringName('Shekar');

// console.log(booStringFinal) // output : hi Chandra Shekar

// Exercise: Closures
// function callMeMaybe() {
//     const callMe = 'Hi! I am now here!';
//     setTimeout(function() {
//         console.log(callMe);
//     },4000);
// }

// callMeMaybe()

    // Closure and Memory

    // Closures are memoery efficient and provide encapsulation and many more

// 1) Memory efficient

    // Not using closures so its not memory efficient
// function heavyDuty(index) {
//     console.log('Created!')
//     const bigArray = new Array(7000).fill('smily')
//     return bigArray[index]
// }

// console.log(heavyDuty(688))

    // Using Closures so it's memory efficient
// function heavyDuty2() {
//     const bigArray = new Array(7000).fill('smily')
//     console.log('Created Again')
//     return function(index){
//         return bigArray[index]
//     }
// }

// const getHeavyDuty = heavyDuty2();


// console.log(getHeavyDuty(688))
// console.log(getHeavyDuty(688))
// console.log(getHeavyDuty(688))
// console.log(getHeavyDuty(688))

// 2) Encapsulation
// const makeNuclearButton = () =>{
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction
//     const launch = () => {                              // This function is now encapsulation
//         timeWithoutDestruction = -1;
//         return 'Boom'
//     };
//     setInterval(passTime,1000)
//     return {
//         totalPeaceTime: totalPeaceTime
//     }
// }

// const ohno = makeNuclearButton();
// ohno.launch()                       // launch function is not accessable because
//  i didn't return it in the return objects

// Exercise: Closures 2
// let view;
// function initialize() {
//     view = 'mountain';
//     console.log('view has been set!')
// }

// initialize();
// initialize();
// initialize();
// console.log(view)

// Solution:

// let view;
// function initialize() {
//     let called = 0;
//     return function() {
//         if(called > 0){
//             return;
//         }
//         view = 'mountain';
//         called++;
//         console.log('view has been set!')
//     }
// }

// const startOnce = initialize();
// startOnce();
// console.log(view)

// Exercise: Closures 3

// const array = [1,2,3,4];
// for(var i=0; i<array.length; i++) {
//     setTimeout(function(){
//         console.log('I am at index '+i)
//     }, 3000)
// }

// output : I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4

// Solution (easiest): 
// const array = [1,2,3,4];
// for(let i = 0; i< array.length; i++){
//     setTimeout(function(){
//         console.log('I am at index '+i)
//     }, 3000)
// }

// output : I am at index 0
// I am at index 1
// I am at index 2
// I am at index 3

// Solution (using closures && IIFE)

// const array = [1,2,3,4];
// for(var i = 0; i < array.length; i++) {
//     (function(closureI){
//         setTimeout(function(){
//             console.log('I am at index ' + closureI)
//         }, 3000)
//     })(i)
// }

                        // 2nd Piller Prototype

                        // Prototypal inheritance : Since array and function are objects
                        //  they inherit the object properties

// const array = []

// console.log(array.__proto__) // ".__proto__" is used to go up the inheritance chain

// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5;
//     },
//     sing() {
//         if(this.fire)
//             return `I am ${this.name}, the breather of fire`;
//     }
// }

// let lizard = {
//     name: 'Kiki',
//     fight() {
//         return 1;
//     }
// }

// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard()) //output : undefined

// lizard.__proto__ = dragon; // here the lizard inherits the dragon object    Not recommended to use it
// console.log(lizard.sing()) //output : I am Kiki, the breather of fire
// console.log(lizard.fight())
//output : 1, because we already have the fight property in the lizard object

// dragon.isPrototypeOf(lizard) // output : true,
//  because the .isPrototypeOf() function is used to check if the calling object
//  is an prototype of the argument object || called object

// for(let prop in lizard) {
//     if(lizard.hasOwnProperty(prop)){ //used to check if the property belongs to the 
//                                     // object and is not inherited
//         console.log(prop)
//     }
// }

// output : name
//          fight

// let human = {
//     mortal: true
// }

// let socrates = Object.create(human) // another way to inherit objects
// socrates.age = 45
// console.log(socrates.mortal)

            // # Only functions have the prototype property
            // # Object is a function && Object.prototype is the base object

// Exercise - extend the functionality of a built in object

// #1
// Date object => to have new method .lastYear()
// which shows you last year 'YYYY' format.

// Date.prototype.lastYear = function() {
//     return this.getFullYear()-1
// }

// const lastyear = new Date().lastYear()
// console.log(lastyear)
//'1899'

// #1 Solved

// #Bonus
// Modify .map() to print 'map' at the end of each item.
// Array.prototype.map = function(){
//     let arr = [];
//     for(let i = 0; i < this.length; i++){
//         arr.push(this[i] + 'map');
//     }
//     return arr;
// }
// console.log([1,2,3].map())
// 1map, 2map, 3map

// #2 Solved

// Exercise Prototypal Inheritance with this keyword

// Function.prototype.bind = function(caller){
//     const self = this;
//     return function() {
//         return self.apply(caller,arguments);
//     };
// }

// const obj1 = {
//     name : 'Tom',
//     work(){
//         return `${this.name} is busy`;
//     }
// }

// const obj2 = {
//     name : 'Oggy'
// }

// const oggyWork = obj1.work.bind(obj2);

// console.log(oggyWork());

// Output : Oggy is busy