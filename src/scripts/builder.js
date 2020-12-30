import {
  CLEAR,
  THUNDERSTORM,
  HEAVYRAIN,
  SHOWERS,
  LIGHTRAIN,
  SNOW,
  SLEET,
  HAIL,
  HEAVYCLOUD,
  LIGHTCLOUD,
  SUN,
  STORMCLOUD,
  SCATTEREDCLOUD,
  NIGHTCLOUD,
  weatherBitCodes,
} from './weather_details';

import Rain from './rain';
import CloudySky from './cloudy_sky';
import Sun from './sun';
import HailStorm from './hail_storm';
import Thunderstorm from './thunderstorm';
import SleetStorm from './sleet_storm';
import Snow from './snow';

export const getProfile = (type, map) => {
  let weatherType = type.slice(0, type.length - 1);
  let results = map[weatherType];
  //build in logic to suggest other types if don't find exact match
  if (!results) {
  
  }
  return results
}

//change this to accept array of profiles eventually
export const buildObjects = (profiles, styles, ctx, night) => {
  let objects = [];

  for (let profile of profiles){
    let style = styles[profile];

    if (profile === CLEAR) {
      let cloudParams;
      if (night) {
        cloudParams = styles[NIGHTCLOUD];
      } else {
        cloudParams = styles[SCATTEREDCLOUD];
      }
      cloudParams.ctx = ctx;
      let scatteredClouds = new CloudySky(SCATTEREDCLOUD, ctx, cloudParams);
      objects.push(scatteredClouds);
    }
  
    if (profile === THUNDERSTORM) {
      let color = styles[profile].color;
      let thunderstorm = new Thunderstorm(ctx, color)
      objects.push(thunderstorm);
    }
    
    if (profile === HEAVYRAIN) {
      ctx.stroke(style.color);
      let dropParams = style;
      dropParams.ctx = ctx;
      let heavyRain = new Rain(profile, ctx, dropParams);
      objects.push(heavyRain);
    }
  
    if (profile === SHOWERS) {
      ctx.stroke(style.color);
      let dropParams = style;
      dropParams.ctx = ctx;
      let showers = new Rain(profile, ctx, dropParams);
      objects.push(showers);
    }
  
    if (profile === LIGHTRAIN) {
      ctx.stroke(style.color);
      let dropParams = style;
      dropParams.ctx = ctx;
      let lightRain = new Rain(profile, ctx, dropParams);
      objects.push(lightRain);
    }
  
    if (profile === SNOW) {
      ctx.noStroke();
      let flakeParams = style;
      flakeParams.ctx = ctx;
      console.log(flakeParams);
      let snow = new Snow(profile, ctx, flakeParams);
      objects.push(snow);
    }
  
    if (profile === SLEET) {
      ctx.stroke(style.color);
      let sleetParams = style;
      sleetParams.ctx = ctx;
      let sleetStorm = new SleetStorm(profile, ctx, sleetParams);
      objects.push(sleetStorm);
    }
  
    if (profile === HAIL) {
      ctx.noStroke();
      let hailParams = style;
      hailParams.ctx = ctx;
      
      let hailStorm = new HailStorm(profile, ctx, hailParams);
      objects.push(hailStorm);
    }
  
    if (profile === HEAVYCLOUD) {
      ctx.noStroke();
      let cloudParams;
      if (night) {
        cloudParams = styles[STORMCLOUD]
      } else {
        cloudParams = style;
      }
      cloudParams.ctx = ctx;
      let heavyClouds = new CloudySky(profile, ctx, cloudParams);
      objects.push(heavyClouds);
    }
  
    if (profile === LIGHTCLOUD) {
      ctx.noStroke();
      let cloudParams;
      if (night) {
        cloudParams = styles[STORMCLOUD]
      } else {
        cloudParams = style;
      }
      console.log(cloudParams);
      cloudParams.ctx = ctx;
      let heavyClouds = new CloudySky(profile, ctx, cloudParams);
      objects.push(heavyClouds);
    }

    if (profile === STORMCLOUD) {
      ctx.noStroke();
      let stormCloudParams = style;
      stormCloudParams.ctx = ctx;
      
      let heavyClouds = new CloudySky(profile, ctx, stormCloudParams);
      objects.push(heavyClouds);
    }

    if (profile === SUN) {
      ctx.noStroke();
      let sunParams = style;
      if (night) {
        //give moon its own style in weather details
        let moonParams = {
          color: '#FEF6E7',
          posX: 700,
          posY: 100,
          width: 60,
          height: 60,
        }
        moonParams.ctx = ctx;
        let moon = new Sun(moonParams);
        objects.push(moon);
      } else {
        sunParams.ctx = ctx;
        let sun = new Sun(sunParams);
        objects.push(sun);
      }
    }
  }

  
  return objects;

}