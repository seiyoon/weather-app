import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/WeatherList.module.css";
import keydown from "../public/assets/icons/keydown.svg";
import keyup from "../public/assets/icons/keyup.svg";

export default function WeatherListItem({ date, isToggled, onClick, details }) {
  const animationClass = isToggled
    ? styles.expandAnimation
    : styles.collapseAnimation;

  return (
    <div className={`${styles.item} ${animationClass}`} onClick={onClick}>
      <div className={styles.itemContent}>
        <p className={styles.text}>{date}</p>
        <Image
          alt={isToggled ? "keyup" : "keydown"}
          src={isToggled ? keyup : keydown}
          className={styles.keyImg}
        />
      </div>
      {isToggled && (
        <div className={styles.details}>
          <div className={styles.index_item}>
            {details.map((detail, index) => (
              <div key={index} className={styles.detailItem}>
                <p>☀️</p>
                <div className={styles.info}>
                  <p className={styles.text_time}>
                    {detail.dt_txt.slice(11, 16)}
                  </p>
                  <div className={styles.weather}>
                    <span className={styles.text_weather}>
                      {detail.weather[0].description}
                    </span>
                    <span className={styles.text}>
                      {" "}
                      {detail.main.temp_min}℃ / {detail.main.temp_max}℃
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
