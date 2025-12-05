import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  children: React.ReactNode;
  label?: string;
  color?: "primary" | "success";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
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
