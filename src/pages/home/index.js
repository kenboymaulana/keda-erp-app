import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import PricingSection from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "../_layouts/landing-page/Navbar";

const Home = () => {
  const navigate = useNavigate();

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
