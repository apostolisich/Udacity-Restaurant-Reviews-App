## Project Overview: Stage 1

## Overview

This is the Stage 1 of the Restaurant Review project. We are using leaflet.js and Mapbox in order to create a map of a New York area. This map contains markers which correspond to restaurants in this area. The restaurants can be filtered by Neighborhood and Cuisine. The user can select any restraurant that he/she likes and will be directed to a new page viewing the restaurants' details and reviews. The project also features a Service Worker which allows to app to work in offline mode!

## Running the project 

In order to run the project we need to start up a simple HTTP server to serve up the site files on your local computer. To do so, we can use python. Follow the steps below to see how to do it.

1. Open a terminal (pressing windows button + R in PC or cmd + space and typing terminal and hitting return in MAC)
2. In the terminal, type 'python -V' and hit enter to check the python version installed in your machine. If python is not installed, follow the link and install it: [website](https://www.python.org/)
3. Through the terminal move to the projects folder using the cd command, for example  `cd c:/users/<yourusername>/desktop/restaurant-reviews`.
4. Once in the project folder use the following command and the server will be up and running: 
   For python 2.x use: `python -m SimpleHTTPServer 8000`.
   For python 3.x use: `python3 -m http.server 8000`.
   
## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.. 



