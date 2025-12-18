import "./App.css";
import { LoginModal } from "./features/auth/ui/LoginModal";
import { RegisterModal } from "./features/auth/ui/RegisterModal/RegisterModal";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <RegisterModal></RegisterModal>
      <LoginModal></LoginModal>
      <HomePage></HomePage>
    </>
  );
}

export default App;
