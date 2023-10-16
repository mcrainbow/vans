import React from "react";
import styles from "./NavPage.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";

export default function NavPage() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <nav className={styles.nav}>
          <Logo />

          <ul className={styles.navList}>
            <li>
              <Link to="/host">Host</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/vans">Vans</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
