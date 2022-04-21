import Palla from "./Palla.js";

export default class Illustration {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.stRadius = this.stRadius || 200;
    this.palle = [];
    this.palle.push(new Palla(this.canvas, this.stRadius));
    this.redraw();
    this.mousePressed();
  }

  redraw() {
    this.palle.forEach((palla) => {
      palla.draw();
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log("Cleared canvas");
  }

  mousePressed() {
    //riesco ad ottenere la posizione della palla inicata
    //cerco di attaccare un evento click alla canvas dove per ogni palla dell'array, se la poszione del mouse coincide con una delle posizioni delle palle della array
    this.canvas.addEventListener("click", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      this.palle.forEach((palla) => {
        const diffX = palla.positionX - mouseX;
        const diffY = palla.positionY - mouseY;
        const distanza = Math.sqrt(diffX * diffX + diffY * diffY);

        if (distanza < palla.stRadius) {
          this.clear();
          palla.collided = true;
          const nuovaFiglia = new Palla(this.canvas, palla.stRadius / 2);
          const nuovoFiglio = new Palla(this.canvas, palla.stRadius / 2);
          this.palle.push(nuovaFiglia, nuovoFiglio);
          this.palle = this.palle.filter((p) => p.collided == false);
          this.redraw();
          console.log(this.palle);
        }
      });
    });
  }

  animationframe() {}
}
