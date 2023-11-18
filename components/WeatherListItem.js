// WeatherItem.jsx
import React from "react";
import Image from "next/image";

import styles from "../styles/WeatherList.module.css";
import keydown from "../public/assets/icons/keydown.svg";
import keyup from "../public/assets/icons/keyup.svg";

export default function WeatherListItem({ date, isToggled, onClick, details }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent} onClick={onClick}>
        <p className={styles.text}>{date}</p>
        <Image
          alt={isToggled ? "keyup" : "keydown"}
          src={isToggled ? keyup : keydown}
          className={styles.keyImg}
        />
      </div>
      <div className={styles.details}>
        {isToggled && (
          <div className={styles.index_item}>
            {details.map((detail, index) => (
              <div key={index} className={styles.detailItem}>
                <p>☀️</p>
                <div className={styles.info}>
                  <p className={styles.text_time}>{detail.time}</p>
                  <div className={styles.weather}>
                    <text className={styles.text_weather}>
                      {detail.weather}
                    </text>
                    <text className={styles.text}>{detail.temperature}</text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
