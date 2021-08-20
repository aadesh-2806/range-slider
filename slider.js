const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const color = document.querySelector('.color');

input.addEventListener('mousemove' , ()=>{
    h1.innerText = input.value + "%";
    color.style.width = input.value + "%";
})