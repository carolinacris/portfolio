
import Palla from "./Palla.js";
//ogni volta che le io clicco sulla palla allora poi devo richiamare il meotdoto draw. tutti i disegni li devo far fare a 

//nella palla metto solo y,x raggio etc..
export default class SetCanva{
    constructor(c, canvas){
    //seleziono la cava dall'Html
    this.canvas = document.querySelector("canvas");
    // qui creo l'oggetto conesto che mi fa lavorare in due D
    this.c = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.stRadius = this.stRadius || 200


    this.palle=[
      // new Palla()
  ]
    
  for (var i = 0; i<1; i++)  {
    this.palle.push(new Palla( this.stRadius, this.c, this.canvas));
  }
  


    // this.setUp()
    this.mousePressed()
    // this.animationframe()

    // this.updateCanvas()
  
}


draw(
  //qui gli dico di fare i miei cerchi, for each element 
)
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

            // Clear canvas

            this.c.clearRect(0,0,this.canvas.x, this.canvas.y)
            
            const nuovaFiglia = new Palla( palla.stRadius/2 , this.c) 
            const nuovoFiglio = new Palla( palla.stRadius/2 , this.c) 
            this.palle.push(nuovaFiglia, nuovoFiglio)
            console.log(this.palle);
            
            const index = this.palle.indexOf(palla)
            console.log(index);
            // this.palle = this.palle.splice(index, 1)
            this.palle = this.palle.filter(p => p !== index)
            // this.update()
          }
          // window.requestAnimationFrame(this.mousePressed)
                    
          
        })

  })
}

animationframe(){

  
}




}
 