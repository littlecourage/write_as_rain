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
      this.lifespan = 0;
    }

    this.posX += this.initialAngle;
    // if (this.posX >= this.ctx.width || this.posX < 0) {
    //   this.posY = this.startY;
    //   this.posX = this.startX;
    // }
  }

  display() {
    if (this.initialAngle < 0) {
      this.ctx.line(this.posX, this.posY, this.posX - this.height , this.posY + this.height);
      this.ctx.strokeWeight(this.width);
    } else if (this.initialAngle > 0) {
      this.ctx.line(this.posX, this.posY, this.posX + this.height, this.posY + this.height);
      this.ctx.strokeWeight(this.width);
    } else {
      this.ctx.line(this.posX, this.posY, this.posX, this.posY + this.height);
      this.ctx.strokeWeight(this.width);
    }
  }

}

export default Raindrop;