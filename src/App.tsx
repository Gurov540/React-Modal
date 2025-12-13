import "./App.css";
import { Header } from "./widgets/Header";
import { ErrorModal } from "./shared/ui/ErrorModal";

function App() {
  return (
    <>
      <ErrorModal>какойто текст</ErrorModal>
      <Header></Header>
    </>
  );
}

export default App;
