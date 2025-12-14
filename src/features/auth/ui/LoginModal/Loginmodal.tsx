import { Modal } from "../../../../shared/ui/Modal/Modal";
import { useModalControl } from "../../../../shared/lib/hooks/useModalControl/useModalControl";

export const LoginModal = () => {
  const {
    isLoginModal,
    options: { closeModal },
  } = useModalControl();

  const isOpen = isLoginModal;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h2>Вход</h2>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />

        <button type="submit">Войти</button>
      </form>
    </Modal>
  );
};
