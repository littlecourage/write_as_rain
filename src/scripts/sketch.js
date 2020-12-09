import p5 from 'p5';
import Snowflake from './snowflakes';
import Raindrop from './raindrops';
import APIWeather from '../data/weather_api';
import DataManager from '../scripts/data_manager';


const nyId = 2459115
const weatherData = DataManager.getData(nyId);

export const sketch = (p) => {
  //const targetUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2459115/';
  let height = 500;
  let width = 800;
  let queryData;
  //snow
  let snowflakes = [];
  let color;
  let blobSpeed;
  let backgroundColor;

  //rain
  let raindrops = [];
  // let color;
  // let backgroundColor;
  // let blobSpeed;
  let initialAngle;

  // When using API to fetch weather
  let weather;

    p.setup = async () => {
      await weatherData.then(data => queryData = data)
      // let weather = queryData.consolidated_weather[0].weather_state_name;
      weather = 'Snow';
      if (weather === 'Heavy Rain') {
        color = 'gray'
        blobSpeed = 4;
        backgroundColor = '#e0e6eb'
        initialAngle = -3;
        p.createCanvas(width, height);
        //use stroke and no fill for raindrop
        p.stroke(color);
      }

      if (weather === 'Snow') {
        color = 240;
        blobSpeed = 1;
        backgroundColor = 'gray';
        p.createCanvas(width, height);
        //use fill and no stroke for snowflake
        p.fill(color);
        p.noStroke();
      }
    
      //center blob in middle of page
      // let blobX = 400;
      // let blobY = 250;
      // let blobWidth = 2;
      // let blobHeight = 2;
      // blob = new Raindrop(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color, initialAngle);
    }
    
    p.draw = () => {
      if (weather === 'Heavy Rain') {
        p.background(backgroundColor);
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
      } else if (weather === 'Snow') {
        p.background(backgroundColor);
        //snow
        for (let i = 0; i < p.random(5); i++) {
          let blobX = p.random(-50, width + 50);
          let blobY = Math.random() * -50;
          let blobWidth = p.random(2, 5);
          let blobHeight = p.random(2, 5);
          snowflakes.push(new Snowflake(blobX, blobY, p, blobWidth, blobHeight, blobSpeed, color)); // append snowflake object
        }

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

        //splice off large chunk of snowflakes - was using this before chekcing lifespan
        // if (snowflakes.length > 1000) {
        //     snowflakes.splice(0, 100);
        //     console.log(snowflakes.length);
        // }


      }
      

      
    }
 
}
        
        
        
        // export default new p5(sketch);


