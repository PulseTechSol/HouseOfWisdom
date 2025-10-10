import Navbar from "@/_components/Navbar";
import HeroComponent from "@/_components/HeroComponent";
import OurTeam from "./_sections/OurTeam";
import AdvisoryBoard from "./_sections/AdvisoryBoard";
import JoinOurMission from "@/_components/JoinOurMission";
import Footer from "@/_components/Footer";

export default function OurPeople() {
  return (
    <>
      <Navbar />
      <HeroComponent
        mobileBg="bgAbout.webp"
        pcBg="bgAbout.webp"
        title="The People behind Our success"
        titleMob="The People behind Our success"
        description="At Minhaj – House of Wisdom, our strength lies in the dedication of our people. Together, they embody the values of faith, service, and positive change."
        descriptionMob="At Minhaj – House of Wisdom, our strength lies in the dedication of our people. Together, they embody the values of faith, service, and positive change."
      />
      <OurTeam />
      <AdvisoryBoard />
      <JoinOurMission />
      <Footer />
    </>
  );
}
