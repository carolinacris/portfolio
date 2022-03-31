// import Palla from './scripts/Palla.js'
import SetCanva from './scripts/SetCanva.js'

// new Palla();
const canvas = new SetCanva;
canvas.divisione()
// SetCanva.drawPalla();

console.log(window.innerHeight, window.innerWidth)

//---------------------------------------------------------------------------------------- DRAG ----------------------------------------------------------------
// var wrap = document.querySelector('#wrap');
// var dragArea = wrap.querySelector('#canvas');
// var dragItem = wrap.querySelector('.who');
// var controlRegion = ZingTouch.Region(wrap);

// controlRegion.bind(dragArea, 'pan', handlePan);

// function handlePan(e) {
//   var event = e.detail.events[0];
//   dragItem.style.transform = 'translate(' + (event.x - 50) + 'px, ' + (event.y - 50) + 'px)';
// }



//----------------------------------------------------------------------------------------MOUSE MOVE ------------------------------------------------------------

const mosuseMove = function mosuseMove(){
  
      let el = document.getElementById("who"),
  elWidth = el.offsetWidth,
  elHeight = el.offsetHeight,
  width = window.innerWidth,
  height = window.innerHeight,
  target = {
    x: width / 2,
    y: height / 2
  },
  position = {
    x: height,
    y: width
  },
  ease = 0.1;

window.addEventListener("mousemove", function(event) {
  target.x = event.clientX;
  target.y = event.clientY;
});

function update() {
  var dx = target.x - position.x,
    dy = target.y - position.y,
    vx = dx *ease,
    vy = dy  *ease;

  position.x += vx;
  position.y += vy;

  el.style.left = (position.x - elWidth / 2).toFixed() + "px";
  el.style.top = (position.y - elHeight / 2).toFixed() + "px";

  requestAnimationFrame(update);
}

update();
// function stop(){
  
// }
}

mosuseMove()
// ----------------------------------------- cursore ---------------------------------
const button=document.querySelector('.who')

function bIo(){
  button.addEventListener("click", function(event){
    button.classList.toggle('open')
    let textBio= document.querySelector('.text-bio')
    button.append(textBio)
    textBio.classList.toggle('display')
    

  })
}

bIo();

