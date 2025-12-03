import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  color?: "primary" | "success";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  size = "medium",
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
