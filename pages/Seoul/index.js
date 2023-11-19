import Header from "../../components/Header";
import WeatherBar from "../../components/WeatherBar";
import WeatherList from "../../components/WeatherList";
import styles from "../../styles/View.module.css";

import { useEffect, useRef, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";

import GET_WeatherData from "../../graphql/queries/getWeatherData.gql";

export default function Seoul() {
  const [weatherData, setWeatherData] = useState([]);

  const weatherRef = useRef(null);

  const { data, error } = useQuery(GET_WeatherData);

  const [selectedWeather, setSelectedWeather] = useState(null);

  useEffect(() => {
    if (data) {
      // Assuming data.weatherData is an object with properties city and list
      const { city, list } = data.weatherData;

      // Assuming you want to select the third item in the list as the firstWeather
      const firstWeather = list && list.length >= 3 ? list[2] : null;

      setWeatherData({ city, list });
      setSelectedWeather(firstWeather);
    }
  }, [data]);

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className={styles.container}>
      <Header>Seoul</Header>
      <WeatherBar weatherData={selectedWeather} cityData={weatherData.city} />
      <WeatherList />
    </div>
  );
}
