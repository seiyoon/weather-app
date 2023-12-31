import Image from "next/image";
import styles from "../styles/WeatherBar.module.css";
import { formatDate, formatTime } from "../utils/date";

export default function WeatherBar({ weatherData, cityData }) {
  if (!weatherData || !cityData) {
    return null;
  }

  return (
    <div className={styles.weather_bar}>
      <div className={styles.image}>
        <Image
          alt="weather"
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          width={80}
          height={80}
          loading="lazy"
        />
      </div>
      <div className={styles.bar}>
        <div className={styles.first}>
          <span className={styles.date}>
            {formatDate(weatherData.dt_txt)}. {formatTime(weatherData.dt_txt)}
          </span>
          <div className={styles.country}>
            <span className={styles.location}>
              {cityData.name}, {cityData.country}
            </span>
            <span className={styles.people}>
              (인구수 : {cityData.population})
            </span>
          </div>
        </div>
        <div className={styles.second}>
          <span className={styles.temperature}>{weatherData.main.temp}℃</span>
          <span className={styles.description}>
            Feels like {weatherData.main.feels_like}℃{" "}
            {weatherData.weather[0].description} 풍속 {weatherData.wind.speed}
            m/s 습도 {weatherData.main.humidity}%
          </span>
        </div>
      </div>
    </div>
  );
}
