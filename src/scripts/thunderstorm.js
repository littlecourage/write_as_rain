
class Thunderstorm {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.color = color;
    this.timer = 10;
  }

  display() {
    this.timer += 1;
    if (this.timer >= this.ctx.random(150, 450)) {
      this.ctx.background(this.color);
      this.timer = 0;
    }
  }

  update() {

  }
}

export default Thunderstorm;