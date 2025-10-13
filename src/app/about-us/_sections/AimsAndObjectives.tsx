"use client";

import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function AimsAndObjectives() {
  return (
    <Box sx={{ bgcolor: "#1A1A1A" }}>
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
          <Image src={svgs.stepUpToAim} alt="Icon" width={24} height={24} />
          <Typography sx={{ fontSize: localFontSize.p2, color: "#25D366" }}>
            Aims and Objectives
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
              color: "#fff",
              textAlign: "center",
            }}
          >
            Uniting For Impact
            <Divider
              sx={{
                width: "80px",
                border: "2px solid #25D366",
              }}
            />
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
            iconSrc={svgs.reviveIslamicIntellectual}
            title="Revive Islamic Intellectual"
            description="Reignite curiosity and creativity rooted in Islamic values."
          />
          <ValueCard
            iconSrc={svgs.developingLeaders}
            title="Developing Leaders"
            description="Identify and support emerging Muslim leaders."
          />
          <ValueCard
            iconSrc={svgs.elevateMuslimStatus}
            title="Elevate Muslim Status"
            description="Promote dignity, self-worth, and cultural confidence."
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
        maxWidth: { xs: "200px", sm: "300px", md: "360px" },
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
          color: "#fff",
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
