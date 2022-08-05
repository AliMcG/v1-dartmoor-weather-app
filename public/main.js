const url = "https://salty-depths-59147.herokuapp.com/portfolio/weather";

async function getWeatherDart() {
  const response = await fetch(`${url}/dartmeet`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://dartmoor-weather-app-v1.netlify.app/",
    },
  });
  const data = await response.json();
  const iconId = data.payload.weather[0].icon;
  document.getElementById(
    "dartmeet-icon"
  ).src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  const dartmeetTemperature = document.querySelector(".dartmeet-temperature");
  dartmeetTemperature.innerText = data.payload.main.temp;
  const dartmeetDescription = document.querySelector("#dartmeet-weather");
  dartmeetDescription.innerText = data.payload.weather[0].description;
}

getWeatherDart();

async function getWeatherPost() {
  const response = await fetch(`${url}/postbridge`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://dartmoor-weather-app-v1.netlify.app/",
    },
  });
  const data = await response.json();
  const iconId = data.payload.weather[0].icon;
  document.getElementById(
    "postbridge-icon"
  ).src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  const postbridgeTemperature = document.querySelector(
    ".postbridge-temperature"
  );
  postbridgeTemperature.innerText = data.payload.main.temp;
  const postbridgeDescription = document.querySelector("#postbridge-weather");
  postbridgeDescription.innerText = data.payload.weather[0].description;
}

getWeatherPost();

async function getWeatherHavford() {
  const response = await fetch(`${url}/havford`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://dartmoor-weather-app-v1.netlify.app/",
    },
  });
  const data = await response.json();
  const iconId = data.payload.weather[0].icon;
  document.getElementById(
    "havford-icon"
  ).src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  const havfordTemperature = document.querySelector(".havford-temperature");
  havfordTemperature.innerText = data.payload.main.temp;
  const havfordDescription = document.querySelector("#havford-weather");
  havfordDescription.innerText = data.payload.weather[0].description;
}

getWeatherHavford();

async function getWeatherDownton() {
  const response = await fetch(`${url}/downton`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://dartmoor-weather-app-v1.netlify.app/",
    },
  });
  const data = await response.json();
  const iconId = data.payload.weather[0].icon;
  document.getElementById(
    "downton-icon"
  ).src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  const downtonTemperature = document.querySelector(".downton-temperature");
  downtonTemperature.innerText = data.payload.main.temp;
  const downtonDescription = document.querySelector("#downton-weather");
  downtonDescription.innerText = data.payload.weather[0].description;
}

getWeatherDownton();

async function getWeatherSouthzeal() {
  const response = await fetch(`${url}/south-zeal`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://dartmoor-weather-app-v1.netlify.app/",
    },
  });
  const data = await response.json();
  const iconId = data.payload.weather[0].icon;
  document.getElementById(
    "south-zeal-icon"
  ).src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  const southzealTemperature = document.querySelector(
    ".south-zeal-temperature"
  );
  southzealTemperature.innerText = data.payload.main.temp;
  const southzealDescription = document.querySelector("#south-zeal-weather");
  southzealDescription.innerText = data.payload.weather[0].description;
}

getWeatherSouthzeal();

async function getWeatherChagford() {
  const response = await fetch(`${url}/chagford`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://dartmoor-weather-app-v1.netlify.app/",
    },
  });
  const data = await response.json();
  const iconId = data.payload.weather[0].icon;
  document.getElementById(
    "chagford-icon"
  ).src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  const chagfordTemperature = document.querySelector(".chagford-temperature");
  chagfordTemperature.innerText = data.payload.main.temp;
  const chagfordDescription = document.querySelector("#chagford-weather");
  chagfordDescription.innerText = data.payload.weather[0].description;
}

getWeatherChagford();
