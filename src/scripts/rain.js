import Raindrop from './raindrops';
import {LIGHTRAIN, SHOWERS, HEAVYRAIN} from './weather_details';

class Rain {
  constructor(type, ctx, dropParams) {
    this.type = type;
    this.ctx = ctx;
    this.dropParams = dropParams;
    this.raindrops = [];
  }

  update() {
    for (let i = 0; i < this.raindrops.length; i++) {
      let drop = this.raindrops[i];
      if (drop.lifespan <= 0) {
        this.raindrops.splice(i, 1);
      }
      drop.display();
      drop.update();
    }
  }

  display() {
    this.ctx.stroke(this.dropParams.color);
    if (this.type === LIGHTRAIN) {
      for (let i = 0; i < this.ctx.random(2, 4); i++) {
        this.raindrops.push(new Raindrop(this.dropParams))     
      }
    } else if (this.type === HEAVYRAIN) {
      for (let i = 0; i < this.ctx.random(15, 20); i++) {
        this.raindrops.push(new Raindrop(this.dropParams))
      }
    } else if (this.type === SHOWERS) {
      for (let i = 0; i < this.ctx.random(4, 8); i++) {
        this.raindrops.push(new Raindrop(this.dropParams))
      }
    }

    for (let drop of this.raindrops) {
      drop.display();
    }

    (this.raindrops);

  }

}

export default Rain;