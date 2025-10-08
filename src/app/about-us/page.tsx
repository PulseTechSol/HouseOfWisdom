import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";
import WhoWeAre from "./_sections/WhoWeAre";
import MediaFeatureList from "../../_components/MediaFeatureList";
import AimsAndObjectives from "./_sections/AimsAndObjectives";
import UnitingForImpact from "./_sections/UnitingForImpact";

export default function AboutUS() {
  return (
    <>
      <Navbar />
      <HeroComponent
        mobileBg="bgAbout.webp"
        pcBg="bgAbout.webp"
        title="Empowering Muslim Professionals, Connecting for Change"
        titleMob="Guided by Faith, Committed to Humanity"
        description="We are a professional network dedicated to uniting Muslim leaders, innovators, and changemakers from across the UK. Our mission is to connect talent with purpose — building a platform where professional growth meets community impact."
        descriptionMob="We are a professional network dedicated to uniting Muslim leaders, innovators, and changemakers from across the UK. Our mission is to connect talent with purpose — building a platform where professional growth meets community impact."
      />
      <WhoWeAre />
      <MediaFeatureList />
      <AimsAndObjectives />
      <UnitingForImpact />
    </>
  );
}
