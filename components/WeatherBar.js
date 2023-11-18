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
          <span className={styles.date}>May 23. 03:00am</span>
          <div className={styles.country}>
            <span className={styles.location}>Seoul, KR</span>
            <span className={styles.people}>(인구수 : 10349312)</span>
          </div>
        </div>
        <div className={styles.second}>
          <span className={styles.temperature}>292.98℃</span>
          <span className={styles.description}>
            Feels like 291.91℃ clear sky 풍속 3.33m/s 습도 34%
          </span>
        </div>
      </div>
    </div>
  );
}
