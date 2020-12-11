import Snowflake from './snowflakes';
import {weatherDetails} from './weather_details';

export const sketchSnow = (p) => {
  const details = weatherDetails.SNOW
  const canvasHeight = 500;
  const canvasWidth = 800;
  let snowflakes = [];
  
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    //use fill and no stroke for snowflake
    p.fill(weatherDetails.SNOW.color);
    p.noStroke();
  }

  p.draw = () => {
    p.background(details.backgroundColor);

    for (let i = 0; i < p.random(5); i++) {
      let snowParams = {
        posX: p.random(-50, canvasWidth + 50),
        posY: Math.random() * -50,
        ctx: p,
        width: p.random(2, 5),
        height: p.random(2, 5),
        speed: details.blobSpeed,
        color: details.color,
      }
      snowflakes.push(new Snowflake(snowParams));
    }

    let t = p.frameCount / 60;
    // loop through snowflakes to check their lifespan
    for (let i = 0; i < snowflakes.length; i++) {
      let flake = snowflakes[i];
      if (flake.lifespan <= 0) {
        snowflakes.splice(i, 1)
      }
      flake.update(t); // update snowflake position
      flake.display(); // redraw snowflake
    }
  }
}