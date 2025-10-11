import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";
import FeaturedEvent from "./_sections/FeaturedEvent";
import UpcomingEvents from "./_sections/UpcomingEvents";
import PastEvents from "./_sections/PastEvents";
import EventTypes from "./_sections/EventTypes";
import JoinOurMission from "@/_components/JoinOurMission";
import Footer from "@/_components/Footer";

export default function Events() {
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
      <UpcomingEvents />
      <PastEvents />
      <EventTypes />
      <JoinOurMission />
      <Footer />
    </>
  );
}
