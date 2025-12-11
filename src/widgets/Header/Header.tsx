import React from "react";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button";
import { Logo } from "../../shared/ui/Logo";
import { useModalControl } from "../../shared/lib/hooks/useModalControl/useModalControl";
import { ModalNames } from "../../shared/lib/hooks/useModalControl/modalNames";

export const Header: React.FC = () => {
  const {
    options: { openModal },
  } = useModalControl();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <Button
            onClick={() => openModal(ModalNames.error)}
            color="primary"
            size="medium"
          >
            Login
          </Button>
          <Button
            onClick={() => openModal(ModalNames.register)}
            color="success"
            size="medium"
          >
            Registration
          </Button>
        </nav>
      </header>
    </>
  );
};
