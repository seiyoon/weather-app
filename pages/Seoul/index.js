import Header from "../../components/Header";
import WeatherBar from "../../components/WeatherBar";
import WeatherList from "../../components/WeatherList";
import styles from "../../styles/View.module.css";

export default function Seoul() {
  return (
    <div className={styles.container}>
      <Header>Seoul</Header>
      <WeatherBar />
      <WeatherList />
    </div>
  );
}
