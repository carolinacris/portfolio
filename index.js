// import Palla from './scripts/Palla.js'
import SetCanva from './scripts/SetCanva.js'

// gsap.to(".work", 
//     {
//         opacity:0,
//         duration:3
//     }
// )

// new Palla();

const canvas = new SetCanva;
// const portfolio = new Portfolio;

console.log(window.innerHeight, window.innerWidth)

// --------------------------------------------------------------------------------- menu comparsa ------------------------------------
const w = window.innerWidth
const h = window.innerHeight
const comparsa = document.querySelector(".comparsa")
const container = document.querySelector(".container")


const wrap = document.querySelector(".wrap")
comparsa.style.width =  w + "px";
comparsa.style.height=  h + "px";
wrap.width =  w + "px";
wrap.height =  h + "px";
console.log(comparsa.width, comparsa.height);

const who = document.querySelector('.who')

who.addEventListener('click', () =>{
    comparsa.classList.toggle('show')
    console.log('cliccato');
})
comparsa.addEventListener('click', () =>{
    comparsa.classList.remove('show')
    console.log('cliccato');
})
const contW = w/3
const conth = w/3
container.style.width = contW + "px";
container.style.height = conth + "px"
console.log(container.height);


const textBox = document.querySelector(".text-box")
textBox.style.width = contW/6*4 + "px"
textBox.style.margin = contW/6*1 + "px"

// ----------------------------------------------------------------- 
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//     smooth: 2,   // seconds it takes to "catch up" to native scroll position
//     effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
//   });

