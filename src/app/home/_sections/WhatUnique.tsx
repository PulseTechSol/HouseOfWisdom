"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function WhatUnique() {
  return (
    <Box sx={{ bgcolor: "#1A1A1A" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* heading there  */}
        <Box
          sx={{
            width: "fit-content",
            marginX: "auto",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              paddingBottom: { xs: "20px", md: "40px" },
              width: "fit-content",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h2,
                fontWeight: 600,
                color: "#FFF",
              }}
            >
              What Sets Us Apart
            </Typography>
            <Divider
              sx={{
                width: "80px",
                border: "2px solid #25D366",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: localFontSize.p2,
              color: "#FFFFFF80",
            }}
          >
            {`Discover how we're revolutionizing professional networking and
            community influence.`}
          </Typography>
        </Box>
        {/* the card box  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // gap: "30px",
            flexWrap: "wrap",
            marginTop: { xs: "40px", md: "80px" },
          }}
        >
          <ValueCard
            iconSrc={svgs.professionalNetworking}
            title="Professional Networking"
            description="Connect with Muslim professionals to build meaningful relationships and drive impact."
          />
          <ValueCard
            iconSrc={svgs.policyInfluence}
            title="Policy Influence"
            description="Shape policies and drive change through strategic discussions and advocacy."
          />
          <ValueCard
            iconSrc={svgs.exclusiveEvents}
            title="Exclusive Events"
            description="Join exclusive networking events, seminars, and conferences for professional growth."
          />
        </Box>
      </Box>
    </Box>
  );
}

type ValueCardProps = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

export function ValueCard({ iconSrc, title, description }: ValueCardProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: "10px", md: "20px" },
        maxWidth: { xs: "300px", md: "360px" },
        padding: "20px",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          marginBottom: { xs: "10px", md: "20px" },
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={iconSrc}
          alt={title}
        />
      </Box>

      <Typography
        sx={{
          fontSize: localFontSize.h3,
          fontWeight: 600,
          color: "#FFF",
          maxWidth: { sm: "240px", lg: "260px" },
          margin: "auto",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
