// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const targetUrl = 'https://www.metaweather.com/api/location/2459115/';
// this.targetUrl = `https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY`



class APIWeather {

  constructor(location) {
    this.location = location;
    this.key = 
    this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    this.targetUrl = `https://www.metaweather.com/api/location/${location}/`
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    return (
      fetch(this.proxyUrl + this.targetUrl)
      .then(blob => {
        return blob.json()
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log('Something went wrong', err)
      })
    )
  }

}




export default APIWeather;