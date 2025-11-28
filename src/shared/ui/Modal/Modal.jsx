import React from "react";
import styles from "./Modal.module.css";
import { Button } from "../Button";

export function Modal({ children }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Button className={styles.closeBtn}>close</Button>
        {children}
      </div>
    </div>
  );
}
