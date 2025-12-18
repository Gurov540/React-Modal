import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "../../../shared/ui/Button";
import { ModalNames } from "../../../shared/lib/hooks/useModalControl/modalNames";
import { useModalControl } from "../../../shared/lib/hooks/useModalControl/useModalControl";

export const HeroSection: React.FC = () => {
  const {
    options: { openModal },
  } = useModalControl();

  return (
    <>
      <section className={styles.heroSection}>
        <h1 className={styles.heading}>
          Organize Your Work Easily with <span>TaskFlow</span>
        </h1>
        <h6 className={styles.description}>
          TaskFlow helps you manage projects and tasks efficiently with
          customizable boards, stages, and priority-based organization. Never
          miss a deadline again!
        </h6>
        <div className={styles.buttons}>
          <Button
            onClick={() => openModal(ModalNames.register)}
            color="primary"
            buttonSize="large"
          >
            Get Started - Sign Up Now
          </Button>
          <Button color="success" buttonSize="large">
            View Demo
          </Button>
        </div>
      </section>
    </>
  );
};
