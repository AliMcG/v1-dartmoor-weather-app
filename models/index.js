import "dotenv/config"
import fetch from 'node-fetch';

const url = process.env.API_URL


export async function getDartmeetWeather(){
  
  const response = await fetch(`${url}/portfolio/dartmeet`)
  const data = await response.json();
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

export async function getWalkhamptonWeather(){
  const lat = 50.51060463321954;
  const long = -4.071371724414743;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}

export async function getDowntonWeather(){
  const lat = 50.647938537465414;
  const long = -4.089487982106286;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}

export async function getSouthzealWeather(){
  const lat = 50.725591295508565;
  const long = -3.909449850956075;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}

export async function getChagfordWeather(){
  const lat = 50.67304957928814;
  const long = -3.840431628696957;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}