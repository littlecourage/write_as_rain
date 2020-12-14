class Sky {

  constructor (color, ctx) {
    this.color = color;
    this.ctx = ctx;
  }

  display() {
    this.ctx.fill(this.color);
  }


}

export default Sky;