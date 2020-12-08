import p5 from 'p5';
import collide2d from "p5.collide2d";
import { FallingObject, Snowflake } from './objects'

const sketch = (p) => {
  let snowflakes = [];
  let height = 600;
  let width = 600;
  let blobX = p.random(0, width);
  let blobY = Math.random() * -50;
  let color = 240;
  let blob;

  let blobSpeed = 1;

  p.setup = () => {
    p.createCanvas(height, width);
    p.fill(color);
    p.noStroke();
    // blob = new Snowflake(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color);
  }
  
  p.draw = () => {
    p.background('gray');
    for (let i = 0; i < p.random(5); i++) {
      let blobWidth = p.random(2, 5);
      let blobHeight = p.random(2, 5);
      snowflakes.push(new Snowflake(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color)); // append snowflake object
    }
    if (snowflakes.length > 1000) {
      snowflakes.splice(0, 100);
      console.log(snowflakes.length);
    }
    let t = p.frameCount / 60;
    // blob.display();
    // blob.update(t);
    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      flake.update(t); // update snowflake position
      // delete snowflake if past end of screen
      flake.display(); // draw snowflake
    }
  }
}



export default new p5(sketch, 'sketch');


