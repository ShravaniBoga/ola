import React from "react";
import "./HeroSection.css";
import Carousel from "./Carosel";
import Cards from "./Cards";
import ShortCards from "./ShortCards";
import BikeCard from "./BikeCard";
import EMICalculatorSection from "./EMICalculatorSection";
import GridCards from "./GridCards";
import MeetUsSection from "./MeetUsSection";
import CitySelectionSection from "./CitySelectionSection";
import OlaCommunity from "./OlaCommunity";
import OlaDifference from "./OlaDifference";
import Hub from "./Hub";
import PlayButton from "../ui/PlayButton";
import Community from "./Community";
import NewsSection from "./NewsSection";
import AboutUs from "./AboutUs";
import Subscribe from "./Subscribe";
import Footer from "../ui/Footer";

const HeroSection = () => {
  return (
    <div>
      <Carousel />
      <Cards />
      <BikeCard />
      <ShortCards />
      <EMICalculatorSection />
      <GridCards />
      <MeetUsSection />
      <CitySelectionSection />
      <OlaCommunity />
      <OlaDifference />
      <Hub />
      <Community />
      <NewsSection />
      <AboutUs />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HeroSection;
