const url = "/api"


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

async function getWeatherDart() {
    const response = await fetch(`${url}/dartmeet`);
    const data = await response.json();
    console.log(data);
    console.log(data.payload.main.temp);
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    console.log(res.url);
    const dartmeetTemperature = document.querySelector(".dartmeet-temperature"); 
    dartmeetTemperature.innerText = data.payload.main.temp;
    const dartmeetIcon = document.querySelector("#dartmeet-weather");
    dartmeetIcon.innerText = data.payload.weather[0].description;
    document.getElementById('dartmeet-icon').src=`${res.url}`;
};

getWeatherDart();




// async function getWeatherPost() {
//     
//     let data = await response.json();
//     console.log(data);
//     console.log(data.main.temp);
//     let postbridgeTemperature = document.querySelector(".postbridge-temperature"); 
//     postbridgeTemperature.innerText = data.main.temp;
//     let postbridgeIcon = document.querySelector("#postbridge-weather-icon");
//     postbridgeIcon.innerText = data.weather[0].description;
// };

// getWeatherPost();

// async function getWeatherHavford() {
//     let long = -3.918072245803985;
//     let lat = 50.418839224119246;
//     let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
//     let data = await response.json();
//     console.log(data);
//     console.log(data.main.temp);
//     let havfordTemperature = document.querySelector(".havford-temperature"); 
//     havfordTemperature.innerText = data.main.temp;
//     let havfordIcon = document.querySelector("#havford-weather-icon");
//     havfordIcon.innerText = data.weather[0].description;
// };

// // getWeatherHavford();



/*
a list of locations long and lat accross dartmoor

Dartmeet = 50.54288694008082, -3.87634699388993
Ponswrothy = 50.54875187209245, -3.8353971126325623
Harford = 50.41878569340013, -3.917283233241301

*/