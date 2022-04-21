

export default class Palla{
    constructor(stRadius, canvas, x , y){ 
            this.canvas = canvas
            this.ctx = this.canvas.getContext("2d");
            this.radius = stRadius;
            this.x = x
            this.y= y
            //metto che la collisione di default è falsa
            this.collided = false;
            // this.follow()
    }

    draw(){
        //cerchio1-----------------------------------------------------------------------

        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.filter = 'blur(40px)'

        this.ctx.fillStyle = '#242424'
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()

        //cerchio2---------------------------------------------------------------------------

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'rgba(223, 223, 223, 0.39)'
        this.ctx.filter = 'none'
        this.ctx.fill()
        this.ctx.shadowColor = 'rgba(229,229,229, 0.5)';
        this.ctx.shadowBlur = 29;
        this.ctx.shadowColor = '#443D30';
        this.ctx.shadowBlur = 13;
        // this.ctx.stroke();
        this.ctx.closePath()

         //cerchio3----------------------------------------------------------------------------
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius*0.874, 0, 2 * Math.PI);
        this.ctx.filter = 'blur(6px)'
        this.ctx.stroke();
        this.ctx.strokeStyle = '#3f3f3f'
        this.ctx.closePath()
        //cerchio4----------------------------------------------------------------------------
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius*0.7296, 0, 2 * Math.PI);
        this.ctx.filter = 'blur(6px)'
        this.ctx.stroke();
        this.ctx.strokeStyle = '#3f3f3f'
        this.ctx.closePath()
        //cerchio5----------------------------------------------------------------------------
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius*0.5703, 0, 2 * Math.PI);
        this.ctx.filter = 'blur(6px)'
        this.ctx.stroke();
        this.ctx.strokeStyle = '#3f3f3f'
        this.ctx.closePath()
        //cerchio6----------------------------------------------------------------------------
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius*0.4518, 0, 2 * Math.PI);
        this.ctx.fillStyle = "rgba(56,56,56, 0.11)"
        this.ctx.filter = 'blur(6px)'
        this.ctx.fill()
        this.ctx.stroke();
        this.ctx.strokeStyle = '#3f3f3f'
        this.ctx.closePath()
        
        //cerchio 7 ---------------------------------------------------------------------------
        
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius*0.1296, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#242424'
        this.ctx.fill()
        this.ctx.shadowColor = '#232323';
        this.ctx.shadowBlur = 20; 
        this.ctx.stroke()
        this.ctx.closePath()
        //cerchio 8 ---------------------------------------------------------------------------
        
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius*0.044, 0, 2 * Math.PI);
        this.ctx.filter = 'none'
        this.ctx.fillStyle = '#cacaca'
        this.ctx.fill()
        this.ctx.closePath()
        
        //nucleo--------------------------------------------------------------
        this.posxNucleo = this.x + this.radius*0.3
        this.posyNucelo = this.y + this.radius*0.36

        this.ctx.beginPath()
        this.ctx.arc(this.posxNucleo, this.posyNucelo , this.radius*0.2555, 0, 2 * Math.PI);
        this.ctx.filter = 'blur(2px)'
        this.ctx.fillStyle = '#242424'
        this.ctx.fill()
        this.ctx.arc(this.posxNucleo, this.posyNucelo, this.radius*0.2555, 0, 2 * Math.PI);
        this.ctx.filter = 'none'
        this.ctx.fillStyle = '#242424'
        this.ctx.fill() 
        this.ctx.closePath()

    }


    


}