import p5 from 'p5';
import Snowflake from './snowflakes';
import Rain from './rain';
import Sleet from './sleet';
import Hail from './hail_stone';
import Cloud from './clouds';
import Sun from './sun';
import Sky from './sky';
import Ground from './ground';
import DataManager from './data_manager';
import axios from 'axios';
import { STORMCLOUD, SUN, backgroundStyles, weatherBitCodes, weatherDetails, weatherMap} from './weather_details';
import {getProfile, buildObjects} from './builder';


//const targetUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2459115/';
const nyId = 2459115;
const laId = 2442047;
const abqId = 2352824;
// const weatherData = DataManager.getData(nyId);


// request to backend to Weather Bit API, not currently being used...
// export const getWeather = (zipcode) => {
//   axios.get(`weather/${zipcode}`).then((res) => {
//     console.log(res.data.data[0])
//     return res.data.data[0]
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

export let weatherObjects = [];

export const sketch = (p) => {
  //canvas attributes
  const canvasHeight = 500;
  const canvasWidth = 800;
  let sky;
  let backgroundColor;
  let ground;
  let groundColor;
  let drawOnce;
  // When using API to fetch weather
  let queryData;
  let weather;

  //containers for weather particles

  let snowflakes = [];
  // let raindrops = [];
  let sleets = [];
  let hails = [];
  let clouds = [];
  
  //timer for clouds
  let timer;
  let lightRain;
  let dropParams;

  p.setup = async () => {
    //create canvas container
    p.createCanvas(canvasWidth, canvasHeight);
    p.text('rendering the weather...', canvasWidth/2, canvasHeight/2)
    // await weatherData.then(data => queryData = data)
    // weather = queryData.consolidated_weather[0].weather_state_name;
    // console.log(queryData);
    // console.log(weather)
    
    weather = 'd01d';
    let weatherName = weather.slice(0, weather.length - 1);
    backgroundColor = backgroundStyles[weatherName].skyColor;
    console.log(backgroundColor);
    groundColor = backgroundStyles[weatherName].groundColor;
    console.log(groundColor);
    sky = new Sky(backgroundColor, p);
    ground = new Ground(groundColor, p);

    let profiles = getProfile(weather, weatherBitCodes);

    if (backgroundStyles[weatherName].stormClouds) {
      profiles.push(STORMCLOUD)
    }

    if (backgroundStyles[weatherName].sun) {
      profiles.unshift(SUN)
    }

    let objs = buildObjects(profiles, weatherDetails, p)
  
    weatherObjects = weatherObjects.concat(objs);

    console.log(weatherObjects);

    // p.background(backgroundColor)
    // if (weather === 'Clear') {
    //   let details = weatherDetails.CLEAR
    //   backgroundColor = details.backgroundColor;
    //   //use stroke and no fill for raindrop
    //   p.fill(weatherDetails.CLEAR.sunColor);
    //   p.noStroke();
    //   timer = 0;
    // }

    // if (weather === 'Thunderstorm' || weather === 'Thunder') {
    //   let details = weatherDetails.THUNDERSTORM
    //   backgroundColor = details.backgroundColor;
    //   p.noStroke();
    //   timer = 0;
    // }

    // if (weather === 'Heavy Rain') {
    //   backgroundColor = weatherDetails.HEAVYRAIN.backgroundColor;
    //   //use stroke and no fill for raindrop
    //   p.stroke(weatherDetails.HEAVYRAIN.color);
    //   timer = 0;
    // }

    // if (weather === 'Light Rain') {
    //   backgroundColor = weatherDetails.LIGHTRAIN.backgroundColor;
    //   //use stroke and no fill for raindrop
    //   p.stroke(weatherDetails.LIGHTRAIN.color);
    //   timer = 0;
    //   dropParams = weatherDetails.LIGHTRAIN;
    //   dropParams.ctx = p;
    //   weatherObjects.push(new Rain(weather, p, dropParams));
    // }

    // if (weather === 'Showers') {
    //   backgroundColor = weatherDetails.SHOWERS.backgroundColor;
    //   //use stroke and no fill for raindrop
    //   p.stroke(weatherDetails.SHOWERS.color);
    //   timer = 0;
    // }

    // if (weather === 'Snow') {
    //   backgroundColor = weatherDetails.SNOW.backgroundColor;
    //   //use fill and no stroke for snowflake
    //   p.fill(weatherDetails.SNOW.color);
    //   p.noStroke();
    // }

    // if (weather === 'Sleet') {
    //   backgroundColor = weatherDetails.SLEET.backgroundColor;
    //   p.stroke(weatherDetails.SLEET.color);
    // }

    // if (weather === 'Hail') {
    //   backgroundColor = weatherDetails.HAIL.backgroundColor;
    //   p.stroke(weatherDetails.HAIL.color);
    // }

    // if (weather === 'Light Cloud' || weather === 'Heavy Cloud') {
    //   backgroundColor = weatherDetails.LIGHTCLOUD.backgroundColor;
    //   p.fill(weatherDetails.LIGHTCLOUD.color);
    //   p.noStroke();
    //   timer = 0; 
    // }

    let weatherCaption = weather;
    console.log(weatherCaption)
    if (weatherCaption === "Light Cloud" || weatherCaption === 'Heavy Cloud') {
      weatherCaption += "s";
    }
    p.createDiv(`Expect ${weatherCaption} in the NYC Area today`).id('caption')
    
  }
  
  
  p.draw = () => {
    p.background(sky.color)
    
    for (let obj of weatherObjects) {
      obj.display();
      obj.update();
    }
    ground.display();
    
    if (weather === 'Thunderstorm'|| weather === 'Thunder') {
      let details = weatherDetails.THUNDERSTORM
      p.background(details.backgroundColor);
      
      let cloudParams = {
        posX: -200,
        posY: p.random(-10, canvasHeight + 10),
        ctx: p,
        width: p.random(60, 150),
        height: p.random(60, 150),
        speed: p.random(0.2, 0.4),
        color: details.stormCloudColors,
        numLobes: 20,
        type: 'heavy'
      }
      
      let cloudParamsSmall = {
        posX: -50,
        posY: p.random(-10, canvasHeight + 10),
        ctx: p,
        width: p.random(30, 50),
        height: p.random(30, 50),
        speed: p.random(0.3, 0.5),
        color: details.stormCloudColors,
        numLobes: 10,
        type: 'light'
      }
      
      let rainDetails = weatherDetails.SHOWERS
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
          speed: rainDetails.blobSpeed,
          color: details.color,
          initialAngle: rainDetails.initialAngle
        }
        
        raindrops.push(new Raindrop(rainParams))
      }
      
      let t = p.frameCount / 60;
      for (let i = 0; i < raindrops.length; i++) {
        let drop = raindrops[i];
        if (drop.lifespan <= 0) {
          raindrops.splice(i, 1);
        }
        p.stroke(weatherDetails.THUNDERSTORM.rainColor);
        drop.display();
        drop.update(t);
      }
      
      timer += 1;
      if (timer > p.random(250, 350)) {
        p.background('#e6e6e6');
        clouds.push(new Cloud(cloudParams))
        clouds.push(new Cloud(cloudParamsSmall))
        p.background('#e6e6e6');
        timer = 0;
      }
      
      for (let i = 0; i < clouds.length; i++) {
        if (clouds[i].lifespan <= 0) {
          clouds.splice(i, 1);
        }
        clouds[i].display();
        clouds[i].update();
      }
      
    }
    
    // if (weather === 'Clear') {
    //   let cloudDetails = weatherDetails.LIGHTCLOUD
    //   p.background(details.backgroundColor);
      
    //   let details = weatherDetails.CLEAR
    //   let sunParams = {
    //     posX: 100,
    //     posY: 100,
    //     ctx: p,
    //     width: 60,
    //     height: 60,
    //     color: details.sunColor
    //   }
      
    //   let sun = new Sun(sunParams);
    //   sun.display();
      
    //   let cloudParamsSmall = {
    //     posX: -100,
    //     posY: p.random(-10, canvasHeight + 10),
    //     ctx: p,
    //     width: p.random(30, 50),
    //     height: p.random(30, 50),
    //     speed: p.random(0.1, 0.5),
    //     color: cloudDetails.color,
    //     numLobes: 8,
    //     type: 'light'
    //   }
      
    //   timer += 1;
    //   if (timer > p.random(450, 650)) {
    //     clouds.push(new Cloud(cloudParamsSmall))
    //     timer = 0;
    //   }
      
    //   for (let i = 0; i < clouds.length; i++) {
    //     if (clouds[i].lifespan <= 0) {
    //       clouds.splice(i, 1);
    //     }
    //     clouds[i].display();
    //     clouds[i].update();
    //   }
      
    // }
    
    
    // if (weather === 'Heavy Rain' || weather === 'Light Rain' || weather === 'Showers') {
    //   let dropParams;
      
    //   if (weather === 'Heavy Rain') {
    //     dropParams = weatherDetails.HEAVYRAIN;
    //     dropParams.ctx = p;
    //     let heavyRain = new Rain(weather, p, dropParams)
    //     heavyRain.display();
    //     heavyRain.update();
    //     // for (let i = 0; i < p.random(15, 20); i++) {
    //       //   let blobX = p.random(-canvasWidth, 2 * canvasWidth);
    //       //   let blobY = Math.random() * -10;
    //       //   let blobHeight = p.random(4, 6);
    //       //   let blobWidth = p.random(1, 2);
          
    //       //   let rainParams = {
    //         //     posX: blobX,
    //         //     posY: blobY,
    //         //     ctx: p,
    //         //     height: blobHeight,
    //         //     width: blobWidth,
    //         //     speed: details.blobSpeed,
    //         //     color: details.color,
    //         //     initialAngle: details.initialAngle
    //         //   }
            
    //         //   raindrops.push(new Raindrop(rainParams))
    //         // }
    //       } else if (weather === 'Light Rain') {
    //         lightRain.display();
    //         lightRain.update();
    //         // for (let i = 0; i < p.random(2, 4); i++) {
    //           //   let blobX = p.random(-canvasWidth, 2 * canvasWidth);
    //           //   let blobY = Math.random() * -10;
    //           //   let blobHeight = p.random(1, 3);
    //           //   let blobWidth = 1;
              
    //           //   let rainParams = {
    //             //     posX: blobX,
    //             //     posY: blobY,
    //             //     ctx: p,
    //             //     height: blobHeight,
    //             //     width: blobWidth,
    //             //     speed: details.blobSpeed,
    //             //     color: details.color,
    //             //     initialAngle: details.initialAngle
    //             //   }
                
    //             //   raindrops.push(new Raindrop(rainParams))
    //             // }
    //         } else if (weather === 'Showers') {
    //           dropParams = weatherDetails.SHOWERS;
    //           dropParams.ctx = p;
    //           let showers = new Rain(weather, p, dropParams)
    //           showers.display();
    //           showers.update();
    //           // details = weatherDetails.SHOWERS
    //           // for (let i = 0; i < p.random(4, 8); i++) {
    //             //   let blobX = p.random(-canvasWidth, 2 * canvasWidth);
    //             //   let blobY = Math.random() * -10;
    //             //   let blobHeight = p.random(2, 5);
    //             //   let blobWidth = 1;
                
    //             //   let rainParams = {
    //               //     posX: blobX,
    //               //     posY: blobY,
    //               //     ctx: p,
    //               //     height: blobHeight,
    //               //     width: blobWidth,
    //               //     speed: details.blobSpeed,
    //               //     color: details.color,
    //               //     initialAngle: details.initialAngle
    //               //   }
                  
    //               //   raindrops.push(new Raindrop(rainParams))
    //               // }
    //             }
    //             // p.background(details.backgroundColor);
                
    //             // //raindrops created during every frame of animation
    //             // for (let i = 0; i < raindrops.length; i++) {
    //               //   let drop = raindrops[i];
    //               //   if (drop.lifespan <= 0) {
    //                 //     raindrops.splice(i, 1);
    //                 //   }
    //                 //   drop.display();
    //                 //   drop.update();
    //                 // }
                    
    //             }
                  
    //             if (weather === 'Snow') {
    //               let details = weatherDetails.SNOW
    //               p.background(details.backgroundColor);
    //               //snow
    //               for (let i = 0; i < p.random(5); i++) {
    //                 let snowParams = {
    //                   posX: p.random(-50, canvasWidth + 50),
    //                   posY: Math.random() * -50,
    //                   ctx: p,
    //                   width: p.random(2, 5),
    //                   height: p.random(2, 5),
    //                   speed: details.blobSpeed,
    //                   color: details.color,
    //                 }
    //                 snowflakes.push(new Snowflake(snowParams));
    //               }
                  
    //               let t = p.frameCount / 60;
    //               // loop through snowflakes to check their lifespan
    //               for (let i = 0; i < snowflakes.length; i ++) {
    //                 let flake = snowflakes[i];
    //                 if (flake.lifespan <= 0) {
    //                   snowflakes.splice(i, 1)
    //                 }
    //                 flake.update(t); // update snowflake position
    //                 flake.display(); // redraw snowflake
    //               }
    //             }
                
    //             if (weather === 'Sleet') {
    //               let details = weatherDetails.SLEET
    //               p.background(details.backgroundColor);
                  
    //               for (let i = 0; i < p.random(10, 20); i++) {
    //                 let blobX = p.random(-canvasWidth, 2 * canvasWidth);
    //                 let blobY = Math.random() * -10;
    //                 let blobHeight = p.random(6, 8);
    //                 let blobWidth = p.random(1, 3);
    //                 let initialAngle = p.random(1, 2.5)
                    
    //                 let sleetParams = {
    //                   posX: blobX,
    //                   posY: blobY,
    //                   ctx: p,
    //                   height: blobHeight,
    //                   width: blobWidth,
    //                   speed: details.blobSpeed,
    //                   color: details.color,
    //                   initialAngle: initialAngle
    //                 }
                    
    //                 sleets.push(new Sleet(sleetParams))
    //               }
    //               let t = p.frameCount / 60;
    //               for (let i = 0; i < sleets.length; i++) {
    //                 let sleet = sleets[i];
    //                 if (sleet.lifespan <= 0) {
    //                   sleets.splice(i, 1);
    //                 }
    //                 sleet.display();
    //                 sleet.update(t);
    //               }
                  
    //             }
                
    //             if (weather === 'Hail') {
    //               let details = weatherDetails.HAIL
    //               p.background(details.backgroundColor);
    //               //snow
    //               for (let i = 0; i < p.random(10); i++) {
    //                 let blobX = p.random(-canvasWidth/2, canvasWidth + canvasWidth/2);
    //                 let blobY = Math.random() * -50;
    //                 let blobWidth = p.random(2, 5);
    //                 let blobHeight = p.random(2, 5);
                    
    //                 let hailParams = {
    //                   posX: blobX,
    //                   posY: blobY,
    //                   ctx: p,
    //                   width: blobWidth,
    //                   height: blobHeight,
    //                   speed: details.blobSpeed,
    //                   color: details.color,
    //                   initialAngle: details.initialAngle
    //                 }
    //                 hails.push(new Hail(hailParams));
    //               }
                  
    //               let t = p.frameCount / 60;
    //               // loop through snow to check their lifespan
    //               for (let i = 0; i < hails.length; i++) {
    //                 let hail = hails[i];
    //                 if (hail.lifespan <= 0) {
    //                   hails.splice(i, 1)
    //                 }
    //                 hail.update(t);
    //                 hail.display();
    //               }
    //             }
                
    //             if (weather === 'Light Cloud') {
    //               let details = weatherDetails.LIGHTCLOUD
    //               p.background(details.backgroundColor);
                  
    //               let sunDetails = weatherDetails.CLEAR
    //               let sunParams = {
    //                 posX: 100,
    //                 posY: 100,
    //                 ctx: p,
    //                 width: 60,
    //                 height: 60,
    //                 color: sunDetails.sunColor
    //               }
                  
    //               let sun = new Sun(sunParams);
    //               sun.display();
                  
    //               let cloudParams = {
    //                 posX: -1000,
    //                 posY: p.random(-10, canvasHeight + 10),
    //                 ctx: p,
    //                 width: p.random(50, 120),
    //                 height: p.random(50, 100),
    //                 speed: p.random(0.5, 1),
    //                 color: details.color,
    //                 numLobes: 20,
    //                 type: 'light'
    //               }
                  
    //               let cloudParamsSmall = {
    //                 posX: -100,
    //                 posY: p.random(-10, canvasHeight + 10),
    //                 ctx: p,
    //                 width: p.random(30, 50),
    //                 height: p.random(30, 50),
    //                 speed: p.random(0.7, 1),
    //                 color: details.color,
    //                 numLobes: 8,
    //                 type: 'light'
    //               }
                  
    //               timer += 1;
    //               if (timer > p.random(150, 450)) {
    //                 clouds.push(new Cloud(cloudParamsSmall))
    //                 clouds.push(new Cloud(cloudParams));
    //                 clouds.push(new Cloud(cloudParamsSmall))
    //                 timer = 0;
    //               }
                  
    //               for (let i = 0; i < clouds.length; i++) {
    //                 if (clouds[i].lifespan <= 0) {
    //                   clouds.splice(i, 1);
    //                 }
    //                 clouds[i].display();
    //                 clouds[i].update();
    //               }
                  
    //             }
                
    //             if (weather === 'Heavy Cloud') {
    //               let details = weatherDetails.LIGHTCLOUD
    //               p.background(details.backgroundColor);
                  
    //               let sunDetails = weatherDetails.CLEAR
    //               let sunParams = {
    //                 posX: 100,
    //                 posY: 100,
    //                 ctx: p,
    //                 width: 60,
    //                 height: 60,
    //                 color: sunDetails.sunColor
    //               }
                  
    //               let sun = new Sun(sunParams);
    //               sun.display();
                  
    //               let cloudParams = {
    //                 posX: -200,
    //                 posY: p.random(-10, canvasHeight + 10),
    //                 ctx: p,
    //                 width: p.random(60, 150),
    //                 height: p.random(60, 150),
    //                 speed: p.random(0.5, 1),
    //                 color: details.color,
    //                 numLobes: 20,
    //                 type: 'heavy'
    //               }
                  
    //               let cloudParamsSmall = {
    //                 posX: -200,
    //                 posY: p.random(-10, canvasHeight + 10),
    //                 ctx: p,
    //                 width: p.random(30, 50),
    //                 height: p.random(30, 50),
    //                 speed: p.random(0.7, 1),
    //                 color: details.color,
    //                 numLobes: 8,
    //                 type: 'heavy'
    //               }
                  
    //               timer += 1;
    //               if (timer > p.random(200, 350)) {
    //                 clouds.push(new Cloud(cloudParams));
    //                 clouds.push(new Cloud(cloudParamsSmall));
    //                 clouds.push(new Cloud(cloudParams));
    //                 timer = 0;
    //               }
                  
    //               for (let i = 0; i < clouds.length; i++) {
    //                 if (clouds[i].lifespan <= 0) {
    //                   clouds.splice(i, 1);
    //                 }
    //                 clouds[i].display();
    //                 clouds[i].update();
    //               }
                  
    //             }
                
  }

 
}
        
        
        // no longer need to export like this because of how we are manipulating the DOM in index.js
        // export default new p5(sketch);


