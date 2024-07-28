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

equals.addEventListener('click',()=>{
    display.value = eval(display.value)
})