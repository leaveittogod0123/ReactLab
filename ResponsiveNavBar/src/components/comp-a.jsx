import React from "react";
import styles from "../sass/comp-a.module.scss";

const CompA = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Component A</h3>
    <button className={styles.button} type="button">
      ...
    </button>
  </div>
);

export default CompA;
