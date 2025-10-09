import styles from "@/components/TrafficLight/TrafficLight.module.css";

import { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("gray");
  return (
    <>
      <div className={styles.container}>
        <h3 style={{ marginTop: "30px" }}>Semáfro da FATEC: </h3>

        <div
          className={`${styles.light} ${
            color == "red" ? styles.red : styles.gray
          }`}
        >
          <button className="button" onClick={() => setColor("red")}>
            Pare!
          </button>
        </div>
        <div
          className={`${styles.light} ${
            color == "yellow" ? styles.yellow : styles.gray
          }`}
        >
          <button className="button" onClick={() => setColor("yellow")}>
            Atenção!
          </button>
        </div>
        <div
          className={`${styles.light} ${
            color == "green" ? styles.green : styles.gray
          }`}
        >
          <button className="button" onClick={() => setColor("green")}>
            Prossiga
          </button>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
