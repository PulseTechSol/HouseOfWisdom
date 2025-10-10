"use client";

import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function EventTypes() {
  return (
    <Box sx={{ bgcolor: "#E9E9E9" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Box sx={{ maxWidth: "950px", margin: "auto", textAlign: "center" }}>
          {/* heading there  */}
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              marginBottom: { xs: "10px", md: "20px" },
            }}
          >
            Driven by Purpose
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p2,
              color: "#00000080",
            }}
          >
            Our Advisory Board comprises distinguished professionals from
            various sectors who provide strategic guidance and expertise to help
            shape our initiatives and expand our impact.
          </Typography>
        </Box>
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
            title="Revive Islamic Intellectual"
            description="Reignite curiosity and creativity rooted in Islamic values."
          />
          <ValueCard
            iconSrc={svgs.developingLeaders}
            title="Revive Islamic Intellectual"
            description="Reignite curiosity and creativity rooted in Islamic values."
          />
          <ValueCard
            iconSrc={svgs.developingLeaders}
            title="Revive Islamic Intellectual"
            description="Reignite curiosity and creativity rooted in Islamic values."
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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: { xs: "250px", sm: "300px", md: "360px" },
        borderRadius: "20px",
        height: "250px",
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
          color: "#25D366",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#00000080",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
