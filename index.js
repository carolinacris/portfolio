// import Palla from './scripts/Palla.js'
import SetCanva from './scripts/SetCanva.js'

// new Palla();
const canvas = new SetCanva;

console.log(window.innerHeight, window.innerWidth)

// --------------------------------------------------------------------------------- menu comparsa ------------------------------------
const w = window.innerWidth
const h = window.innerHeight
const comparsa = document.querySelector(".comparsa")
const container = document.querySelector(".container")
const wrap = document.querySelector(".wrap")
comparsa.style.width =  w+ "px";
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
//---------------------------------------------------------------------------------------- DRAG ----------------------------------------------------------------


//----------------------------------------------------------------------------------------MOUSE MOVE ------------------------------------------------------------

// const mosuseMove = function mosuseMove(){
  
//   let el = document.getElementById("who"),
//   elWidth = el.offsetWidth,
//   elHeight = el.offsetHeight,
//   width = window.innerWidth,
//   height = window.innerHeight,
//   target = {
//     x: width / 2,
//     y: height / 2
//   },
//   position = {
//     x: height,
//     y: width
//   },
//   ease = 0.1;

// window.addEventListener("mousemove", function(event) {

//   target.x = event.clientX;
//   target.y = event.clientY;
// });

// function update() {
//   var dx = target.x - position.x,
//     dy = target.y - position.y,
//     vx = dx *ease,
//     vy = dy  *ease;

//   position.x += vx;
//   position.y += vy;

//   el.style.left = (position.x - elWidth / 2).toFixed() + "px";
//   el.style.top = (position.y - elHeight / 2).toFixed() + "px";

//   requestAnimationFrame(update);
// }

// update();
// // function stop(){
  
// // }
// }

// mosuseMove()
// ----------------------------------------- cursore ---------------------------------
// const button=document.querySelector('.who')

// function bIo(){
//   button.addEventListener("click", function(event){
//     button.classList.toggle('open')
//     let textBio= document.querySelector('.text-bio')
//     button.append(textBio)
//     textBio.classList.toggle('display')
    

//   })
// }

// bIo();

