import FallingObject from './falling_objects';

class Hail extends FallingObject {

  constructor({ posX, posY, ctx, width, height, speed, color, initialAngle }) {
    super(posX, posY, ctx, width, height, speed);
    this.color = color;
    this.startY = posY;
    this.startX = posX;
    this.initialAngle = initialAngle;
    this.lifespan = 320;
  }

  update(time) {
    this.posY += this.speed;
    if (this.posY >= this.ctx.height) {
      this.lifespan = 0;
    }

    this.posX += this.initialAngle;
  }

  display() {
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height);
  }

}

export default Hail;