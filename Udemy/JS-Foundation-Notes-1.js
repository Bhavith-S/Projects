            // # Call stack + Memory heap

    // Memory heap

// const number = 610; //allocate memory for number

// const string = "some text" //allocate memory for string

// const human = { //allocate memory for an object... and it's values.
//     first: 'Andrei',
//     last: 'Neagoie'
// }

    // Call stack

// function substractTwo(num){
//     return num - 2;
// }

// function calculate() {
//     const sumtotal = 4 + 5;
//     console.log(substractTwo(sumtotal));
// }

// calculate();

    // Its like an stack (first in last out), we can cause stack overflow

    // Memory leak

//   1) Global variable
// var a = 1;
// var b = 1;
// var c = 1;
// var d = 1;

//   2) Event Listeners
// var element = document.getElementById('button');
// element.addEventListener('click',onClick)

//   3) setInterval
// setInterval(()=>{
//     console.log("Hello World!");
// },1000);

    // Memory is limited

            // # Javascript is single threaded || Synchronous

            // # Javascript runtime

    // Web API (
    //    API's provided by the web browser && they use C++ in background to exicute code
    // )

    // Web API's are asynchronous

    // List of common API's of Web are :-
    // 1) DOM
    // 2) fetch()
    // 3) setTimeout()

// Once the web API is ready with the output.
//  Web API pushes the output to the Callback Queue.
// Event loop checks if the call stack is empty &&
// if the call stack is empty then it pushs the output
// from the Callback Queue to the call stack


// Ex for web API , Event loop and call stack
// function achieveNirvana() {
//     console.log("You are enlightened");
// }

// function c() {
//     setTimeout(achieveNirvana, 3000);
// }

// function b() {
//     c();
// }

// function a() {
//     b();
// }

// a();

// Excersise Question.

// What is the output of

// console.log(1)
// setInterval(()=>{
//     console.log(2);
// },0);
// console.log(3)

// output:- 
// 1
// 3
// 2

                // Runtime VS Engine

    // JS file --> Music noted
    // JS Engine --> Musician
    // JS Runtime --> Musician playing Music

    // # Nodejs is an javascript runtime