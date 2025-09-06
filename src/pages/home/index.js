import React from "react";
import Hero from "./sections/Hero";
import PricingSection from "./sections/Pricing";
import About from "./sections/About";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <>
      <title>Portal - KeDa ERP System</title>

      {/* 🔷 HERO SECTION */}
      <Hero />

      {/* 💼 TIER / PRICING SECTION */}
      <PricingSection />

      {/* 💼 About Section */}
      <About />

      {/* 💼 Contact Section */}
      <Contact />
    </>
  );
};

export default Home;
