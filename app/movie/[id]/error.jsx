"use client";
import React from "react";
import styles from "./styles.module.css";

function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oops!</h1>
      <p className={styles.message}>
        Something went wrong. Please try again later.
      </p>
    </div>
  );
}

export default Error;
