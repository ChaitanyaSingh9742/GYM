import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";

const App = () => {
  const pricingRef = useRef(null);
  const bmiCalculatorRef = useRef(null);

  return (
    <Router>
      <Navbar />
      <Hero pricingRef={pricingRef} bmiCalculatorRef={bmiCalculatorRef} />
      <WorkoutSessions />
      <Gallery />
      <div ref={pricingRef} className="pricing-section">
        <Pricing />
      </div>
      <Contact />
      <div ref={bmiCalculatorRef} className="bmi-calculator-section">
        <BMICalculator />
      </div>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;

