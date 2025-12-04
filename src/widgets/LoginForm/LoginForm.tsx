import styles from "./LoginForm.module.css";
import { Modal } from "../../shared/ui/Modal";
import { useModal } from "../../shared/lib/hooks/useModal";

export const LoginForm = () => {
  const { isOpen, close } = useModal();
  return (
    <Modal isOpen={isOpen} onClose={close} closeOnEscape closeOnOverlayClick>
      <form className={styles.loginForm} action=""></form>
    </Modal>
  );
};
