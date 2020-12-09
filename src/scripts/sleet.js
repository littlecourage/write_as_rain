import FallingObject from './falling_objects';

class Sleet extends FallingObject {

  constructor({ posX, posY, ctx, width, height, speed, color, initialAngle }) {
    super(posX, posY, ctx, width, height, speed);
    this.color = color;
    this.startY = posY;
    this.startX = posX;
    this.initialAngle = initialAngle;
    this.lifespan = 320;
  }

  update(time) {
    this.posY += Math.pow(this.width, 0.5) + this.speed;
    if (this.posY >= this.ctx.height) {
      this.lifespan = 0;
    }

    this.posX += this.initialAngle;
  }

  display() {
    this.ctx.line(this.posX, this.posY, this.posX + this.height/2, this.posY + this.height);
    this.ctx.strokeWeight(this.width);
  }

}

export default Sleet;