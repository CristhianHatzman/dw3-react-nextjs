import styles from "@/components/TrafficLight/TrafficLight.module.css"

const TrafficLight = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 style={{marginTop: "30px"}}>Semáforo da FATEC:</h3>
        <br />
        <div className={`${styles.light} ${styles.red}`}></div>
        <div className={`${styles.light} ${styles.yellow}`}></div>
        <div className={`${styles.light} ${styles.green}`}></div>
      </div>
    </>
  );
};

export default TrafficLight;
