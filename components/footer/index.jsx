import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <span className={styles.heart}>♥</span> by{" "}
        <Link
          href="https://github.com/ahmetberktas"
          target="_blank"
          className={styles.footerLink}
        >
          Ahmet Berktaş
        </Link>{" "}
        2024
      </p>
    </footer>
  );
}

export default Footer;
