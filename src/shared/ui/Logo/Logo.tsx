import React from "react";
import styles from "./Logo.module.css";

export const Logo: React.FC = () => {
  return (
    <a className={styles.logo} href="#">
      TaskFlow
    </a>
  );
};
