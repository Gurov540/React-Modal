import { Modal } from "../../../../shared/ui/Modal/Modal";
import { useModalControl } from "../../../../shared/lib/hooks/useModalControl/useModalControl";

export const RegisterModal = () => {
  const {
    isRegisterModal,
    options: { closeModal },
  } = useModalControl();

  const isOpen = isRegisterModal;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h2>Регистрация</h2>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />

        <button type="submit">регистрация</button>
      </form>
    </Modal>
  );
};
