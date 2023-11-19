const resolvers = {
  Query: {
    weatherData: async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=37.56&lon=126.97&appid=${process.env.API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        const city = {
          name: data.city.name,
          country: data.city.country,
          population: data.city.population,
        };

        const weatherDataList = data.list;

        const formattedWeatherData = {
          city: city,
          list: weatherDataList.map((item) => ({
            dt: item.dt,
            main: {
              temp: item.main.temp,
              feels_like: item.main.feels_like,
              temp_min: item.main.temp_min,
              temp_max: item.main.temp_max,
              humidity: item.main.humidity,
            },
            weather: Array.isArray(item.weather)
              ? item.weather
              : [item.weather],
            wind: {
              speed: item.wind.speed,
            },
            dt_txt: item.dt_txt,
          })),
        };

        return formattedWeatherData;
      } catch (error) {
        throw new Error("Something went wrong: " + error.message);
      }
    },
  },
};

export default resolvers;