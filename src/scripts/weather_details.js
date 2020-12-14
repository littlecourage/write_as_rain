import Rain from "./rain";

export const SNOW = 'SNOW';
export const SLEET = 'SLEET';
export const HAIL = 'HAIL';
export const THUNDERSTORM = 'THUNDERSTORM';
export const HEAVYRAIN = 'HEAVYRAIN';
export const LIGHTRAIN = 'LIGHTRAIN';
export const SHOWERS = 'SHOWERS';
export const HEAVYCLOUD = 'HEAVYCLOUD';
export const LIGHTCLOUD = 'LIGHTCLOUD';
export const CLEAR = 'CLEAR';
export const SUN = 'SUN';

export const weatherTypes = [
  SNOW,
  SLEET,
  HAIL,
  THUNDERSTORM,
  HEAVYRAIN,
  LIGHTRAIN,
  SHOWERS,
  HEAVYCLOUD,
  LIGHTCLOUD,
  CLEAR
]

export const weatherMap = {
  'SNOW': SNOW,
  'SLEET': SLEET,
  'HAIL': HAIL,
  'THUNDERSTORM': THUNDERSTORM,
  'HEAVY RAIN': HEAVYRAIN,
  'LIGHT RAIN': LIGHTRAIN,
  'SHOWERS': SHOWERS,
  'HEAVY CLOUD': HEAVYCLOUD,
  'LIGHT CLOUD': LIGHTCLOUD,
  'CLEAR': CLEAR
}



export const weatherDetails = {
  SNOW: {
    color: 240,
    blobSpeed: 1,
    // backgroundColor: '#cccccc',
  },
  HEAVYRAIN: {
    color: '#a2b4c3',
    blobSpeed: 5,
    // backgroundColor: '#e0e6eb',
    initialAngle: 3
  },
  LIGHTRAIN: {
    color: '#a2b4c3',
    blobSpeed: 3,
    // backgroundColor: '#e0e6eb',
    initialAngle: 0
  },
  SHOWERS: {
    color: '#a2b4c3',
    blobSpeed: 4,
    // backgroundColor: '#e0e6eb',
    initialAngle: 2
  },
  SLEET: {
    color: '#ecf2f9',
    blobSpeed: 8,
    // backgroundColor: '#cccccc',
    initialAngle: 1
  },
  HAIL: {
    color: '#eff3f5',
    blobSpeed: 4,
    // backgroundColor: '#cccccc',
    initialAngle: 0.3
  },
  LIGHTCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff', '#ffffff'],
    blobSpeed: 1,
    // backgroundColor: '#b7cfe1'
  },
  HEAVYCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff', '#ffffff'],
    blobSpeed: 1,
    // backgroundColor: '#b7cfe1'
  },
  CLEAR: {
    // backgroundColor: '#b7cfe1',
    sunColor: '#ffdb4d'
  },
  SUN: {
    // backgroundColor: '#b7cfe1',
    color: '#ffdb4d',
    posX: 100,
    posY: 100,
    width: 60,
    height: 60,
  },
  THUNDERSTORM: {
    // backgroundColor: '#a6a6a6',
    rainColor: '#8c8c8c',
    stormCloudColors: ['#bfbfbf', '#cccccc', '#d9d9d9', '#c1c5c7', '#D0D3D6', '#999999'],
  }
}

export const skyColors = {
  't01': {
    color: '#a6a6a6',
    sun: false
  },
  't02': {
    color: '#a6a6a6',
    sun: false
  },
  't03': {
    color: '#a6a6a6',
    sun: false
  },
  't04': {
    color: '#a6a6a6',
    sun: false
  },
  't05': {
    color: '#a6a6a6',
    sun: false
  },
  'd01': {
    color: '#D7E3ED',
    sun: false
  },
  'd02': {
    color: '#D7E3ED',
    sun: false
  },
  'd03': {
    color: '#D7E3ED',
    sun: false
  },
  'r01': {
    color: '#D7E3ED',
    sun: false
  },
  'r02': {
    color: '#D7E3ED',
    sun: false
  },
  'r03': {
    color: '#D7E3ED',
    sun: false
  },
  'r04': {
    color: '#D7E3ED',
    sun: false
  },
  'r05': {
    color: '#D7E3ED',
    sun: false
  },
  'r06': {
    color: '#D7E3ED',
    sun: false
  },
  'f01': {
    color: '#e0e6eb',
    sun: false
  },
  's01': {
    color: '#e0e6eb',
    sun: false
  },
  's02': {
    color: '#e0e6eb',
    sun: false
  },
  's03': {
    color: '#e0e6eb',
    sun: false
  },
  's04': {
    color: '#e0e6eb',
    sun: false
  },
  's05': {
    color: '#e0e6eb',
    sun: false
  },
  's06': {
    color: '#e0e6eb',
    sun: false
  },
  'a01': {
    color: '#D7E3ED',
    sun: false
  },
  'a02': {
    color: '#D7E3ED',
    sun: false
  },
  'a03': {
    color: '#D7E3ED',
    sun: false
  },
  'a04': {
    color: '#e0e6eb',
    sun: false
  },
  'a05': {
    color: '#b7cfe1',
    sun: true
  },
  'a06': {
    color: '#e0e6eb',
    sun: false
  },
  'c01': {
    color: '#b7cfe1',
    sun: true
  },
  'c02': {
    color: '#b7cfe1',
    sun: true
  },
  'c03': {
    color: '#b7cfe1',
    sun: true
  },
  'c04': {
    color: '#b7cfe1',
    sun: true
  },
  'u00': {
    color: '#D7E3ED',
    sun: false
  }
}


export const weatherBitCodes = {
  't01': [THUNDERSTORM, LIGHTRAIN],
  't02': [THUNDERSTORM, SHOWERS],
  't03': [THUNDERSTORM, HEAVYRAIN],
  't04': [THUNDERSTORM, LIGHTRAIN],
  't05': [THUNDERSTORM, HAIL],
  'd01': [LIGHTRAIN, HEAVYCLOUD],
  'd02': [SHOWERS, HEAVYCLOUD],
  'd03': [HEAVYRAIN, HEAVYCLOUD],
  'r01': [LIGHTRAIN, HEAVYCLOUD],
  'r02': [SHOWERS, HEAVYCLOUD],
  'r03': [HEAVYRAIN, HEAVYCLOUD],
  'r04': [LIGHTRAIN, HEAVYCLOUD],
  'r05': [SHOWERS, HEAVYCLOUD],
  'r06': [HEAVYRAIN, HEAVYCLOUD],
  'f01': [SLEET, HEAVYRAIN, HEAVYCLOUD],
  's01': [SNOW],
  's02': [SNOW],
  's03': [SNOW],
  's04': [SNOW, LIGHTRAIN],
  's05': [SLEET],
  's06': [SNOW],
  'a01': [LIGHTRAIN],
  'a02': [LIGHTRAIN],
  'a03': [LIGHTRAIN],
  'a04': [SNOW],
  'a05': [HEAVYCLOUD],
  'a06': [SLEET],
  'c01': [CLEAR],
  'c02': [CLEAR],
  'c03': [LIGHTCLOUD],
  'c04': [HEAVYCLOUD],
  'u00': [LIGHTRAIN]
}