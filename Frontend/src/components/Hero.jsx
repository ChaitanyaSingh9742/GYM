import React, { useRef } from "react";

const Hero = () => {
  const pricingRef = useRef(null);
  const bmiCalculatorRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBMICalculator = () => {
    bmiCalculatorRef.current.scrollIntoView({ behavior: 'smooth' });
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
          <button onClick={scrollToPricing}>Discover Our Plans</button>
          <button onClick={scrollToBMICalculator}>Calculate Your BMI</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


