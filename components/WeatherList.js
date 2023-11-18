import { useState } from "react";
import Image from "next/image";

import styles from "../styles/WeatherList.module.css";
import WeatherListItem from "./WeatherListItem";
import keydown from "../public/assets/icons/keydown.svg";
import keyup from "../public/assets/icons/keyup.svg";

const weatherData = [
  {
    date: "Date1",
    details: [
      { time: "12:00 PM", weather: "Sunny", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
    ],
  },
  {
    date: "Date2",
    details: [
      { time: "12:00 PM", weather: "Sunny", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
    ],
  },
  {
    date: "Date3",
    details: [
      { time: "12:00 PM", weather: "Sunny", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
    ],
  },
  {
    date: "Date4",
    details: [
      { time: "12:00 PM", weather: "Sunny", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
    ],
  },
  {
    date: "Date5",
    details: [
      { time: "12:00 PM", weather: "Sunny", temperature: "284.54" },
      { time: "03:00 PM", weather: "Cloudy", temperature: "284.54" },
    ],
  },
];

export default function WeatherList() {
  const [toggle, setToggle] = useState({});

  const toggleComment = (idx) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [idx]: !prevToggle[idx],
    }));
  };

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <p className={styles.titleText}>5-day Forecast</p>
      </div>
      {weatherData.map((item, idx) => (
        <WeatherListItem
          key={idx}
          date={item.date}
          isToggled={toggle[idx]}
          onClick={() => toggleComment(idx)}
          details={item.details}
        />
      ))}
    </div>
  );
}
