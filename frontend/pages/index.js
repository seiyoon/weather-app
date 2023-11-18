import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import earth from "../public/assets/images/earth.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="weather app using Open Weather API" />
        <link rel="icon" href="/assets/images/earth.png" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.first_row}>
            Welcome to
            <br />
          </span>
          <span className={styles.second_row}>Weather App!</span>
        </h1>
        <h3 className={styles.description}>
          Choose a city from the list below to check the weather.
        </h3>
        <div className={styles.row}>
          <Link href="/Seoul">
            <div className={styles.button}>Seoul</div>
          </Link>
          <Link href="/Tokyo">
            <div className={styles.button}>Tokyo</div>
          </Link>
          <Link href="/Paris">
            <div className={styles.button}>Paris</div>
          </Link>
          <Link href="/London">
            <div className={styles.button}>London</div>
          </Link>
        </div>
        <Image alt="earth" src={earth} className={styles.earth_img} />
      </div>
    </div>
  );
}
