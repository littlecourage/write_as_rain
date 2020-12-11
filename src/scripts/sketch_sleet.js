import Sleet from './sleets';
import { weatherDetails } from './weather_details';

export const sketchSleet = (p) => {
  const details = weatherDetails.SLEET
  const canvasHeight = 500;
  const canvasWidth = 800;
  let sleets = [];

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    p.stroke(details.color);
  }

  p.draw = () => {
    p.background(details.backgroundColor);

    for (let i = 0; i < p.random(10, 20); i++) {

      let sleetParams = {
        posX: p.random(-canvasWidth, 2 * canvasWidth),
        posY: Math.random() * -10,
        ctx: p,
        height: p.random(6, 8),
        width: p.random(1, 3),
        speed: details.blobSpeed,
        color: details.color,
        initialAngle: p.random(1, 2.5)
      }

      sleets.push(new Sleet(sleetParams))
    }
    let t = p.frameCount / 60;
    for (let i = 0; i < sleets.length; i++) {
      let sleet = sleets[i];
      if (sleet.lifespan <= 0) {
        sleets.splice(i, 1);
      }
      sleet.display();
      sleet.update(t);
    }
  }
}