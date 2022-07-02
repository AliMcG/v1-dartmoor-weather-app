## Overview
This a project using a weather api to GET the current weather conditions from a location.
YES ✅✅✅✅✅

## MVP
Can get weather for one location on Dartmoor - uses a fetch GET request from "/public/main.js" to the Express() server.✅
Express server then sends a GET request to weather api using credentials that are stored in .env✅
(Need to npm i node-fetch to handle fetch requests from Express).✅

## Testing
Use jest and supertest to test routes and data structure
## Plan
create a weather app for walking and camping on dartmoor (maybe add exmoor if possible)
will take a weather API in and display details from it based on location (longitude and latitude)✅

## CSS
responsive CSS to cards?

## Data structre
what can displayed or unpacked from the api?
something unique about the way it looks

URL is http://openweathermap.org/img/wn/10d@2x.png this is the url to grab the weather icon for {10d} = light rain✅

## What to show?

  dartmoor weather app:
    - shows the weather at serval locations spread out on a type of map/diagram
      - i.e at Steps' bridge
      - castle drogo
      - hamle tor
      - dartmeet✅
      - Post Bridge✅
      - etc...

    - shows the weather at user location? this is more dyncmic
    - set locations is more static but might be easy with the api that I'm trying to use.

 - how to show map/diagram in the background on html
 - each location needs:
      - name✅
      - temeprature✅
      - weather-description✅
      - weather icon✅

## Stretch goals
Can an weather icon be added to each location card?✅
5 day weather forecast is also avaialbel from the api for free!