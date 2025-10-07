import type { Metadata } from "next";

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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
