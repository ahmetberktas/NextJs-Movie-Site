import React from "react";
import styles from "./styles.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>Page Not Found</p>
    </div>
  );
}

export default NotFound;
