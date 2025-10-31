// import HomePage from "@/app/home/page";

// export default function Home() {
//   return <HomePage />;
// }

import { Box, Link, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import NavTopBar from "@/app/_comming-components/NavTopBar";
import HeroComponent from "@/_components/HeroComponent";
import TheMessage from "./home/_sections/TheMessage";
import ContactUs from "@/_components/ContactUs";

export default function Home() {
  return (
    <>
      <Box>
        <NavTopBar />
        <HeroComponent
          mobileBg="bgAbout.webp"
          pcBg="bgAbout.webp"
          title="A Professional Network with Purpose."
          titleMob="A Professional Network with Purpose."
          description="House of Wisdom unites Muslim leaders, thinkers, and changemakers from across the UK to connect, collaborate, and cultivate excellence through faith-driven leadership."
          descriptionMob="House of Wisdom unites Muslim leaders, thinkers, and changemakers from across the UK to connect, collaborate, and cultivate excellence through faith-driven leadership."
        />
      </Box>
      <TheMessage />
      <ContactUs />
      {/* the copy right line  */}
      <Box sx={{ borderTop: "2px solid #fff" }}>
        <Typography
          sx={{
            maxWidth: "800px",
            // width: "100%",
            margin: "auto",
            padding: "30px 20px",
            fontSize: localFontSize.p2,
            fontWeight: "400",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          Copyright © 2025 | House of Wisdom. All Rights Reserved.{" "}
          <Link
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              textDecoration: "none",
              transition: "all 0.4s ease-in-out",
              color: "#25D366",
              "&:hover": {
                color: "rgba(255, 255, 255, 1)",
              },
            }}
            href="https://www.qashnova.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By Qashnova
          </Link>
        </Typography>
      </Box>
    </>
  );
}
