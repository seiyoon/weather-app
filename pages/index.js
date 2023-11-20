import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import earth_svg from "../public/assets/images/earth.svg";

const cities = ["Seoul", "Tokyo", "Paris", "London"];

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
        <h2 className={styles.description}>
          Choose a city from the list below to check the weather.
        </h2>
        <div className={styles.row}>
          {cities.map((city) => (
            <Link key={city} href={`/${city}`}>
              <a className={styles.button}>{city}</a>
            </Link>
          ))}
        </div>
        <div className={styles.img}>
          <Image
            alt="earth"
            src={earth_svg}
            width={430}
            height={321}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
