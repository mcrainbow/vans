import React from "react";
import NavPage from "../../components/NavPage/NavPage";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <NavPage />
      <section className={styles.homepage}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.subtitle}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className={styles.btn}>
          <Link to="/vans">Find your van</Link>
        </button>
      </section>
      <Footer />
    </main>
  );
}
