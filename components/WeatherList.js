import { useState } from "react";
import Image from "next/image";

import styles from "../styles/WeatherList.module.css";
import WeatherListItem from "./WeatherListItem";
import keydown from "../public/assets/icons/keydown.svg";
import keyup from "../public/assets/icons/keyup.svg";

export default function WeatherList({ weatherData }) {
  const [toggle, setToggle] = useState({});

  const toggleComment = (idx) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [idx]: !prevToggle[idx],
    }));
  };

  // dt_txt를 기준으로 데이터를 그룹화
  const groupedData = {};

  // weatherData.list에 데이터가 있는지 확인
  if (weatherData.list && weatherData.list.length > 0) {
    weatherData.list.forEach((item, idx) => {
      const date = item.dt_txt.split(" ")[0];

      if (!groupedData[date]) {
        groupedData[date] = [];
      }

      groupedData[date].push(item);
    });
  }

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <p className={styles.titleText}>5-day Forecast</p>
      </div>
      {Object.entries(groupedData).map(([date, details], idx) => (
        <WeatherListItem
          key={idx}
          date={date}
          isToggled={toggle[idx]}
          onClick={() => toggleComment(idx)}
          details={details}
        />
      ))}
    </div>
  );
}
