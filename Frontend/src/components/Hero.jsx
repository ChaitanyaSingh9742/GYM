import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBMICalculatorClick = () => {
    navigate("./components/BMICalculator");
  };

  const handlePricingClick = () => {
    navigate("./components/Pricing");
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>AWAKEN,</h1>
          <h1>ENGAGE,</h1>
          <h1>CONQUER.</h1>
        </div>
        <div className="sub-title">
          <p>Transform Your Body, Ignite Your Strength</p>
          <p>Unleash the Power Within – Your Fitness Journey Begins Now</p>
        </div>
        <div className="buttons">
          <button onClick={handleBMICalculatorClick}>Calculate Your BMI</button>
          <button onClick={handlePricingClick}>Discover Our Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
