import FallingObject from './falling_objects';

class Sleet extends FallingObject {

  constructor({ posX, posY, ctx, width, height, speed, color, initialAngle }) {
    super(posX, posY, ctx, width, height, speed);
    this.color = color;
    this.startY = posY;
    this.startX = posX;
    this.initialAngle = initialAngle;
    this.lifeSpan = 320;
  }

  update(time) {
    this.posY += this.speed;
    if (this.posY >= this.ctx.height) {
      this.lifeSpan = 0;
    }

    this.posX += this.initialAngle;
  }

  display() {
    this.ctx.line(this.posX, this.posY, this.posX, this.posY + this.height);
    this.ctx.strokeWeight(this.width);
  }

}

export default Sleet;