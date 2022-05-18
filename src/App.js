import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
