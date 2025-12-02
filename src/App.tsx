import "./App.css";
import { Modal } from "./shared/ui/Modal";
import { useModal } from "./shared/lib/hooks/useModal";

function App() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}></button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={close}
          closeOnEscape
          closeOnOverlayClick
        >
          asdfasdf
        </Modal>
      )}
    </>
  );
}

export default App;
