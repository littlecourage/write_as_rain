import Snowflake from './snowflakes';

class Snow {
  constructor(type, ctx, flakeParams){
    this.type = type;
    this.ctx = ctx;
    this.flakeParams = flakeParams;
    this.snowflakes = [];
  }

  update() {
    let time = this.ctx.frameCount / 60;
    for (let i = 0; i < this.snowflakes.length; i++) {
      let flake = this.snowflakes[i];
      if (flake.lifespan <= 0) {
        this.snowflakes.splice(i, 1);
      }
      flake.display();
      flake.update(time);
    }
  }

  display() {
    for (let i = 0; i < this.ctx.random(5); i++) {
      this.snowflakes.push(new Snowflake(this.flakeParams));
    }
    for (let flake of this.snowflakes) {
      flake.display();
    }
  }
}

export default Snow;