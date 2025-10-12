"use client";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import CustomButton from "@/_components/CustomButton";

export default function HeroHome() {
  return (
    <Box
      sx={{
        backgroundImage: "url(bgHome.webp)",
        backgroundPosition: { xs: "center", sm: "center", md: "cover" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        minHeight: { xs: "calc( 100vh - 75px )", md: "700px", lg: "800px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
        }}
      >
        <Box>
          <Box
            sx={{
              maxWidth: { xs: "500px", sm: "600px", md: "780px" },
              width: "100%",
              textAlign: "left",
            }}
          >
            <Typography
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{
                fontSize: localFontSize.h1,
                fontWeight: "700",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: { xs: "10px", md: "14px" },
                // elipsis
                display: "-webkit-box",
                WebkitLineClamp: { md: 3 },
                WebkitBoxOrient: { md: "vertical" },
                overflow: { md: "hidden" },
                textOverflow: { md: "ellipsis" },
              }}
            >
              Empowering Muslim Professionals, Together
            </Typography>

            <Typography
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{
                fontSize: localFontSize.p2,
                fontWeight: "400",
                color: "#FFFFFF80",
                // elipsis
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              At its core, HOW gathers Muslim industry leaders from across
              society4politics, finance, law, academia, media, medicine,
              business, and tech4to create a powerful space
            </Typography>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              marginTop: { xs: "20px", md: "40px" },
              display: "flex",
              gap: { xs: "10px", sm: "20px" },
              flexDirection: { xs: "column", sm: "row" },
              width: "fit-content",
            }}
          >
            <CustomButton text="get involved" lightmode={true} />
            <CustomButton text="meet our people" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
