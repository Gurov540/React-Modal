import type { ReactNode, ComponentPropsWithRef } from "react";
import { useModalControl } from "../../lib/hooks/useModalControl/useModalControl";
import styles from "./Modal.module.css";

type DialogProps = ComponentPropsWithRef<"dialog">;

interface ModalProps extends Omit<DialogProps, "open" | "onClose"> {
  children: ReactNode;
}

export const ErrorModal = ({ children }: ModalProps) => {
  const {
    isErrorModal,
    options: { closeModal },
  } = useModalControl();

  return (
    <dialog className={styles.modal} open={isErrorModal} onClose={closeModal}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.close}
          aria-label="Закрыть модальное окно"
          onClick={closeModal}
        >
          ×
        </button>
        <h1>ERROR</h1>
      </div>
      <div className={styles.content}>{children}</div>
    </dialog>
  );
};
