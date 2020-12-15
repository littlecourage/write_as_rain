import Sleet from './sleet';

class SleetStorm {
  constructor(type, ctx, sleetParams) {
    this.type = type;
    this.ctx = ctx;
    this.sleetParams = sleetParams;
    this.sleets = [];
  }

  display() {
    this.ctx.stroke(this.sleetParams.color);
    for (let i = 0; i < this.ctx.random(15); i++) {
      this.sleets.push(new Sleet(this.sleetParams))
    }

    for (let sleet of this.sleets) {
      sleet.display();
    }
  }

  update() {
    for (let i = 0; i < this.sleets.length; i++) {
      let sleet = this.sleets[i];
      if (sleet.lifespan <= 0) {
        this.sleets.splice(i, 1);
      }
      sleet.update();
      sleet.display();
    }
  }
}

export default SleetStorm;