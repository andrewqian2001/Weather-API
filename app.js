const storageObj = new Storage();
console.log(storageObj.getCity());
const weather = new Weather(storageObj.getCity());
const ui = new UI();
document.addEventListener("DOMContentLoaded", getWeather);
document.getElementById("w-change-btn").addEventListener("click", () => {
  const newcity = document.getElementById("city").value;
  weather.changeCity(newcity);
  storageObj.setCity(newcity);
  weather.getWeather().then((data) => {
    ui.paint(data);
  });
});

function getWeather() {
  weather.getWeather().then((data) => {
    ui.paint(data);
  });
}
