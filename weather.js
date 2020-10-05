class Weather {
  constructor(city) {
    this.apiKey = "4066461e835159cc6a5a186fc5e7f6f0";
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `
      http://api.openweathermap.org/data/2.5/weather?q=${this.city},CAN&appid=${this.apiKey}
      `
      //api.openweathermap.org/data/2.5/weather?q=${this.city},CAN&appid=${this.apiKey}
    );

    const responseData = await response.json();
    return responseData;
  }

  changeCity(city) {
    this.city = city;
  }
}
