import Navbar from "@/_components/Navbar";
import HeroDetails from "@/_components/HeroDetails";
import Details from "./_sections/Details";
import Footer from "@/_components/Footer";

export default function BlogDetail() {
  return (
    <>
      <Navbar />
      <HeroDetails
        heading="The Future of Muslim Professional Leadership in Britain"
        bgImage="../bgHeroBlogDetails.png"
      />
      <Details />
      <Footer />
    </>
  );
}
