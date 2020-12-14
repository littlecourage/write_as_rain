
class Sun {
  constructor({color, posX, posY, ctx, width, height}) {
    
    this.color = color,
    this.posX = posX,
    this.posY = posY,
    this.ctx = ctx,
    this.width = width,
    this.height = height
  }

  display() {
    this.ctx.noStroke();
    this.ctx.fill(this.color)
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height)
  }

  update() {

  }

}


export default Sun;