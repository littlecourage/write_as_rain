// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const targetUrl = 'https://www.metaweather.com/api/location/2459115/';



class APIWeather {

  constructor(location) {
    this.location = location;
    this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    this.targetUrl = `https://www.metaweather.com/api/location/${location}/`
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    return (
      fetch(this.proxyUrl + this.targetUrl)
      .then(blob => blob.json())
      .then((data) => {
        return data;
      })
      .catch(
        (err) => {
          console.log('Something went wrong', err)
        }
      )
    )
        
    

  }

}




export default APIWeather;