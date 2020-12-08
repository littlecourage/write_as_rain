
class FallingObject {
  constructor(posX, posY, ctx, width, height, speed, color) {
    this.startY = posY;
    this.posX = posX;
    this.posY = posY;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
  }

  display() {
    this.ctx.square(this.posX, this.posY, this.width);
  }

  update() {
    this.posY += this.speed;

    if (this.posY > this.ctx.height) {
      this.posY = this.startY;
    }
  }

}

class Snowflake extends FallingObject {
  constructor(posX, posY, ctx, width, height, speed, color) {
    super(posX, posY, ctx, width, height, speed)
    this.color = color;
    this.startY = posY;
    this.startX = posX;
    this.initialangle = Math.random() * (Math.PI * 2);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    let windowWidth = this.ctx.width
    let poweredWidth = Math.pow(windowWidth / 2, 2)
    let randomized = Math.random() * poweredWidth;
    this.radius = Math.sqrt(randomized);
  }

  update(time) {
    let change = 0.2; // angular speed
    let angle = change * time + this.initialangle;
    this.posX = (this.ctx.width / 2) + (this.radius * Math.sin(angle));

    if (this.posX > this.ctx.width || this.posX < 0) {
      this.posX = this.startX;
      this.posY = this.startY;
    }

    // // different size snowflakes fall at slightly different y speeds
    this.posY += Math.pow(this.width, 0.5);
    if (this.posY >= this.ctx.height) {
      //snow rests on bottom
      this.posY = this.ctx.height;
      //snow doesn't pile up
      // this.posY = this.startY;
      // this.posX = this.startX;
    }
  }

  display() {
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height);
  }
}

export { FallingObject, Snowflake };