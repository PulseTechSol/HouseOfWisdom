import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";
import FeaturedEvent from "./_sections/FeaturedEvent";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroComponent
        mobileBg="bgEvents.webp"
        pcBg="bgEvents.webp"
        title="Events That Inspire Change"
        titleMob="Events That Inspire Change"
        description="Join our exclusive events designed to foster meaningful connections, drive policy discussions, and advance professional development within the Muslim community."
        descriptionMob="Join our exclusive events designed to foster meaningful connections, drive policy discussions, and advance professional development within the Muslim community."
      />
      <FeaturedEvent />
    </>
  );
}
