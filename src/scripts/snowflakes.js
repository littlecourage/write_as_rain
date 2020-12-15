import FallingObject from './falling_objects';

class Snowflake {
  constructor({ctx, color}) {
    this.color = color;
    this.posX = ctx.random(-50, ctx.width + 50);
    this.posY = 0;
    this.width = ctx.random(2, 5);
    this.height = ctx.random(2, 5);
    this.initialangle = Math.random() * (Math.PI * 2);
    this.lifespan = 250;
    this.ctx = ctx;
    this.time = 0;
    
    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    let windowWidth = ctx.width
    let poweredWidth = Math.pow(windowWidth / 2, 2)
    let randomized = Math.random() * poweredWidth;
    this.radius = Math.sqrt(randomized);
  }

  update(time) {
    let spiralRate = 0.1; // angular speed
    let spiralChange = spiralRate * time
    let newAngle = this.initialangle + spiralChange;

    // controls how the snowflake spirals as it falls
    this.posX = (this.ctx.width / 2) + (this.radius * Math.sin(newAngle));
    this.posY += Math.pow(this.width, 0.5);
    if (this.posY >= this.ctx.height) {
      //snow rests on bottom for rest of lifespan
      this.posY = this.ctx.height;
      //snow doesn't pile up
      // this.posY = this.startY;
      // this.posX = this.startX;
    }

    this.lifespan --;
  }

  display() {
    this.ctx.fill(this.color);
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height);
  }
}

export default Snowflake;