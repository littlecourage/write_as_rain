
class Ground {

  constructor(color, ctx) {
    this.posX = 0, 
    this.posY = ctx.height * .75;
    this.width = ctx.width;
    this.height = ctx.height / 4;
    this.color = color;
    this.ctx = ctx;
  }

  display() {
    this.ctx.noStroke();
    this.ctx.fill(this.color);
    this.ctx.rect(this.posX, this.posY, this.width, this.height)
  }

}

export default Ground;