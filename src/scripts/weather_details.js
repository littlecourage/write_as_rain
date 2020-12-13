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
    backgroundColor: '#cccccc',
  },
  HEAVYRAIN: {
    color: '#a2b4c3',
    blobSpeed: 3,
    backgroundColor: '#e0e6eb',
    initialAngle: 3
  },
  LIGHTRAIN: {
    color: '#a2b4c3',
    blobSpeed: 1,
    backgroundColor: '#e0e6eb',
    initialAngle: 0
  },
  SHOWERS: {
    color: '#a2b4c3',
    blobSpeed: 2,
    backgroundColor: '#e0e6eb',
    initialAngle: 0.4
  },
  SLEET: {
    color: '#ecf2f9',
    blobSpeed: 8,
    backgroundColor: '#cccccc',
    initialAngle: 1
  },
  HAIL: {
    color: '#eff3f5',
    blobSpeed: 4,
    backgroundColor: '#cccccc',
    initialAngle: 0.3
  },
  LIGHTCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff', '#ffffff'],
    blobSpeed: 1,
    backgroundColor: '#b7cfe1'
  },
  CLEAR: {
    backgroundColor: '#b7cfe1',
    sunColor: '#ffdb4d'
  },
  THUNDERSTORM: {
    backgroundColor: '#a6a6a6',
    rainColor: '#8c8c8c',
    stormCloudColors: ['#bfbfbf', '#cccccc', '#d9d9d9', '#c1c5c7', '#D0D3D6', '#999999'],
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
  'r01': [LIGHTRAIN], //add clouds back in when done with testing
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