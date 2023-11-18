import Image from "next/image";

import styles from "../styles/WeatherBar.module.css";
import earth from "../public/assets/images/earth.png";

export default function WeatherBar() {
  return (
    <div className={styles.weather_bar}>
      <div className={styles.image}>
        <Image alt="earth" src={earth} width={80} height={80} />
      </div>
      <div className={styles.bar}>
        <div className={styles.first}>
          <text className={styles.date}>May 23. 03:00am</text>
          <div className={styles.country}>
            <text className={styles.location}>Seoul, KR</text>
            <text className={styles.people}>(인구수 : 10349312)</text>
          </div>
        </div>
        <div className={styles.second}>
          <text className={styles.temperature}>292.98℃</text>
          <text className={styles.description}>
            Feels like 291.91℃ clear sky 풍속 3.33m/s 습도 34%
          </text>
        </div>
      </div>
    </div>
  );
}
