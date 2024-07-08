import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";
import Message from "./pages/Message";

function App() {
  let [dl, setDl] = useState(true);

  let handleDarkLight = () => {
    setDl(!dl);
    console.log(dl);
  };

  return ( 
    <>
      <div className={dl ? "light" : "dark"}>
        <div className="dlmode" onClick={handleDarkLight}>
          {dl ? (
            <>
              <span className="off">
                <BsToggleOff />
              </span>

              <span className="text">Switch to Dark</span>
            </>
          ) : (
            <>
              <span className="on">
                {" "}
                <BsToggleOn />
              </span>
              <span className="text">Switch to Light</span>
            </>
          )}
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/msg" element={<Message />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}


export default App;
