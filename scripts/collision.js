import "./styles.css";

class Palla {

  constructor(x, y, radius, ctx) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

class Story {
  constructor(ctx, canvas) {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.palle = [
      new Palla(50, 50, 50, this.ctx),
      new Palla(300, 250, 50, this.ctx),
      new Palla(500, 160, 50, this.ctx)
    ];
    this.setListener();
  }

   setListener() {
    this.canvas.addEventListener("click", (event) => {
      const x = event.clientX;
      const y = event.clientY;

      let hasJustCollided = false;

      this.palle.forEach((palla) => {
        const dx = palla.x - x;
        const dy = palla.y - y;
        //teorema di pitagora 
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < palla.radius) {
          hasJustCollided = true;
          console.log("collision");
          palla.radius = 30;
          this.ctx.fillStyle = "red";
          const newPalla = new Palla(x, y, palla.radius / 2, this.ctx) ;
          this.palle.push(newPalla);
        } else if (distance > palla.radius && !hasJustCollided) {
          hasJustCollided = false;
          console.log("out");
        }
      });
    });
  }
}

new Story();
