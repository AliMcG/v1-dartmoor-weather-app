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