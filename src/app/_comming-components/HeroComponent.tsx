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

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A hero component that displays a background image,
 * a title, and a description.
 * It is responsive and uses animations.
 *
 * @param {Object} props - The props object.
 * @param {string | StaticImageData} [props.mobileBg] - The background image for mobile devices.
 * @param {string | StaticImageData} [props.pcBg] - The background image for PC devices.
 * @param {string} [props.title] - The title of the hero component.
 * @param {string} [props.description] - The description of the hero component.
 * @param {string} [props.descriptionMob] - The description of the hero component for mobile devices.
 * @param {string} [props.titleMob] - The title of the hero component for mobile devices.
 */
/*******  d28bc79d-b497-4542-b6ca-d9b6a8dcfa99  *******/
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
    </Box>
  );
}
