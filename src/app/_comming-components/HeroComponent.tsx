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
      sx={{
        backgroundImage: {
          xs: `url(${mobileBg})`,
          md: `url(${pcBg})`,
        },
        backgroundPosition: { xs: "center", sm: "center", md: "cover" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: { xs: "calc( 100vh - 77px )", md: "600px" },
        display: "flex",
        position: "relative",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
          margin: "auto",
          zIndex: "20",
          position: "relative",
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
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: "600",
              // textTransform: "capitalize",
              color: "#fff",
              marginBottom: { xs: "10px", md: "14px" },
              // elipsis
              display: { xs: "none", md: "block" },
              // WebkitLineClamp: 3,
              // WebkitBoxOrient: "vertical",
              // overflow: "hidden",
              // textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: "600",
              // textTransform: "capitalize",
              color: "#fff",
              marginBottom: { xs: "10px", md: "14px" },
              // elipsis
              display: { xs: "block", md: "none" },
              // WebkitLineClamp: 3,
              // WebkitBoxOrient: "vertical",
              // overflow: "hidden",
              // textOverflow: "ellipsis",
            }}
          >
            {titleMob}
          </Typography>

          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
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
            data-aos="fade-left"
            data-aos-duration="500"
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
      {/* bgblurr  */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "10",
        }}
      ></Box>
    </Box>
  );
}
