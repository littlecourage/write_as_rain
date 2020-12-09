import FallingObject from './falling_objects';

class Raindrop extends FallingObject {

  constructor({posX, posY, ctx, width, height, speed, color, initialAngle}) {
    super(posX, posY, ctx, width, height, speed);
    this.color = color;
    this.startY = posY;
    this.startX = posX;
    this.initialAngle = initialAngle;
  }

  update(time) {
    this.posY += this.speed;
    if (this.posY >= this.ctx.height) {
      this.lifeSpan = 0;
    }

    this.posX += this.initialAngle;
    // if (this.posX >= this.ctx.width || this.posX < 0) {
    //   this.posY = this.startY;
    //   this.posX = this.startX;
    // }
  }

  display() {
    this.ctx.line(this.posX, this.posY, this.posX, this.posY + this.height);
  }

}

export default Raindrop;