import p5 from 'p5';
import Snowflake from './snowflakes'

const sketch = (p) => {
  let snowflakes = [];
  let height = 600;
  let width = 600;
  let color = 240;
  let blobSpeed = 1;
  let backgroundColor = 'gray';

  p.setup = () => {
    p.createCanvas(height, width);
    p.fill(color);
    p.noStroke();
    // blob = new Snowflake(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color);
  }
  
  p.draw = () => {
    p.background(backgroundColor);
      for (let i = 0; i < p.random(5); i++) {
        let blobX = p.random(0, width);
        let blobY = Math.random() * -50;
        let blobWidth = p.random(2, 5);
        let blobHeight = p.random(2, 5);
        snowflakes.push(new Snowflake(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color)); // append snowflake object
      }
    // splice off large chunk of snowflakes - was using this before chekcing lifespan
    // if (snowflakes.length > 1000) {
    //   snowflakes.splice(0, 100);
    //   console.log(snowflakes.length);
    // }
    let t = p.frameCount / 60;
    // loop through snowflakes to check their lifespan
    for (let i = 0; i < snowflakes.length; i ++) {
      let flake = snowflakes[i];
      if (flake.lifespan <= 0) {
        snowflakes.splice(i, 1)
      }
      flake.update(t); // update snowflake position
      flake.display(); // redraw snowflake
    }
  }
}



export default new p5(sketch, 'sketch');


