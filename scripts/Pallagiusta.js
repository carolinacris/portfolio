export default class Palla {
  constructor(canvas, stRadius) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.stRadius = stRadius;
    this.positionX = this.getRandomPositionX();
    this.positionY = this.getRandomPositionY();
    this.collided = false;

    // this.draw();
  }

  draw() {
    //cerchio1-----------------------------------------------------------------------

    this.ctx.beginPath();
    this.ctx.arc(this.positionX, this.positionY, this.stRadius, 0, 2 * Math.PI);
    this.ctx.filter = "blur(40px)";

    this.ctx.fillStyle = "#242424";
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    //cerchio2---------------------------------------------------------------------------

    this.ctx.beginPath();
    this.ctx.arc(this.positionX, this.positionY, this.stRadius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "rgba(223, 223, 223, 0.39)";
    this.ctx.filter = "none";
    this.ctx.fill();
    this.ctx.shadowColor = "rgba(229,229,229, 0.5)";
    this.ctx.shadowBlur = 29;
    this.ctx.shadowColor = "#443D30";
    this.ctx.shadowBlur = 13;
    // this.ctx.stroke();
    this.ctx.closePath();

    //cerchio3----------------------------------------------------------------------------
    this.ctx.beginPath();
    this.ctx.arc(
      this.positionX,
      this.positionY,
      this.stRadius * 0.874,
      0,
      2 * Math.PI
    );
    this.ctx.filter = "blur(6px)";
    this.ctx.stroke();
    this.ctx.strokeStyle = "#3f3f3f";
    this.ctx.closePath();
    //cerchio4----------------------------------------------------------------------------
    this.ctx.beginPath();
    this.ctx.arc(
      this.positionX,
      this.positionY,
      this.stRadius * 0.7296,
      0,
      2 * Math.PI
    );
    this.ctx.filter = "blur(6px)";
    this.ctx.stroke();
    this.ctx.strokeStyle = "#3f3f3f";
    this.ctx.closePath();
    //cerchio5----------------------------------------------------------------------------
    this.ctx.beginPath();
    this.ctx.arc(
      this.positionX,
      this.positionY,
      this.stRadius * 0.5703,
      0,
      2 * Math.PI
    );
    this.ctx.filter = "blur(6px)";
    this.ctx.stroke();
    this.ctx.strokeStyle = "#3f3f3f";
    this.ctx.closePath();
    //cerchio6----------------------------------------------------------------------------
    this.ctx.beginPath();
    this.ctx.arc(
      this.positionX,
      this.positionY,
      this.stRadius * 0.4518,
      0,
      2 * Math.PI
    );
    this.ctx.fillStyle = "rgba(56,56,56, 0.11)";
    this.ctx.filter = "blur(6px)";
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.strokeStyle = "#3f3f3f";
    this.ctx.closePath();

    //cerchio 7 ---------------------------------------------------------------------------

    this.ctx.beginPath();
    this.ctx.arc(
      this.positionX,
      this.positionY,
      this.stRadius * 0.1296,
      0,
      2 * Math.PI
    );
    this.ctx.fillStyle = "#242424";
    this.ctx.fill();
    this.ctx.shadowColor = "#232323";
    this.ctx.shadowBlur = 20;
    this.ctx.stroke();
    this.ctx.closePath();
    //cerchio 8 ---------------------------------------------------------------------------

    this.ctx.beginPath();
    this.ctx.arc(
      this.positionX,
      this.positionY,
      this.stRadius * 0.044,
      0,
      2 * Math.PI
    );
    this.ctx.filter = "none";
    this.ctx.fillStyle = "#cacaca";
    this.ctx.fill();
    this.ctx.closePath();

    //nucleo--------------------------------------------------------------
    this.posxNucleo = this.positionX + this.stRadius * 0.3;
    this.posyNucleo = this.positionY + this.stRadius * 0.36;

    this.ctx.beginPath();
    this.ctx.arc(
      this.posxNucleo,
      this.posyNucleo,
      this.stRadius * 0.2555,
      0,
      2 * Math.PI
    );
    this.ctx.filter = "blur(2px)";
    this.ctx.fillStyle = "#242424";
    this.ctx.fill();
    this.ctx.arc(
      this.posxNucleo,
      this.posyNucleo,
      this.stRadius * 0.2555,
      0,
      2 * Math.PI
    );
    this.ctx.filter = "none";
    this.ctx.fillStyle = "#242424";
    this.ctx.fill();
    this.ctx.closePath();
  }
  getRandomPositionX() {
    // massima e minimo valore di x
    const minx = this.canvas.width / 2 - this.stRadius;
    const maxx = this.canvas.width / 2 + this.stRadius;
    const positionX = Math.random() * (maxx - minx) + minx;

    return positionX;
  }
  getRandomPositionY() {
    // massimo e minimo valore possibile per y
    const miny = this.canvas.height / 2 - this.stRadius / 2;
    const maxy = this.canvas.height / 2 + this.stRadius / 2;
    const positionY = Math.random() * (maxy - miny) + miny;

    return positionY;
  }
}
