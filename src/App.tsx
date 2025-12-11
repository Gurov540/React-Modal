import "./App.css";
import { Header } from "./widgets/Header";
import { ErrorModal } from "./shared/ui/ErrorModal";

function App() {
  return (
    <>
      <ErrorModal>Error</ErrorModal>
      <Header></Header>
    </>
  );
}

export default App;
