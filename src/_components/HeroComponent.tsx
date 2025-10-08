"use client";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";

interface HeroProps {
  mobileBg?: string | StaticImageData;
  pcBg?: string | StaticImageData;
  title?: string;
  description?: string;
  descriptionMob?: string;
  titleMob?: string;
}

export default function HeroComponent({
  mobileBg,
  pcBg,
  title,
  description,
  descriptionMob,
  titleMob,
}: HeroProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        backgroundImage: {
          xs: `url(${mobileBg})`,
          md: `url(${pcBg})`,
        },
        backgroundPosition: { xs: "center", sm: "center", md: "cover" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: { xs: "450px", md: "600px" },
        display: "flex",
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
        <Box
          sx={{
            maxWidth: { xs: "500px", sm: "600px", md: "950px" },
            width: "100%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h1,
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: { xs: "10px", md: "14px" },
              // elipsis
              display: { xs: "none", md: "-webkit-box" },
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.h1,
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: { xs: "10px", md: "14px" },
              // elipsis
              display: { xs: "-webkit-box", md: "none" },
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {titleMob}
          </Typography>

          <Typography
            sx={{
              fontSize: localFontSize.p2,
              fontWeight: "400",
              color: "#FFFFFF80",
              // elipsis
              display: { xs: "none", md: "-webkit-box" },
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p2,
              fontWeight: "400",
              color: "#FFFFFF80",
              // elipsis
              display: { xs: "-webkit-box", md: "none" },
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {descriptionMob}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
