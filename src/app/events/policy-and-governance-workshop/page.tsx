import Navbar from "@/_components/Navbar";
import HeroDetails from "@/_components/HeroDetails";
import Details from "./_sections/Details";
import Footer from "@/_components/Footer";

export default function EventDetail() {
  return (
    <>
      <Navbar />
      <HeroDetails
        heading="Policy & Governance Workshop"
        bgImage="../bgHeroEventDetails.png"
      />
      <Details />
      <Footer />
    </>
  );
}
