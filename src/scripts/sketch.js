import p5 from 'p5';
import Snowflake from './snowflakes';
import Raindrop from './raindrops';
import Sleet from './sleet';
import Hail from './hail';
import DataManager from './data_manager';
import {weatherTypes, weatherDetails} from './weather_details';


//const targetUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2459115/';
const nyId = 2459115
const weatherData = DataManager.getData(nyId);

export const sketch = (p) => {
  //canvas attributes
  const canvasHeight = 500;
  const canvasWidth = 800;
  let backgroundColor;

  //containers for weather particles
  let snowflakes = [];
  let raindrops = [];
  let sleets = [];
  let hails = [];
  
  // When using API to fetch weather
  let queryData;
  let weather;

  p.setup = async () => {
    //create canvas container
    p.createCanvas(canvasWidth, canvasHeight);
    p.text('rendering the weather...', canvasWidth/2, canvasHeight/2)
    await weatherData.then(data => queryData = data)
    // weather = queryData.consolidated_weather[0].weather_state_name;
    // console.log(queryData);
    // console.log(weather)
    
    weather = 'Sleet';


    if (weather === 'Heavy Rain') {
      backgroundColor = weatherDetails.HEAVYRAIN.backgroundColor;
      //use stroke and no fill for raindrop
      p.stroke(weatherDetails.HEAVYRAIN.color);
    }

    if (weather === 'Light Rain') {
      backgroundColor = weatherDetails.LIGHTRAIN.backgroundColor;
      //use stroke and no fill for raindrop
      p.stroke(weatherDetails.LIGHTRAIN.color);
    }

    if (weather === 'Showers') {
      backgroundColor = weatherDetails.SHOWERS.backgroundColor;
      //use stroke and no fill for raindrop
      p.stroke(weatherDetails.SHOWERS.color);
    }

    if (weather === 'Snow') {
      backgroundColor = weatherDetails.SNOW.backgroundColor;
      //use fill and no stroke for snowflake
      p.fill(weatherDetails.SNOW.color);
      p.noStroke();
    }

    if (weather === 'Sleet') {
      backgroundColor = weatherDetails.SLEET.backgroundColor;
      p.stroke(weatherDetails.SLEET.color);
    }

    if (weather === 'Hail') {
      backgroundColor = weatherDetails.HAIL.backgroundColor;
      p.stroke(weatherDetails.HAIL.color);
    }

  }
    
  p.draw = () => {
    if (weather === 'Heavy Rain' || weather === 'Light Rain' || weather === 'Showers') {
      let details;
      if (weather === 'Heavy Rain') {
        details = weatherDetails.HEAVYRAIN;
        for (let i = 0; i < p.random(15, 20); i++) {
          let blobX = p.random(-canvasWidth, 2 * canvasWidth);
          let blobY = Math.random() * -10;
          let blobHeight = p.random(4, 6);
          let blobWidth = p.random(1, 2);

          let rainParams = {
            posX: blobX,
            posY: blobY,
            ctx: p,
            height: blobHeight,
            width: blobWidth,
            speed: details.blobSpeed,
            color: details.color,
            initialAngle: details.initialAngle
          }

          raindrops.push(new Raindrop(rainParams))
        }
      } else if (weather === 'Light Rain') {
        details = weatherDetails.LIGHTRAIN;
        for (let i = 0; i < p.random(2, 4); i++) {
          let blobX = p.random(-canvasWidth, 2 * canvasWidth);
          let blobY = Math.random() * -10;
          let blobHeight = p.random(1, 3);
          let blobWidth = 1;

          let rainParams = {
            posX: blobX,
            posY: blobY,
            ctx: p,
            height: blobHeight,
            width: blobWidth,
            speed: details.blobSpeed,
            color: details.color,
            initialAngle: details.initialAngle
          }

          raindrops.push(new Raindrop(rainParams))
        }
      } else if (weather === 'Showers') {
        details = weatherDetails.SHOWERS
        for (let i = 0; i < p.random(4, 8); i++) {
          let blobX = p.random(-canvasWidth, 2 * canvasWidth);
          let blobY = Math.random() * -10;
          let blobHeight = p.random(2, 5);
          let blobWidth = 1;

          let rainParams = {
            posX: blobX,
            posY: blobY,
            ctx: p,
            height: blobHeight,
            width: blobWidth,
            speed: details.blobSpeed,
            color: details.color,
            initialAngle: details.initialAngle
          }

          raindrops.push(new Raindrop(rainParams))
        }
      }
      p.background(details.backgroundColor);

      //raindrops created during every frame of animation

      let t = p.frameCount / 60;
      for (let i = 0; i < raindrops.length; i++) {
        let drop = raindrops[i];
        if (drop.lifespan <= 0) {
          raindrops.splice(i, 1);
        }
        drop.display();
        drop.update(t);
      }

    }
    
    if (weather === 'Snow') {
      let details = weatherDetails.SNOW
      p.background(details.backgroundColor);
      //snow
      for (let i = 0; i < p.random(5); i++) {
        let blobX = p.random(-50, canvasWidth + 50);
        let blobY = Math.random() * -50;
        let blobWidth = p.random(2, 5);
        let blobHeight = p.random(2, 5);

        let snowParams = {
          posX: blobX,
          posY: blobY,
          ctx: p,
          width: blobWidth,
          height: blobHeight,
          speed: details.blobSpeed,
          color: details.color,
        }
        snowflakes.push(new Snowflake(snowParams));
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

    if (weather === 'Sleet') {
      let details = weatherDetails.SLEET
      p.background(details.backgroundColor);

      //raindrops created during every frame of animation
      for (let i = 0; i < p.random(10, 20); i++) {
        let blobX = p.random(-canvasWidth, 2 * canvasWidth);
        let blobY = Math.random() * -10;
        let blobHeight = p.random(6, 8);
        let blobWidth = p.random(1, 3);
        let initialAngle = p.random(1, 2.5)

        let sleetParams = {
          posX: blobX,
          posY: blobY,
          ctx: p,
          height: blobHeight,
          width: blobWidth,
          speed: details.blobSpeed,
          color: details.color,
          initialAngle: initialAngle
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

    if (weather === 'Hail') {
      let details = weatherDetails.HAIL
      p.background(details.backgroundColor);
      //snow
      for (let i = 0; i < p.random(10); i++) {
        let blobX = p.random(-canvasWidth/2, canvasWidth + canvasWidth/2);
        let blobY = Math.random() * -50;
        let blobWidth = p.random(2, 5);
        let blobHeight = p.random(2, 5);

        let hailParams = {
          posX: blobX,
          posY: blobY,
          ctx: p,
          width: blobWidth,
          height: blobHeight,
          speed: details.blobSpeed,
          color: details.color,
          initialAngle: details.initialAngle
        }
        hails.push(new Hail(hailParams));
      }

      let t = p.frameCount / 60;
      // loop through snow to check their lifespan
      for (let i = 0; i < hails.length; i++) {
        let hail = hails[i];
        if (hail.lifespan <= 0) {
          hails.splice(i, 1)
        }
        hail.update(t);
        hail.display();
      }
    }
  }
 
}
        
        
        // no longer need to export like this because of how we are manipulating the DOM in index.js
        // export default new p5(sketch);


