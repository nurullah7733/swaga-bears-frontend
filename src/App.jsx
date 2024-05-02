import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import "./App.css";
import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Mint from "./components/Mint";
import Story from "./components/Story";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <div className="page-container ">
        <Navigation />
        {/* <Header /> */}
        <Home />
        <About />
        <Mint />
        {/* <Gif /> */}
        <Story />
        <Roadmap />
        <Team />
        <FAQ />
        <Link />
        <Footer />
      </div>
    </div>
  );
}

export default App;
