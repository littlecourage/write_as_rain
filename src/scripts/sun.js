import FloatingObject from './floating_object';

class Sun extends FloatingObject {
  constructor({posX, posY, ctx, width, height, color}) {
    super({posX, posY, ctx, width, height, color})

  }

  display() {
    this.ctx.noStroke();
    this.ctx.fill(this.color);
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height)
  }

}


export default Sun;