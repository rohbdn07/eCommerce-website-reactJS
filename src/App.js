import React from "react";
import Navbar from "./components/layout/navbar component/NavBar";
import NavMenu from "./components/layout/navbar component/NavMenu";
import Carousel from "./components/layout/carousel component/HeroImage";
import Footer from "./components/layout/footer/Footer";
import CopyRight from "./components/layout/footer/CopyRight";
// import "./App.css";
import "./css/style.default.css";
import "./css/style.green.css";
import "./css/style.pink.css";
import "./css/style.red.css";
import "./css/style.sea.css";
import "./css/style.violet.css";

// import "./js/front";
// import "./js/main";
// import "./js/map";

function App() {
  return (
    <>
      <Navbar />
      <NavMenu />
      <Carousel />
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
