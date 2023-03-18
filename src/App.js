import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Features from "./component/Features";
import Signup from "./component/Signup";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
