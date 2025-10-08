import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";

export default function HomePage() {
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
    </>
  );
}
