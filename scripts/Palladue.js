var cells = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   for (var i = 0; i < 10; i++)  {
 cells.push(new Cell());
  }
}

function draw() {
  background(220);
  
   fill(50);
  textAlign(CENTER);
   textSize(18);
  text("Click to split the cell", width/2, 50);
   for (var i = 0; i < cells.length; i++)  {
      cells[i].show();
  cells[i].move();
  }

}

function mousePressed() {
  // for (var i = 0; i < cells.length; i++) 
  
  for (var i = cells.length-1; i >=0 ; i--) {
      if(cells[i].clicked(mouseX, mouseY)) {
        var cellA = cells[i].mitosis();
        var cellB = cells[i].mitosis();
        
        cells.push(cellA);
        cells.push(cellB);
        cells.splice(i,1);
      }
  }
}

class Cell {
    constructor(pos, r, c) {

        if (pos) {
            this.pos = pos.copy();
        } else {
            this.pos = createVector(random(width / 5, width * 4 / 5), random(height / 5, height * 4 / 5));
        }


        this.r = r || 60;
        this.c = c || color(random(100, 200), random(100, 200), random(100, 200), 100);

        this.move = function () {
            var vel = p5.Vector.random2D();
            this.pos.add(vel);
        };

        this.mitosis = function () {
            this.pos.x += random(-this.r * 0.3, this.r * 0.3);
            var cell = new Cell(this.pos, this.r * 0.7, this.c);
            return cell;
        };

        this.show = function () {
            noStroke();
            fill(this.c);
            ellipse(this.pos.x, this.pos.y, this.r, this.r);
        };

        this.clicked = function (x, y) {
            var d = dist(this.pos.x, this.pos.y, x, y);

            if (d < this.r) {
                return true;
            }

            else {
                return false;
            }
        };
    }
}