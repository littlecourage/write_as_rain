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
  weatherBitCodes,
} from './weather_details';

import Rain from './rain';


export const getProfile = (type, map) => {
  let weatherType = type.slice(0, type.length - 1);
  let results = map[weatherType];
  //build in logic to suggest other types if don't find exact match
  if (!results) {
  
  }
  debugger
  return results
}

//change this to accept array of profiles eventually
export const buildObjects = (profiles, styles, ctx) => {
  let objects = [];

  debugger
  for (let profile of profiles){
    let style = styles[profile];
    let backgroundColor;
    if (profile === CLEAR) {
  
    }
  
    if (profile === THUNDERSTORM) {
  
    }
    
    if (profile === HEAVYRAIN) {
  
    }
  
    if (profile === SHOWERS) {
  
    }
  
    if (profile === LIGHTRAIN) {
      backgroundColor = style.backgroundColor;
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
  
    }
  
    if (profile === LIGHTCLOUD) {
  
    }
  }

  debugger
  return objects;

}