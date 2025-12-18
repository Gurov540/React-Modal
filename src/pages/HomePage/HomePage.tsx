import React from "react";
import styles from "./HomePage.module.css";
import { Header } from "../../widgets/Header";
import { HeroSection } from "../../widgets/HomePage-Sections/HeroSection/HeroSection";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  );
};
