class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(data) {
    console.log(data);
    this.location.textContent = data.name + " Weather";
    this.desc.textContent = data.weather[0].description;
    this.string.textContent =
      Math.round(data.main.temp - 273.15) + " degrees celsius";
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${data.main.humidity}`;
    this.feelslike.textContent = `Feels like: ${
      Math.round(data.main.feels_like - 273.15) + " degrees celsius"
    }`;
    this.wind.textContent = `Wind Speed: ${Math.round(
      data.wind.speed * 1.609
    )} km/h`;
  }
}
