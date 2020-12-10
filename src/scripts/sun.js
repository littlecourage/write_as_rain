
class Sun {
  constructor({posX, posY, ctx, width, height, color}) {
    this.posX = posX;
    this.posY = posY;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  display() {
    this.ctx.noStroke();
    this.ctx.fill(this.color);
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height)
  }

}


export default Sun;