import { useModalControl } from "../../../../shared/lib/hooks/useModalControl/useModalControl";
import styles from "./LoginModal.module.css";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { Input } from "../../../../shared/ui/Input";
import { Button } from "../../../../shared/ui/Button";

export const LoginModal = () => {
  const {
    isLoginModal,
    options: { closeModal },
  } = useModalControl();

  const isOpen = isLoginModal;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h2>Вход</h2>

      <form className={styles.loginForm}>
        <Input type="email" placeholder="Login" fullWidth></Input>
        <Input type="password" placeholder="password" fullWidth></Input>

        <Button type="submit">Войти</Button>
      </form>
    </Modal>
  );
};
