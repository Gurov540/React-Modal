import React from "react";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button";
import { Logo } from "../../shared/ui/Logo";
import { Modal } from "../../shared/ui/Modal";
import { useModal } from "../../shared/lib/hooks/useModal";

export const Header: React.FC = () => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <Button onClick={open} color="primary" size="medium">
            Login
          </Button>
          <Button color="success" size="medium">
            Registration
          </Button>
        </nav>
      </header>
      <Modal isOpen={isOpen} onClose={close} closeOnEscape closeOnOverlayClick>
        <div className={styles.modalActions}>
          <button onClick={close}>Закрыть</button>
          <button>Добавить в корзину</button>
        </div>
      </Modal>
    </>
  );
};
