

export default class Palla{
    constructor(stRadius, c){ 

            this.stRadius = stRadius;
            // calcolo un valore randomico per trovare la poszione della palla che si crea
            const posy = this.positionY()
            // const posx = Math.random() * (maxx - minx) + minx;
            const posx = this.positionX()

            this.c = c;
            //cerchio1-----------------------------------------------------------------------

            c.beginPath()
            c.arc(posx, posy, stRadius, 0, 2 * Math.PI);
            c.filter = 'blur(40px)'

            c.fillStyle = '#242424'
            c.fill()
            c.stroke()
            c.closePath()

            //cerchio2---------------------------------------------------------------------------

            c.beginPath();
            c.arc(posx, posy, stRadius, 0, 2 * Math.PI);
            c.fillStyle = 'rgba(223, 223, 223, 0.39)'
            c.filter = 'none'
            c.fill()
            c.shadowColor = 'rgba(229,229,229, 0.5)';
            c.shadowBlur = 29;
            c.shadowColor = '#443D30';
            c.shadowBlur = 13;
            // c.stroke();
            c.closePath()

             //cerchio3----------------------------------------------------------------------------
            c.beginPath();
            c.arc(posx, posy, stRadius*0.874, 0, 2 * Math.PI);
            c.filter = 'blur(6px)'
            c.stroke();
            c.strokeStyle = '#3f3f3f'
            c.closePath()
            //cerchio4----------------------------------------------------------------------------
            c.beginPath();
            c.arc(posx, posy, stRadius*0.7296, 0, 2 * Math.PI);
            c.filter = 'blur(6px)'
            c.stroke();
            c.strokeStyle = '#3f3f3f'
            c.closePath()
            //cerchio5----------------------------------------------------------------------------
            c.beginPath();
            c.arc(posx, posy, stRadius*0.5703, 0, 2 * Math.PI);
            c.filter = 'blur(6px)'
            c.stroke();
            c.strokeStyle = '#3f3f3f'
            c.closePath()
            //cerchio6----------------------------------------------------------------------------
            c.beginPath();
            c.arc(posx, posy, stRadius*0.4518, 0, 2 * Math.PI);
            c.fillStyle = "rgba(56,56,56, 0.11)"
            c.filter = 'blur(6px)'
            c.fill()
            c.stroke();
            c.strokeStyle = '#3f3f3f'
            c.closePath()
            
            //cerchio 7 ---------------------------------------------------------------------------
            
            c.beginPath()
            c.arc(posx, posy, stRadius*0.1296, 0, 2 * Math.PI);
            c.fillStyle = '#242424'
            c.fill()
            c.shadowColor = '#232323';
            c.shadowBlur = 20; 
            c.stroke()
            c.closePath()
            //cerchio 8 ---------------------------------------------------------------------------
            
            c.beginPath()
            c.arc(posx, posy, stRadius*0.044, 0, 2 * Math.PI);
            c.filter = 'none'
            c.fillStyle = '#cacaca'
            c.fill()
            c.closePath()
            
            //nucleo--------------------------------------------------------------
            const posxNucleo = posx+ stRadius*0.3
            const posyNucelo = posy+ stRadius*0.36

            c.beginPath()
            c.arc(posxNucleo, posyNucelo , stRadius*0.2555, 0, 2 * Math.PI);
            c.filter = 'blur(2px)'
            c.fillStyle = '#242424'
            c.fill()
            c.arc(posxNucleo, posyNucelo, stRadius*0.2555, 0, 2 * Math.PI);
            c.filter = 'none'
            c.fillStyle = '#242424'
            c.fill() 
            c.closePath()
      
    
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
        console.log(positionY);
    }
}