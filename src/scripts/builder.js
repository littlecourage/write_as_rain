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
  weatherBitCodes,
} from './weather_details';

import Rain from './rain';
import CloudySky from './cloudy_sky';
import Sun from './sun';


export const getProfile = (type, map) => {
  let weatherType = type.slice(0, type.length - 1);
  let results = map[weatherType];
  //build in logic to suggest other types if don't find exact match
  if (!results) {
  
  }
  return results
}

//change this to accept array of profiles eventually
export const buildObjects = (profiles, styles, ctx) => {
  let objects = [];

  for (let profile of profiles){
    let style = styles[profile];
    if (profile === CLEAR) {
  
    }
  
    if (profile === THUNDERSTORM) {
  
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
      
    }
  
    if (profile === SLEET) {
  
    }
  
    if (profile === HAIL) {
  
    }
  
    if (profile === HEAVYCLOUD) {
      ctx.noStroke();
      let cloudParams = style;
      cloudParams.ctx = ctx;
      let heavyClouds = new CloudySky(profile, ctx, cloudParams);
      objects.push(heavyClouds);
    }
  
    if (profile === LIGHTCLOUD) {
      ctx.noStroke();
      let cloudParams = style;
      cloudParams.ctx = ctx;
      let heavyClouds = new CloudySky(profile, ctx, cloudParams);
      objects.push(heavyClouds);
    }

    if (profile === SUN) {
      ctx.noStroke();
      let sunParams = style;
      sunParams.ctx = ctx;
      console.log(sunParams)
      let sun = new Sun(sunParams);
      objects.push(sun);
    }
  }

  
  return objects;

}