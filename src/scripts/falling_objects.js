
class FallingObject {
  constructor(posX, posY, ctx, width, height, speed, color) {
    this.startY = posY;
    this.posX = posX;
    this.posY = posY;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
  }

  display() {
    this.ctx.square(this.posX, this.posY, this.width);
  }

  update() {
    this.posY += this.speed;
    if (this.posY > this.ctx.height) {
      this.posY = this.startY;
    }
    
  }

}

export default FallingObject;