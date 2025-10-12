"use client";
import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import AboutUs from "./_sections/AboutUs";
import TheMessage from "./_sections/TheMessage";
import WhyJoinUs from "./_sections/WhyJoinUs";
import WhatWeOffer from "./_sections/WhatWeOffer";
import WhatUnique from "./_sections/WhatUnique";
import LatestEvents from "./_sections/LatestEvents";
import JoinOurCommunity from "./_sections/JoinOurCommunity";
import Footer from "@/_components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <HeroHome />
      <AboutUs />
      <TheMessage />
      <WhyJoinUs />
      <WhatWeOffer />
      <WhatUnique />
      <LatestEvents />
      <JoinOurCommunity />
      <Footer />
    </>
  );
}
