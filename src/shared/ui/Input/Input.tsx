import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  label?: string;
  color?: "primary" | "success";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export const Button: React.FC<ModalProps> = ({
  children,
  color = "primary",
  size = "medium",
}) => {
  return (
    <input className={`${styles.input} ${styles[color]} ${styles[size]}`}>
      {children}
    </input>
  );
};
