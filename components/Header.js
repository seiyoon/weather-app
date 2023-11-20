import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import earth_svg from "../public/assets/images/earth.svg";

export default function Header({ children }) {
  return (
    <div className={styles.header}>
      <Head>
        <title>{children} Page</title>
        <meta name="description" content="weather app using Open Weather API" />
        <link rel="icon" href="/assets/images/earth.png" />
      </Head>
      <div className={styles.main}>
        <Link href="/" as={"/"}>
          <Image
            alt="earth"
            src={earth_svg}
            width={68}
            height={51}
            loading="lazy"
          />
        </Link>
        <h1 className={styles.title}>Weather Information for {children}</h1>
      </div>
    </div>
  );
}
