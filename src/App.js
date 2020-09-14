import React from "react";
import Navbar from "./components/layout/navbar component/NavBar";
import NavMenu from "./components/layout/navbar component/NavMenu";
// import "./App.css";
import "./css/style.default.css";
import "./css/style.green.css";
import "./css/style.pink.css";
import "./css/style.red.css";
import "./css/style.sea.css";
import "./css/style.violet.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <NavMenu />
    </div>
  );
}

export default App;
