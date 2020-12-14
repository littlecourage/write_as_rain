import FallingObject from './falling_objects';

class HailStone {
  constructor({ctx, speed, color, initialAngle, posY }) {
    this.posX = ctx.random(-ctx.width / 2, ctx.width * 1.5);
    this.posY = posY;
    this.ctx = ctx;
    this.width = ctx.random(2, 5);
    this.height = ctx.random(2, 5);
    this.speed = speed;
    this.color = color;
    this.initialAngle = initialAngle;
  }

  update() {
    this.posY += this.speed;
    if (this.posY >= this.ctx.height) {
      this.lifespan = 0;
    }

    this.posX += this.initialAngle;
  }

  display() {
    this.ctx.fill(this.color);
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height);
  }

}

export default HailStone;