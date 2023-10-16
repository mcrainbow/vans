import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="../../../public/logo.png" alt="vanlife" />
    </Link>
  );
}
