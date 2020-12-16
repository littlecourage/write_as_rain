import Cloud from './clouds';
import SmallCloud from './small_clouds.js';
import {HEAVYCLOUD, LIGHTCLOUD, STORMCLOUD, SCATTEREDCLOUD, NIGHTCLOUD, THUNDERSTORM} from './weather_details';

class CloudySky {
  constructor(type, ctx, cloudParams) {
    console.log(type);
    console.log('new cloudy sky')
    this.type = type;
    this.ctx = ctx;
    this.cloudParams = cloudParams;
    this.clouds = [];
    this.timer = 200;
    this.populated = false;
  }

  populate() {
    let params = {
      color: this.cloudParams.color,
    }
    if (this.type === HEAVYCLOUD || this.type === STORMCLOUD) {
      while (this.clouds.length < 10) {
        if (this.clouds.length % 2) {
          params.posX = this.ctx.random(50, 750);
          this.clouds.push(new Cloud(this.type, this.ctx, params));
        } else {
          params.posX = this.ctx.random(50, 750);
          this.clouds.push(new SmallCloud(this.type, this.ctx, params));
        }
      }
    }

    if (this.type === LIGHTCLOUD) {
      while (this.clouds.length < 7) {
        if (this.clouds.length % 6 === 0) {
          params.posX = this.ctx.random(50, 750);
          this.clouds.push(new Cloud(this.type, this.ctx, params));
        } else {
          params.posX = this.ctx.random(50, 750);
          this.clouds.push(new SmallCloud(this.type, this.ctx, params));
        }
      }
    }

    if (this.type === SCATTEREDCLOUD) {
      while (this.clouds.length < 2) {
        params.posX = this.ctx.random(50, 750);
        this.clouds.push(new SmallCloud(this.type, this.ctx, params));
      }
    }
  }

  display() {
    this.ctx.noStroke();
    this.timer += 1;

    if (!this.populated) {
      this.populate();
      this.populated = true;
    }

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
      if (this.timer > this.ctx.random(300, 450)) {
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new Cloud(this.type, this.ctx, this.cloudParams));
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

    if (this.type === SCATTEREDCLOUD) {
      if (this.timer > this.ctx.random(400, 550)) {
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.clouds.push(new SmallCloud(this.type, this.ctx, this.cloudParams));
        this.timer = 0;
      }
    }

    for (let cloud of this.clouds) {
      cloud.display();
    }
    // console.log(this.clouds);
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