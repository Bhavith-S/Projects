            // # Javascript is dynamically typed language

// Types in javascript

// 1) int / number
// 2) bool
// 3) string
// 4) undefined
// 5) null
// 6) Symbol('me') // come in ES6
// 7) Object

// # typeof function tells us the type of anything

// Ex : 
// console.log(typeof(5))

// Primitive Type

// console.log(typeof 5)           // output : number
// console.log(typeof true)        // output : boolean
// console.log(typeof "Hello")     // output : string
// console.log(typeof undefined)   // output : undefined
// console.log(typeof null)        // output : object
// console.log(typeof Symbol('me'))// output : symbol

// Non-Primitive Type

// console.log(typeof {})          // output : object
// console.log(typeof [])          // output : object
// console.log(typeof function(){})// output : function but it is an object

            // Array.isArray()

// var array = ['1','2','3'];

// // the above one will be converted to the below one

// var array = {
//     0: '1',
//     1: '2',
//     2: '3'
// }

// console.log(Array.isArray([1,2,3])) // output : true

// Array.isArray() function is used to see if the given argument is array or not and returns a boolean value

            // # Pass by value VS Pass by reference

        // variables are passed by value

// var a = 5;
// var b = a;

// b++;

// console.log(a) //output : 5
// console.log(b) //output : 6

        // Objects are passed by reference

// let obj1 = {name : 'Yao', password: '123'};
// let obj2 = obj1;

// obj2.password = 'easypeasy'

// console.log(obj1) //output : { name: 'Yao', password: 'easypeasy' }
// console.log(obj2) //output : { name: 'Yao', password: 'easypeasy' }

// To solve the issue

// let obj = {a: 'a', b: 'b', c: 'c'};
// let clone = Object.assign({},obj)
// let clone2 = {...obj}

// obj.c = 5;

// console.log(obj) // output : { a: 'a', b: 'b', c: 5 }
// console.log(clone) // output : { a: 'a', b: 'b', c: 'c' }
// console.log(clone2) // output : { a: 'a', b: 'b', c: 'c' }


        // Since array are Objects they are passed by reference

// var c = [1,2,3,4,5];
// var d = c;
// d.push(1342322)

// console.log(d); // output : [ 1, 2, 3, 4, 5, 1342322 ]
// console.log(c); // output : [ 1, 2, 3, 4, 5, 1342322 ]

// To solve the issue

// var c = [1,2,3,4,5];
// var d = [].concat(c);

// d.push(1342322)
// console.log(d) //output : [ 1, 2, 3, 4, 5, 1342322 ]
// console.log(c) //output : [ 1, 2, 3, 4, 5 ]

// Shallow Cloning / Another Problem

// let obj = {
//         a: 'a',
//         b: 'b',
//         c: {
//                 deep: 'try and copy me'
//         }
// };
// let clone = Object.assign({},obj); //here obj is shallow cloned
// let clone2 = {...obj} //here obj is shallow cloned

// obj.c.deep = 'hahaha';
// console.log(obj);
// console.log(clone);
// console.log(clone2);

// output : 
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

// Solution :

// let obj = {
//         a : 'a',
//         b : 'b',
//         c : {
//                 deep: 'try and copy me'
//         }
// };
// let clone = Object.assign({},obj);
// let clone2 = {...obj}
// let superClone = JSON.parse(JSON.stringify(obj)) // avoid using this method

// obj.c.deep = "hahaha";
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone)

// output : 
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }
// { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// Exercise: Compare Objects (My Solution)

// var user1 = {name : "nerd", org : "dev"};
// var user2 = {name : "nerd", org : "dev"};
// var eq = Object.toString(user1) == Object.toString(user2);
// console.log(eq);

        // # Type Coercion (The WTH part)

        // when the oparands are of diffrent type but one of them will be converted into 
        // another's equivalent to perform the operation.

// console.log(1 == '1') // Converted to  1 == 1 && Output : true

// if(1) { // Converted into true
//     console.log(5)
// }

// console.log(-0 === +0) // output : true
// console.log(Object.is(-0,+0)) // output : false

// console.log(NaN === NaN) // output : false

// console.log(false == "")        // output : true
// console.log(false == [])        // output : true
// console.log(false == {})        // output : false 
// console.log("" == 0)            // output : true
// console.log("" == [])           // output : true
// console.log("" == {})           // output : false
// console.log(0 == [])            // output : true
// console.log(0 == {})            // output : false
// console.log(0 == null)          // output : false
