import p5 from 'p5';
import Snowflake from './snowflakes';
import Raindrop from './raindrops';

const sketch = (p) => {
  let height = 500;
  let width = 800;

  //snow
  // let snowflakes = [];
  // let color = 240;
  // let blobSpeed = 1;
  // let backgroundColor = 'gray';

  //rain
  let raindrops = [];
  let color = 'gray'
  let backgroundColor = '#e0e6eb'
  let blobSpeed = 4;
  let initialAngle = -3;
  let blob;

  p.setup = () => {
    p.createCanvas(width, height);

    // use fill and no stroke for snowflake
    // p.fill(color);
    // p.noStroke();

    //use stroke and no fill for raindrop
    p.stroke(color);

    //center blob in middle of page
    // let blobX = 400;
    // let blobY = 250;
    // let blobWidth = 2;
    // let blobHeight = 2;
    // blob = new Raindrop(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color, initialAngle);
  }
  
  p.draw = () => {
    p.background(backgroundColor);
    // blob.display();
    // let t = p.frameCount / 60;
    // blob.update(t);

    //rain
    for (let i = 0; i < p.random(5); i++) {
      let blobX = p.random(-width, 2 * width);
      let blobY = Math.random() * -10;
      let blobWidth = p.random(2, 5);
      let blobHeight = p.random(2, 5);

      raindrops.push(new Raindrop(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color, initialAngle))
    }

    let t = p.frameCount / 60;

    for (let i = 0; i < raindrops.length; i++) {
      let drop = raindrops[i];
      if (drop.lifeSpan <= 0) {
        raindrops.splice(i, 1);
      }
      drop.display();
      drop.update(t);
    }

    //snow
    // for (let i = 0; i < p.random(5); i++) {
    //   let blobX = p.random(0, width);
    //   let blobY = Math.random() * -50;
    //   let blobWidth = p.random(2, 5);
    //   let blobHeight = p.random(2, 5);
    //   snowflakes.push(new Snowflake(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color)); // append snowflake object
    // }
    // splice off large chunk of snowflakes - was using this before chekcing lifespan
    // if (snowflakes.length > 1000) {
    //   snowflakes.splice(0, 100);
    //   console.log(snowflakes.length);
    // }
    // let t = p.frameCount / 60;
    // // loop through snowflakes to check their lifespan
    // for (let i = 0; i < snowflakes.length; i ++) {
    //   let flake = snowflakes[i];
    //   if (flake.lifespan <= 0) {
    //     snowflakes.splice(i, 1)
    //   }
    //   flake.update(t); // update snowflake position
    //   flake.display(); // redraw snowflake
    // }
  }
}



export default new p5(sketch, 'sketch');


