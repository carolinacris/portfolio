

export default class Cell{
    constructor(stRadius, posx, posy){ 
            //questo puo andare bene per le palle figlie ma non per quella grossa questo va preso e messo dove dirai push new palla
            //massimo e minimo valore possibile per y
            // const miny = canvas.height/2 - stRadius/2
            // const maxy = canvas.height/2 + stRadius/2
            //massima e minimo valore di x
            // const minx = canvas.width/2 - stRadius  
            // const maxx = canvas.width/2 + stRadius  

            //calcolo un valore randomico per trovare la poszione della palla che si crea
            // const posy = Math.random() * (maxy - miny) + miny;
            // const posx = Math.random() * (maxx - minx) + minx;


            console.log(stRadius);
            const c = canvas.getContext("2d");
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
            
            c.beginPath()
            c.arc(posx*1.10, posy*1.25, stRadius*0.2555, 0, 2 * Math.PI);
            c.filter = 'blur(20px)'
            c.fillStyle = '#242424'
            c.fill()
            c.arc(posx*1.10,posy*1.25, stRadius*0.2555, 0, 2 * Math.PI);
            c.filter = 'none'
            c.fillStyle = '#242424'
            c.fill() 
            c.closePath()

    
    }

    mitosi(){
        //da chiamare di la con palla.metodo('parametro richiesto')
        

        // if(pos) {
        //     this.pos = pos.copy();
        //   } else {
        //      this.pos = createVector(random(width/5, width*4/5), random(height/5,height*4/5));
        //   }
        
        // this.pos.x += random(-this.stRadius*0.3,this.stRadius*0.3);
        // var palla = new Palla(this.pos, this.stRadius*0.7, this.c);
        // return palla;
        
        

    }
}