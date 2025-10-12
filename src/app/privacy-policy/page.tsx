// app/privacy-policy/page.tsx
import { Metadata } from "next";
import Navbar from "@/_components/Navbar";
import PrivatePolicies from "./_sections/PrivatePolicies";
import Footer from "@/_components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Qashnova",
  description:
    "Read Qashnova’s privacy policy to understand how we handle your data, cookies, and user information securely.",
  alternates: { canonical: "https://www.qashnova.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main role="main">
        <PrivatePolicies
          businessName="Minhaj"
          businessEmail="info@houseofwisdom.org.uk"
          businessPhone="+44 (0) 20 7123 4567"
        />
      </main>
      <Footer />
    </>
  );
}
