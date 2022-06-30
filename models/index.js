import "dotenv/config"
import fetch from 'node-fetch';

const apiKey = process.env.API_KEY

export async function getDartmeetWeather(){
  const long = -3.87634699388993;
  const lat = 50.54288694008082;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  // console.log(data);
  // console.log(data.main.temp);
  return data;
};

export async function getPostbridgeWeather(){
  const long = -3.904797407096003;
  const lat = 50.59543292118994;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
};


export async function getHavfordWeather(){
  const long = -3.918072245803985;
  const lat = 50.418839224119246;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
};