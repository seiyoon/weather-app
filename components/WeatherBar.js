import Image from "next/image";
import styles from "../styles/WeatherBar.module.css";
import earth from "../public/assets/images/earth.png";

export default function WeatherBar({ weatherData, cityData }) {
  // Check if weatherData or cityData is undefined
  if (!weatherData || !cityData) {
    return null;
  }

  return (
    <div className={styles.weather_bar}>
      <div className={styles.image}>
        <Image alt="earth" src={earth} width={80} height={80} />
      </div>
      <div className={styles.bar}>
        <div className={styles.first}>
          <text className={styles.date}>{weatherData.dt_txt.slice(0, -3)}</text>
          <div className={styles.country}>
            <text className={styles.location}>
              {cityData.name}, {cityData.country}
            </text>
            <text className={styles.people}>
              (인구수 : {cityData.population})
            </text>
          </div>
        </div>
        <div className={styles.second}>
          <text className={styles.temperature}>{weatherData.main.temp}℃</text>
          <text className={styles.description}>
            Feels like {weatherData.main.feels_like}℃{" "}
            {weatherData.weather[0].description} 풍속 {weatherData.wind.speed}
            m/s 습도 {weatherData.main.humidity}%
          </text>
        </div>
      </div>
    </div>
  );
}
