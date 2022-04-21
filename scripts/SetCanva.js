
import Palla from "./Palla.js";
//ogni volta che le io clicco sulla palla allora poi devo richiamare il meotdoto draw. tutti i disegni li devo far fare a 

//nella palla metto solo y,x raggio etc..
export default class SetCanva{
    constructor(){
    //seleziono la cava dall'Html
    this.canvas = document.querySelector("canvas");
    // qui creo l'oggetto conesto che mi fa lavorare in due D
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
             // calcolo un valore randomico per trovare la poszione della palla che si crea
    this.centerY = this.canvas.height / 2
            // this.posx = Math.random() * (maxx - minx) + minx;
    this.centerX = this.canvas.width / 2
    this.stRadius = this.stRadius || 200
    this.palle=[]
    this.palle.push(new Palla(this.stRadius, this.canvas, this.centerX, this.centerY));
  


    this.redraw();  
    this.mousePressed();

  
}
clear(){
  //una funzione che chiamo per resettare la canvas
  //noi cancello il foglio dalla cordinata 0, 0 fino alla grandezza della canva
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //se funziona con l'animation frame verrà stampato un'infinità di volte
  console.log("Cleared canvas");
}
//solo quando chiamo il metodo redraw la palla viene disegnata
redraw() {
  this.palle.forEach((palla) => {
    // this.clear();
    palla.draw();
  });
  
}


mousePressed(){
  //riesco ad ottenere la posizione della palla inicata 
  //cerco di attaccare un evento click alla canvas dove per ogni palla dell'array, se la poszione del mouse coincide con una delle posizioni delle palle della array
  this.canvas.addEventListener("click", (event)=>{
        const mouseX = event.clientX;
        const mouseY = event.clientY;  
        // const area = this.stRadius*this.stRadius* Math.PI
        // console.log(mouseY, mouseX);
        this.palle.forEach((palla)=>{
          // differenza tra la posizione del mouse e quella del cerchio
          const diffX = palla.x - mouseX
          const diffY = palla.y - mouseY
          // teorema di pitagora    
          const distanza = Math.sqrt(diffX*diffX + diffY* diffY)   
         
          if (distanza < palla.radius)   {
            // Clear canvas se è vero che collide       
            this.clear()
            palla.collided = true;
            const nuovaFiglia = new Palla( palla.radius/1.5, this.canvas, this.random(), this.randomDue()) 
            const nuovoFiglio = new Palla( palla.radius/1.5, this.canvas, this.random(), this.randomDue()) 
            this.palle.push(nuovaFiglia, nuovoFiglio);
            //è una arraow function quindi non mi serve mettere if return true etcc..
            this.palle = this.palle.filter((ball)=> ball.collided == false);
            this.redraw();
            console.log(this.palle, nuovaFiglia.x, nuovoFiglio.y);

          }
                    
        })

  })
}

random(){
  // tutte le volte che viene chiamato genera un numero random compreso tra
  // massima e minimo valore di x
  const minx = this.canvas.width/2 - this.stRadius
  const maxx = this.canvas.width/2 + this.stRadius
  const random = Math.random() * (maxx - minx) + minx;
  console.log( "random"  + random);

  return random 

}
randomDue(){
  // tutte le volte che viene chiamato genera un numero random compreso tra
  // massima e minimo valore di x
  const minx = this.canvas.height/2 - this.stRadius
  const maxx = this.canvas.height/2 + this.stRadius
  const random = Math.random() * (maxx - minx) + minx;
  console.log( "random"  + random);

  return random 

}

}
 


// e poi viene chiamato quando sono socuro di aver cliccato su una delel cellule prima di fargli creade delle altre aplle

//devo cancellare tutto prima devo canceallare tutto, e disegnare 
// window.requestAnimationFrame(function(){
//   clear
//   camia la posiznon



// })
//pper gongi palla, cambia la pposione, redraw, window animaion frame con la stessa funzione in cui sono dentro

// function name(params) {
//   clear
//   hfjfonfdpd

//   window.animationFrame(name) andra in draw
// }

//la prima volta chge faccio animare la 