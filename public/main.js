const url = "/api"

async function getWeatherDart() {
    const response = await fetch(`${url}/dartmeet`);
    const data = await response.json();
    // console.log(data);
    // console.log(data.payload.main.temp);
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('dartmeet-icon').src=`${res.url}`;
    // console.log(res.url);
    const dartmeetTemperature = document.querySelector(".dartmeet-temperature"); 
    dartmeetTemperature.innerText = data.payload.main.temp;
    const dartmeetDescription = document.querySelector("#dartmeet-weather");
    dartmeetDescription.innerText = data.payload.weather[0].description;
};

getWeatherDart();

async function getWeatherPost() {
    const response = await fetch(`${url}/postbridge`);
    const data = await response.json();
    console.log(data);
    console.log(data.payload.main.temp);
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('postbridge-icon').src=`${res.url}`;
    console.log(res.url);
    const postbridgeTemperature = document.querySelector(".postbridge-temperature"); 
    postbridgeTemperature.innerText = data.payload.main.temp;
    const postbridgeDescription = document.querySelector("#postbridge-weather");
    postbridgeDescription.innerText = data.payload.weather[0].description;
};

getWeatherPost();

async function getWeatherHavford() {
    const response = await fetch(`${url}/havford`);
    const data = await response.json();
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('havford-icon').src=`${res.url}`;
    const havfordTemperature = document.querySelector(".havford-temperature"); 
    havfordTemperature.innerText = data.payload.main.temp;
    const havfordDescription = document.querySelector("#havford-weather");
    havfordDescription.innerText = data.payload.weather[0].description;
};

getWeatherHavford();



/*
a list of locations long and lat accross dartmoor

Dartmeet = 50.54288694008082, -3.87634699388993
Ponswrothy = 50.54875187209245, -3.8353971126325623
Harford = 50.41878569340013, -3.917283233241301

*/

// 👇 This will get the users current location and weather

// async function getWeather() {
//   let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=3.545717609421039&appid=${key}&units=metric`);
//   let data = await response.json();
// };
// window.addEventListener("load", () => {
//   let long;
//   let lat;
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       console.log(`long: ${long}`);
//       console.log(`lat : ${lat}`);
//       if (long & lat) {
//     }})
//   }
// });