import type { ReactNode, ComponentPropsWithRef } from "react";
import { useEffect, useRef } from "react";
import { useModalControl } from "../../lib/hooks/useModalControl/useModalControl";
import styles from "./Modal.module.css";

type DialogProps = ComponentPropsWithRef<"dialog">;

interface ModalProps extends Omit<DialogProps, "open" | "onClose"> {
  children: ReactNode;
}

export const ErrorModal = ({ children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const {
    isErrorModal,
    options: { closeModal },
  } = useModalControl();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isErrorModal && !dialog.open) {
      dialog.showModal();
    }

    if (!isErrorModal && dialog.open) {
      dialog.close();
    }
  }, [isErrorModal]);

  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={closeModal}>
      <div className={styles.header}>
        <button onClick={closeModal}>×</button>
      </div>
      <div className={styles.content}>{children}</div>
    </dialog>
  );
};
