import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import HeroComponent from "@/_components/HeroComponent";
import Navbar from "@/_components/Navbar";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <HeroComponent
        mobileBg="bgContacts.webp"
        pcBg="bgContacts.webp"
        title="Start the Conversation"
        titleMob="Start the Conversation"
        description="We’d love to hear from you. Whether you have a question, want to collaborate, or wish to learn more about our work, our team is here to help."
        descriptionMob="We’d love to hear from you. Whether you have a question, want to collaborate, or wish to learn more about our work, our team is here to help."
      />
      <ContactUs />
      <Footer />
    </>
  );
}
