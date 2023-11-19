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
  const firstWeather = weatherData[2];

  useEffect(() => {
    if (data) {
      setWeatherData(data.weatherData);
      weatherRef.current = data.weatherData;
    }
  }, [data]);

  if (error) {
    console.error(error);
    return null;
  }

  console.log(weatherData);

  return (
    <div className={styles.container}>
      <Header>Seoul</Header>
      <WeatherBar weatherData={firstWeather} />
      <WeatherList />
    </div>
  );
}
