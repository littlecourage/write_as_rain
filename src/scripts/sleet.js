

class Sleet {

  constructor({ctx, speed, color, initialAngle }) {
    this.ctx = ctx;
    this.color = color;
    this.speed = speed;
    this.posX = ctx.random(-ctx.width / 2, ctx.width * 1.5);
    this.posY = -10;
    this.height = this.ctx.random(2, 4);
    this.width = this.ctx.random(2, 3);
    this.initialAngle = initialAngle;
    this.lifespan = 320;
  }

  update() {
    this.posY += Math.pow(this.width, 0.5) + this.speed;
    if (this.posY >= this.ctx.height) {
      this.lifespan = 0;
    }

    this.posX += this.initialAngle;
  }

  display() {
    this.ctx.line(this.posX, this.posY, this.posX + this.initialAngle, this.posY + this.height);
    this.ctx.strokeWeight(this.width);
  }

}

export default Sleet;