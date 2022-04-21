
export default class Palla{
    constructor(stRadius){ 
        
        this.stRadius = stRadius;
        // calcolo un valore randomico per trovare la poszione della palla che si crea
        const y = this.positionY()
        // const posx = Math.random() * (maxx - minx) + minx;
        const x = this.positionX()
        
    }

    positionX(){

        // massima e minimo valore di x
        const minx = canvas.width/2 - this.stRadius  
        const maxx = canvas.width/2 + this.stRadius  
        const positionX = Math.random() * (maxx - minx) + minx;

        return positionX 

    }
    positionY(){
        // massimo e minimo valore possibile per y
        const miny = canvas.height/2 - this.stRadius/2
        const maxy = canvas.height/2 + this.stRadius/2
        const positionY = Math.random() * (maxy - miny) + miny;
        
        return positionY
        // console.log(positionY);
    }

}