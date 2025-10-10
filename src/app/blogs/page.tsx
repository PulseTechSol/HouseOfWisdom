import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";
import FeaturedArticle from "./_sections/FeaturedArticle";
import ListOfBlogs from "./_sections/ListOfBlogs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroComponent
        mobileBg="bgAbout.webp"
        pcBg="bgAbout.webp"
        title="Insights & Inspiration"
        titleMob="Insights & Inspiration"
        description="Insights, analysis, and perspectives from Muslim professionals shaping Britain's future."
        descriptionMob="Insights, analysis, and perspectives from Muslim professionals shaping Britain's future."
      />
      <FeaturedArticle />
      <ListOfBlogs />
    </>
  );
}
