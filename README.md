# City Weather Forecast

This project is a simple application to display city weather forecasts using React, OpenWeatherMap API, and Docker.

## Features

- Display city locations on a map (using react-leaflet)
- On click on a city pin, display the next 3 days temperature forecast
- Deploy the stack using Docker and Docker Compose

## Prerequisites

Before you start, make sure you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop) or Docker Engine and Docker Compose
- [Node.js](https://nodejs.org/en/download/) (>= 14.x) and npm (>= 6.x)

## How to deploy and launch the project using Docker Compose

1. Clone the repository:

`git clone https://github.com/Day-101/city-weather-forecast`
`cd city-weather-forecast`

2. Install dependencies:

`npm install`

Or, if you are using Yarn:

`yarn`


3. Build the React application:

`npm run build`


Or, if you are using Yarn:

`yarn build`


4. Start the application using Docker Compose:

`docker compose up --build`


5. Open your browser and go to `http://localhost` to see the City Weather Forecast application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
