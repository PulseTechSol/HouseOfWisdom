"use client";

import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function AimsAndObjectives() {
  return (
    <Box sx={{ bgcolor: "#E9E9E9" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* top banner  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: { xs: "16px", md: "20px" },
            justifyContent: "center",
          }}
        >
          <Image src={svgs.whoWeAre} alt="Icon" width={24} height={24} />
          <Typography sx={{ fontSize: localFontSize.p2, color: "#006B4F" }}>
            Our Values
          </Typography>
        </Box>
        {/* heading there  */}
        <Box
          sx={{ marginBottom: "20px", width: "fit-content", marginX: "auto" }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              textAlign: "center",
            }}
          >
            Driven by Purpose
            <Divider
              sx={{
                width: "80px",
                border: { xs: "2px solid #006B4F", md: "4px solid #006B4F" },
              }}
            />
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
        gap: { xs: "10px", md: "20px" },
        maxWidth: { xs: "150px", sm: "300px", md: "360px" },
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
          color: "#000",
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
