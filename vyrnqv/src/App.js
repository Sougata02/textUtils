import { useState } from "react";
import About from "./Component/About";
import Alert from "./Component/Alert";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <div>
      <Navbar mode={mode} toggleBtn={toggleMode} />
      <Alert alertOccur={alert} />
      {/* <Router> */}
      <div>
        {/* <Switch>
            <Route path="/about"> */}
        <About mode={mode} />
        {/* </Route>
            <Route path="/"> */}
        <Textform mode={mode} showAlert={showAlert} />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </div>
  );
}
