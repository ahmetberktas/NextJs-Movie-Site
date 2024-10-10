import React from "react";
import styles from "./styles.module.css";

function LoadingComponent() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
}

export default LoadingComponent;
