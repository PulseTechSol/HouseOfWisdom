import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import ConsentGate from "@/_components/privacy/ConsentGate";
import AnalyticsGA from "@/_components/privacy/AnalyticsGA";
import MetaPixel from "@/_components/privacy/MetaPixel";
import CookieBanner from "@/_components/privacy/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minhaj - House Of Wisdom",
  description:
    "Minhaj – House of Wisdom is a professional housing and community initiative dedicated to empowering Muslim professionals, fostering collaboration, and driving positive change across the UK. We connect leaders, innovators, and changemakers through trusted spaces for networking, mentorship, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        <ConsentGate>
          {gaId && <AnalyticsGA gaId={gaId} />}
          {pixelId && <MetaPixel pixelId={pixelId} />}
        </ConsentGate>
        {/* Banner should live in body too */}
        <CookieBanner />
      </body>
    </html>
  );
}
