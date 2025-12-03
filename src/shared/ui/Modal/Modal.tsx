import type { ReactNode } from "react";
import { useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeOnEscape = true,
  closeOnOverlayClick = true,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  // Обработка нажатия Escape
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <div className={styles.header}>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            ×
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
