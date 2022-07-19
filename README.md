# Dartmoor Weather App v1.0
This is the first iteration on the initial idea of building a weather app [from a YouTube tutorial](https://www.youtube.com/watch?v=wPElVpR1rwA&list=PLx1f4RjA-BBn2NFhqVCWTfM7NFZ757LHh&index=1&t=1866s).
The tutorial built an app using the user's current location and passed the longitude and latitude to the weather api.
I decided to build a weather app for Dartmoor National park, I place that I love to go walking in. 
You can visit the this app [here](https://dartmoor-weather-app-v1.netlify.app/).

The weather app uses weather data from the [Open Weather Map](https://openweathermap.org/api).

## MVP
This weather app is version 1.0 in a seires of iterations on the main idea. 
The M.V.P. for version 1.0 is to get the weather by 6 locations accross [Dartmoor National Park](https://www.dartmoor.gov.uk/).
The app was written in JavaScript, HTML and CSS. 
As this repesents the version, 1.0 I did not use React.js or another other higher level functionality.
Version 1.0 uses vanilla JavaScript as that was the first thing we learnt on the [School of Code Bootcamp](https://www.schoolofcode.co.uk/).

## Protecting the API key
Although the version 1.0 uses vanilla JavaScript, I had to spin up a server using Express.js so that I could use environment variables.

## Depolyment
The weather app is hosted on Netlfiy [here](https://dartmoor-weather-app-v1.netlify.app/). I ran into some problems deploying the app and protecting the api key. In the end I created a new back-end project to route the api weather data requests through, on which I used the process.env function to hide the sensitive data.

