const text = document.getElementById('text');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const body = document.body;

btn1.addEventListener('click',()=>{
  body.style.backgroundColor = 'Red';
  text.textContent = 'Current Theme: Red 🔴';
})
btn2.addEventListener('click',()=>{
  body.style.backgroundColor = 'Yellow';
    text.textContent = 'Current Theme: Yellow 🟡';
})
btn3.addEventListener('click',()=>{
  body.style.backgroundColor = 'Green';
    text.textContent = 'Current Theme: Green 🟢';
})
btn4.addEventListener('click',()=>{
  body.style.backgroundColor = 'Blue';
    text.textContent = 'Current Theme: Blue 🔵';
})
btn5.addEventListener('click',()=>{
  body.style.backgroundColor = 'Purple';
    text.textContent = 'Current Theme: Purple 🟣';
})
btn6.addEventListener('click',()=>{
  body.style.backgroundColor = 'White';
    text.textContent = 'No theme Selected';
})