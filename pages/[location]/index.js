import Header from "../../components/Header";
import WeatherBar from "../../components/WeatherBar";
import WeatherList from "../../components/WeatherList";
import styles from "../../styles/View.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import GET_WeatherData from "../../graphql/queries/getWeatherData.gql";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

  const router = useRouter();
  const { location } = router.query;

  const { loading, error, data } = useQuery(GET_WeatherData, {
    variables: { cityName: location },
  });

  useEffect(() => {
    if (data) {
      const { city, list } = data.weatherData;

      const firstWeather = list && list.length >= 3 ? list[2] : null;

      setWeatherData({ city, list });
      setSelectedWeather(firstWeather);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className={styles.container}>
      <Header>{location}</Header>
      <WeatherBar weatherData={selectedWeather} cityData={weatherData.city} />
      <WeatherList />
    </div>
  );
}
