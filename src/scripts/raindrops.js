import FallingObject from './falling_objects';

class Raindrop {

  constructor({color, ctx, blobSpeed, initialAngle}) {
    this.ctx = ctx;
    this.color = color;
    this.speed = blobSpeed;
    this.initialAngle = initialAngle;
    this.posX = this.ctx.random(-800, 1600);
    this.posY = Math.random() * -10;
    this.height = this.ctx.random(4, 6);
    this.width = this.ctx.random(1, 2);
  }

  update() {
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
      this.ctx.line(this.posX, this.posY, this.posX - this.initialAngle, this.posY + this.height);
      this.ctx.strokeWeight(this.width);
    } else if (this.initialAngle > 0) {
      this.ctx.line(this.posX, this.posY, this.posX + this.initialAngle, this.posY + this.height);
      this.ctx.strokeWeight(this.width);
    } else {
      this.ctx.line(this.posX, this.posY, this.posX, this.posY + this.height);
      this.ctx.strokeWeight(this.width);
    }
  }

}

export default Raindrop;