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
