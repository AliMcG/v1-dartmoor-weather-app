import { apiKey } from "../models";
const url = "/api"

// const apiKey = API_KEY
// const apiKey = "245d0858a48d16422c1fa7a2ff0ed6ec"

async function getWeatherDart() {
    const long = -3.87634699388993;
    const lat = 50.54288694008082;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
    // const response = await fetch(`${url}/dartmeet`);
    const data = await response.json();
    console.log(data);
    // console.log(data.payload.main.temp);
    const iconId = data.weather[0].icon
    // const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('dartmeet-icon').src=`http://openweathermap.org/img/wn/${iconId}@2x.png`;
    // console.log(res.url);
    const dartmeetTemperature = document.querySelector(".dartmeet-temperature"); 
    dartmeetTemperature.innerText = data.main.temp;
    const dartmeetDescription = document.querySelector("#dartmeet-weather");
    dartmeetDescription.innerText = data.weather[0].description;
};

getWeatherDart();

async function getWeatherPost() {
    const response = await fetch(`${url}/postbridge`);
    const data = await response.json();
    // console.log(data);
    // console.log(data.payload.main.temp);
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

async function getWeatherWalkhampton() {
    const response = await fetch(`${url}/walkhampton`);
    const data = await response.json();
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('walkhampton-icon').src=`${res.url}`;
    const walkhamptonTemperature = document.querySelector(".walkhampton-temperature"); 
    walkhamptonTemperature.innerText = data.payload.main.temp;
    const walkhamptonDescription = document.querySelector("#walkhampton-weather");
    walkhamptonDescription.innerText = data.payload.weather[0].description;
};

getWeatherWalkhampton();

async function getWeatherDownton() {
    const response = await fetch(`${url}/downton`);
    const data = await response.json();
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('downton-icon').src=`${res.url}`;
    const downtonTemperature = document.querySelector(".downton-temperature"); 
    downtonTemperature.innerText = data.payload.main.temp;
    const downtonDescription = document.querySelector("#downton-weather");
    downtonDescription.innerText = data.payload.weather[0].description;
};

getWeatherDownton();

async function getWeatherSouthzeal() {
    const response = await fetch(`${url}/south-zeal`);
    const data = await response.json();
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('south-zeal-icon').src=`${res.url}`;
    const southzealTemperature = document.querySelector(".south-zeal-temperature"); 
    southzealTemperature.innerText = data.payload.main.temp;
    const southzealDescription = document.querySelector("#south-zeal-weather");
    southzealDescription.innerText = data.payload.weather[0].description;
};

getWeatherSouthzeal();

async function getWeatherChagford() {
    const response = await fetch(`${url}/chagford`);
    const data = await response.json();
    const iconId = data.payload.weather[0].icon
    const res = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
    document.getElementById('chagford-icon').src=`${res.url}`;
    const chagfordTemperature = document.querySelector(".chagford-temperature"); 
    chagfordTemperature.innerText = data.payload.main.temp;
    const chagfordDescription = document.querySelector("#chagford-weather");
    chagfordDescription.innerText = data.payload.weather[0].description;
};

getWeatherChagford();
