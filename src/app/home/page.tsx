import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import AboutUs from "./_sections/AboutUs";
import WhatWeOffer from "./_sections/WhatWeOffer";
import WhatUnique from "./_sections/WhatUnique";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <AboutUs />
      <WhatWeOffer />
      <WhatUnique />
    </>
  );
}
