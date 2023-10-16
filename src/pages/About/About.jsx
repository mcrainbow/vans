import React from "react";
import NavPage from "../../components/NavPage/NavPage";
import styles from "./About.module.css";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <main>
      <NavPage />
      <section className={styles.about}>
        <h2 className={styles.title}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className={styles.subtitle}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className={styles.subtitle}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className={styles.block}>
          <h4>Your destination is waiting. Your van is ready.</h4>
          <button>Explore our vans</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
