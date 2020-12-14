import HailStone from './hail_stone';

class HailStorm {
  constructor(type, ctx, hailParams) {
    this.type = type;
    this.ctx = ctx;
    this.hailParams = hailParams;
    this.hailStones = [];
  }

  display() {
    this.ctx.fill(this.hailParams.color);
    for (let i = 0; i < this.ctx.random(10); i++) {
      this.hailStones.push(new HailStone(this.hailParams))
    }
  }

  update() {
    for (let i = 0; i < this.hailStones.length; i++) {
      let hailStone = this.hailStones[i];
      if (hailStone.lifespan <= 0) {
        this.hailStones.splice(i, 1);
      }
      hailStone.display();
      hailStone.update();
    }
  }

}

export default HailStorm;