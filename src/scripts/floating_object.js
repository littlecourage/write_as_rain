class FloatingObject {
  constructor({posX, posY, ctx, width, height, speed, color}) {
    this.startY = posY;
    this.startX = posX;
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
    this.posX += this.speed;
    if (this.posX > this.ctx.width) {
      this.posY = this.startY;
    }

  }

}

export default FloatingObject;