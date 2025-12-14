import "./App.css";
import { Header } from "./widgets/Header";
import { LoginModal } from "./features/auth/ui/LoginModal/Loginmodal";
import { RegisterModal } from "./features/auth/ui/RegisterModal/RegisterModal";

function App() {
  return (
    <>
      <RegisterModal></RegisterModal>
      <LoginModal></LoginModal>
      <Header></Header>
    </>
  );
}

export default App;
