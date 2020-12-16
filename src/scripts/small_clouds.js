class SmallCloud {

  constructor(type, ctx, cloudParams) {
    console.log('new small cloud')
    this.lobes = [];
    this.lifespan = 400;
    this.color = cloudParams.color[Math.floor(Math.random() * cloudParams.color.length)];
    this.posX = cloudParams.posX;
    this.posY = ctx.random(-10, ctx.height/3);
    this.width = ctx.random(30, 50);
    this.height = ctx.random(30, 50);
    this.speed = ctx.random(0.3, 0.7);
    this.type = type;
    this.ctx = ctx;
    this.numLobes = ctx.random(12, 16);
    this.addLobes();
  }

  addLobes() {
    for (let i = 0; i < this.numLobes; i++) {
      let newLobe = {
        posX: this.posX + this.ctx.random((this.width * 0.9) * -1, this.width * 0.9),
        posY: this.posY + this.ctx.random((this.height * 0.5) * -1, this.height * 0.5),
        w: this.width * this.ctx.random(0.7, 1),
        h: this.height * this.ctx.random(0.7, 1)
      }
      this.lobes.push(newLobe)
    }
  }


  update() {
    // console.log('before')
    // console.log(this.posX)
    // console.log(`speed: ${this.speed}`)
    // console.log('after');
    this.posX = this.posX + this.speed;
    // console.log(this.posX)
    for (let i = 0; i < this.lobes.length; i++) {
      this.lobes[i].posX += this.speed;
    }
    if (this.posX >= this.ctx.width * 1.25) {
      this.lifespan = 0;
    }
  }

  display() {
    // this.ctx.noStroke();
    this.ctx.fill(this.color);
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height)
    for (let i = 0; i < this.lobes.length; i++) {
      const CORNER = CORNER;
      this.ctx.ellipseMode(CORNER)
      this.ctx.ellipse(
        this.lobes[i].posX, this.lobes[i].posY, this.lobes[i].w, this.lobes[i].h
      )
    }
  }


}

export default SmallCloud;