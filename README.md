## Overview
This is the first iteration on the initial idea of building a weather app [from a YouTube tutorial](https://www.youtube.com/watch?v=wPElVpR1rwA&list=PLx1f4RjA-BBn2NFhqVCWTfM7NFZ757LHh&index=1&t=1866s).
The tutorial built an app using the users current location and passed the longitude and latitude to the weather api.
I decided to build a weather app for Dartmoor National park, I place that I love to go walking in. 
To see the full functionality of this app please get api key from [Open Weather Map](https://openweathermap.org/api).



## MVP
Can get weather for one location on Dartmoor - uses a fetch GET request from "/public/main.js" to the Express() server.✅
Express server then sends a GET request to weather api using credentials that are stored in .env✅
(Need to npm i node-fetch to handle fetch requests from Express).✅

## Testing
Use jest and supertest to test routes and data structure

## Stretch goals
Can an weather icon be added to each location card?✅
5 day weather forecast is also availalble from the api for free!

# Dartmoor Wather App version 2 with React (maybe map?)
## Plan for React App
Take the concept from the 1st Dartmoor app and expand on it.
* The first version displayed a card for a location on Dartmoor with the current weather description, weather icon and temperature. Found [here](https://github.com/AliMcG/dartmoor-weather-app-express).

## The React app
This version will add in 5 day weather forcast to each 'card'. The WeatherCard component will have two "states":
* The current weather (icon, description and temperature).
* The 5 day forcast (icon, description and temperature for each day).

### Stretch Goal
To add in a google map with Marker component. The Marker component will onClick display the weather data.
