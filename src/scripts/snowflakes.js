import FallingObject from './falling_objects';

class Snowflake extends FallingObject {
  constructor({posX, posY, ctx, width, height, color, speed}) {
    super(posX, posY, ctx, width, height, speed);
    this.color = color;
    this.startY = posY;
    this.startX = posX;
    this.initialangle = Math.random() * (Math.PI * 2);
    this.lifespan = 350;
    
    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    let windowWidth = this.ctx.width
    let poweredWidth = Math.pow(windowWidth / 2, 2)
    let randomized = Math.random() * poweredWidth;
    this.radius = Math.sqrt(randomized);
  }

  update(time) {
    let spiralRate = 0.1; // angular speed
    let spiralChange = spiralRate * time
    let newAngle = this.initialangle + spiralChange;

    // controls how the snowflake spirals as it falls
    this.posX = (this.ctx.width / 2) + (this.radius * Math.sin(newAngle));

    // //snowflake goes back to top if it goes too far to the side
    // seems unnecessary
    // if (this.posX > this.ctx.width || this.posX < 0) {
    //   this.posX = this.startX;
    //   this.posY = this.startY;
    // }

    // different size snowflakes fall at slightly different y speeds
    // can change the falling speed, but lifespan needs to increase accordingly
    this.posY += Math.pow(this.width, 0.5);
    if (this.posY >= this.ctx.height) {
      //snow rests on bottom for rest of lifespan
      this.posY = this.ctx.height;
      //snow doesn't pile up
      // this.posY = this.startY;
      // this.posX = this.startX;
    }

    this.lifespan --;
  }

  display() {
    this.ctx.ellipse(this.posX, this.posY, this.width, this.height);
  }
}

export default Snowflake;