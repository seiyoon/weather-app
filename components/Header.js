import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Header.module.css";
import earth from "../public/assets/images/earth.webp";

export default function Header({ children }) {
  return (
    <div className={styles.header}>
      <Head>
        <title>{children} Page</title>
        <meta name="description" content="weather app using Open Weather API" />
        <link rel="icon" href="/assets/images/earth.png" />
      </Head>
      <div className={styles.main}>
        <Image alt="earth" src={earth} width={68} height={51} loading="lazy" />
        <h1 className={styles.title}>Weather Information for {children}</h1>
      </div>
    </div>
  );
}
