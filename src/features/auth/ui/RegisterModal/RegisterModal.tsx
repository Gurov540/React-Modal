import { useModalControl } from "../../../../shared/lib/hooks/useModalControl/useModalControl";
import styles from "./RegisterModal.module.css";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { Input } from "../../../../shared/ui/Input";
import { Button } from "../../../../shared/ui/Button";

export const RegisterModal = () => {
  const {
    isRegisterModal,
    options: { closeModal },
  } = useModalControl();

  const isOpen = isRegisterModal;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h2>Регистрация</h2>

      <form className={styles.registerForm}>
        <Input type="email" placeholder="Login" fullWidth></Input>
        <Input type="password" placeholder="password" fullWidth></Input>

        <Button type="submit">Войти</Button>
      </form>
    </Modal>
  );
};
