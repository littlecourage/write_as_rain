import Cloud from './clouds';
import SmallCloud from './small_clouds.js';
import {HEAVYCLOUD, LIGHTCLOUD, STORMCLOUD} from './weather_details';

class CloudySky {
  constructor(type, ctx, cloudParams) {
    console.log(cloudParams);
    this.type = type;
    this.ctx = ctx;
    this.cloudParams = cloudParams;
    this.clouds = [];
    this.timer = 100;
    
  }

  display() {
    this.ctx.noStroke();
    this.timer += 1;

    if (this.type === HEAVYCLOUD) {
      if (this.timer > this.ctx.random(200, 350)) {
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.timer = 0;
      }
    }

    if (this.type === LIGHTCLOUD) {
      if (this.timer > this.ctx.random(150, 450)) {
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.timer = 0;
      }
    }

    if (this.type === STORMCLOUD) {
      if (this.timer > this.ctx.random(200, 350)) {
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
        this.timer = 0;
      }
    }

    for (let cloud of this.clouds) {
      cloud.display();
    }
  }
  
  update() {
    for (let i = 0; i < this.clouds.length; i++) {
      const cloud = this.clouds[i];
      if (cloud.lifespan <= 0) {
        this.clouds.splice(i, 1);
      }
      cloud.display();
      cloud.update();
    }
  }
}

export default CloudySky;