class Caption {

  constructor(data, ctx) {
    this.temp = data.temp;
    this.weatherCaption = data.weatherDescription.toLowerCase();
    this.city = data.city;
    this.state = data.state;
    this.ctx = ctx;

    this.createCaption();
  }

  createCaption() {
    // `Currently ${temp} degrees ${weatherCaption} and  in ${city}, ${state}`)
    let div = this.ctx.createDiv().id('caption');

    let tempDiv = this.ctx.createDiv();
    tempDiv.parent(div);

    let tempCap = this.ctx.createElement('span', `${this.temp}° F`);
    tempCap.parent(tempDiv);

    let locationDiv = this.ctx.createDiv();
    locationDiv.parent(div);

    let locationCap = this.ctx.createElement('span', `${this.city}, ${this.state}`);
    locationCap.parent(locationDiv);

    let weatherDiv = this.ctx.createDiv();
    weatherDiv.parent(div);

    let weatherCap = this.ctx.createElement('span', `${this.weatherCaption}`);
    weatherCap.parent(weatherDiv);
  } 
}

export default Caption;