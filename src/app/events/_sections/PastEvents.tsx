"use client";

import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function PastEvents() {
  return (
    <Box sx={{ bgcolor: "#E9E9E9" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* heading there  */}
        <Typography
          sx={{
            fontSize: localFontSize.h2,
            fontWeight: 600,
            color: "#000",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          past events
        </Typography>
        {/* the card box  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: { xs: "40px", md: "80px" },
          }}
        >
          <ValueCard
            iconSrc={svgs.developingLeaders}
            title="Inaugural Networking Gala"
            date="December 2023"
            description="Our launch event that brought together over 200 Muslim professionals from across various sectors."
          />
          <ValueCard
            iconSrc={svgs.developingLeaders}
            title="Women in Leadership Panel"
            date="January 2024"
            description="Panel discussion featuring prominent Muslim women leaders discussing barriers and opportunities in professional advancement."
          />
          <ValueCard
            iconSrc={svgs.developingLeaders}
            title="Financial Services"
            date="February 2024"
            description="Strategic discussion on Islamic finance integration and Muslim professional advancement in financial services."
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
  date: string;
};

export function ValueCard({
  iconSrc,
  title,
  description,
  date,
}: ValueCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: { xs: "250px", sm: "300px", md: "360px" },
        padding: "20px",
        backgroundColor: "#25D366",
        borderRadius: "20px",
        height: "345px",
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
          color: "#fff",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: localFontSize.p3,
          color: "#FFFFFF",
          marginY: { xs: "6px", md: "10px" },
        }}
      >
        {date}
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
