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
export const STORMCLOUD = 'STORMCLOUD';

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
  },
  HEAVYRAIN: {
    color: '#869098',
    blobSpeed: 5,
    initialAngle: 3
  },
  LIGHTRAIN: {
    color: '#869098',
    blobSpeed: 3,
    initialAngle: 0
  },
  SHOWERS: {
    color: '#869098',
    blobSpeed: 4,
    initialAngle: 2
  },
  SLEET: {
    color: '#ecf2f9',
    blobSpeed: 8,
    initialAngle: 1
  },
  HAIL: {
    color: '#eff3f5',
    speed: 4,
    initialAngle: 0.3,
    posY: -20
  },
  LIGHTCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff'],
    blobSpeed: 1,
  },
  HEAVYCLOUD: {
    color: ['#f2f2f2', '#eff3f5', '#f5f5f0', '#f0f5f5', '#ffffff', '#ffffff'],
    blobSpeed: 1,
  },
  CLEAR: {
    sunColor: '#ffdb4d'
  },
  SUN: {
    color: '#ffdb4d',
    posX: 100,
    posY: 100,
    width: 60,
    height: 60,
  },
  THUNDERSTORM: {
    color: '#e6e6e6',
  },
  STORMCLOUD: {
    color: ['#bfbfbf', '#cccccc', '#d9d9d9', '#c1c5c7', '#D0D3D6', '#999999'],
  }
}

export const backgroundStyles = {
  't01': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65'
  },
  't02': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65'
  },
  't03': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65'
  },
  't04': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65'
  },
  't05': {
    skyColor: '#a6a6a6',
    sun: false,
    stormClouds: true,
    groundColor: '#867C65'
  },
  'd01': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'd02': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'd03': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'r01': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'r02': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'r03': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'r04': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'r05': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'r06': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'f01': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  's01': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  's02': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  's03': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  's04': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  's05': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  's06': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  'a01': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'a02': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'a03': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'a04': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#ecf2f9'
  },
  'a05': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#6D7559'
  },
  'a06': {
    skyColor: '#e0e6eb',
    sun: false,
    stormClouds: true,
    groundColor: '#857A65'
  },
  'c01': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A'
  },
  'c02': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A'
  },
  'c03': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A'
  },
  'c04': {
    skyColor: '#b7cfe1',
    sun: true,
    stormClouds: false,
    groundColor: '#768F3A'
  },
  'u00': {
    skyColor: '#D7E3ED',
    sun: false,
    stormClouds: false,
    groundColor: '#6D7559'
  }
}


export const weatherBitCodes = {
  't01': [THUNDERSTORM, LIGHTRAIN],
  't02': [THUNDERSTORM, SHOWERS],
  't03': [THUNDERSTORM, HEAVYRAIN],
  't04': [THUNDERSTORM, LIGHTRAIN],
  't05': [HAIL, THUNDERSTORM],
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