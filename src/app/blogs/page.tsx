import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";
import FeaturedArticle from "./_sections/FeaturedArticle";
import ListOfBlogs from "./_sections/ListOfBlogs";
import Footer from "@/_components/Footer";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <HeroComponent
        mobileBg="bgBlogs.webp"
        pcBg="bgBlogs.webp"
        title="Insights & Inspiration"
        titleMob="Insights & Inspiration"
        description="Insights, analysis, and perspectives from Muslim professionals shaping Britain's future."
        descriptionMob="Insights, analysis, and perspectives from Muslim professionals shaping Britain's future."
      />
      <FeaturedArticle />
      <ListOfBlogs />
      <Footer />
    </>
  );
}
