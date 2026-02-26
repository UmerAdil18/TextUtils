import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [secondMode, setSecondMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  let removeBodyClasess = () => {
    document.body.classList.remove("primary");
    document.body.classList.remove("success");
    // document.body.classList.remove("info");
    // document.body.classList.remove("warning");
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        About="About"
        Home="Home"
        mode={mode}
        // secondMode={secondMode}
        toggleMode={toggleMode}
        // changeMode={changeMode}
      />
      <Alert Alert={alert} />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              mode={mode}
              showAlert={showAlert}
              heading="Text for analyze below"
            />
          }
        />

        <Route
          path="/About"
          element={
            <div className="container my-5">
              <About mode={mode} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
