const display = document.getElementById('result');
const equals = document.getElementById('equals');

let buttons = Array.from(document.querySelectorAll(".buttons"));

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        display.value += button.id;
        console.log(button.id)
    })
})

document.getElementById('AC').addEventListener('click',()=>{
    display.value = "";
})

document.getElementById('C').addEventListener('click',()=>{
    let newDisplayValue = Array.from(display.value)
    newDisplayValue.splice(-1);
    display.value = newDisplayValue.join("");
})

display.addEventListener('keypress',equate);

equals.addEventListener('click',equate);

function equate(){
    display.value = eval(display.value)
}