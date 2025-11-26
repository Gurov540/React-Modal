import React from "react";
import "./App.css";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="app">
      <button className="open-modl-btn">Авторизация</button>
      {open && (
        <div className="overlay">
          <div className="modal">
            <p>Modal Open!!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
