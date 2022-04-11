
import Palla from "./Palla.js";

export default class SetCanva{
    constructor(c, canvas){
    //seleziono la cava dall'Html
    this.canvas = document.querySelector("canvas");
    // qui creo l'oggetto conesto che mi fa lavorare in due D
    this.c = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.stRadius = this.stRadius || 270


    this.palle=[
      // new Palla()
  ]
    
  for (var i = 0; i<1; i++)  {
  this.palle.push(new Palla( this.stRadius, this.c));
  }
  


    // this.setUp()
    this.mousePressed()
    // this.updateCanvas()
  
}



// draw(){
//     for (let i = 0; i < this.palle.length; i++){
//       this.palle[i].show();
//       this.palle[i].move();
//     }
// }

mousePressed(){
  //riesco ad ottenere la posizione della palla inicata 
 
  //cerco di attaccare un evento click alla canvas dove per ogni palla dell'array, se la poszione del mouse coincide con una delle posizioni delle palle della array
  this.canvas.addEventListener("click", (event)=>{
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        let abemusColl = false;
        
        this.palle.map((palla)=>{
          // differenza tra la posizione del mouse e quella del cerchio
          const diffX = palla.positionX() - mouseX
          const diffY = palla.positionY() - mouseY
          // teorema di pitagora    
          const distanza = Math.sqrt(diffX*diffX + diffY* diffY)   
          if (distanza < palla.stRadius)   {
            abemusColl = true;
            
            const nuovaFiglia = new Palla( palla.stRadius/2 , this.c) 
            const nuovoFiglio = new Palla( palla.stRadius/2 , this.c) 
            this.palle.push(nuovaFiglia, nuovoFiglio)
            console.log(this.palle);
            
            const index= this.palle.indexOf(palla)
            console.log(index);
            // this.palle.splice(index)
            // this.updateCanvas()
          }
                    
          
          // const index= this.palle.indexOf(palla)
          // console.log(index);
          // this.palle.splice(index)
        })

        // for (let i = 0; i < this.palle.length; i++) {
        //   // differenza tra la posizione del mouse e quella del cerchio
        //   const diffX = this.palle[i].positionX() - mouseX
        //   const diffY = this.palle[i].positionY() - mouseY

        //   // teorema di pitagora    
        //   const distanzaPalle = Math.sqrt(diffX*diffX + diffY* diffY)   

        //   if (distanzaPalle < this.palle[i].stRadius){
        //     abemusColl = true;
        //     const nuovaFiglia = new Palla (this.palle[i].stRadius/2, this.c)
        //     const nuovoFiglio = new Palla (this.palle[i].stRadius/2, this.c)
        //     //splice richiede un numero per il primo parametro, l'indice
        //     console.log(this.palle[i]);
        //     this.palle.splice(i,1)
        //     console.log(this.palle);
        //     this.palle.push(nuovaFiglia, nuovoFiglio)
        //   }
          
        // }
  })
}


    
// createInterval() {
//       //questo mi fa creare un intervallo che uso in una funzione che faccia l'update della tavola
//       window.cancelAnimationFrame(this.interval)
  
//       this.updateAttachedToContext = this.updateCanvas.bind(this);
//       return window.requestAnimationFrame(this.updateAttachedToContext);
//     }

//     //faccio una funzione che mi aggiorni la canvas, così che la palla grande si elimina
//   updateCanvas(){
//   this.createInterval()
//   this.c.clearRect(0, 0, this.canvas.height, this.canvas.width)
//   this.resetCanvas()

// } 

// resetCanvas(){
//   for (var i = 0; i< this.palle.length; i++)  {
//     this.palle.push(new Palla( this.stRadius, this.c));
//     }
// }

}
