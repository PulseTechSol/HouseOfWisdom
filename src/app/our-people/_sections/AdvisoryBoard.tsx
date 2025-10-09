"use client";

import { Box, Typography, Divider, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";
import { pngs } from "@/_assets/pngs";

export default function UnitingForImpact() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
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
            marginBottom: "20px",
            width: "fit-content",
            marginX: "auto",
            maxWidth: "880px",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              textAlign: "center",
              width: "fit-content",
              marginX: "auto",
            }}
          >
            Driven by Purpose
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#00000080",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            HOW is a platform designed to ignite revival by helping British
            Muslims reclaim the spirit of curiosity, excellence, leadership, and
            service that once defined Muslim culture. Our goal is to inspire
            groundbreaking contributions to humanity once again.
          </Typography>
        </Box>
        {/* the card box  */}
        <Grid
          sx={{ marginTop: { xs: "40px", md: "80px" } }}
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser1}
              title="Fatima Al-Zahra"
              description="Senior Partner, International Law Firm"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser2}
              title="Dr. Yusuf Mohammad"
              description="Consultant Surgeon & Medical Director"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser3}
              title="Ayesha Patel"
              description="Chief Technology Officer, FinTech Startup"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

type CardProps = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

export function Card({ iconSrc, title, description }: CardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "flex-start",
        textAlign: "center",
        gap: { xs: "5px", md: "10px" },
        backgroundColor: "#006B4F",
        padding: { xs: "20px", md: "30px", lg: "40px" },
        borderRadius: { xs: "20px", sm: "40px" },
        height: "-webkit-fill-available",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          marginBottom: { xs: "5px", md: "10px" },
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
          fontSize: localFontSize.h4,
          color: "#FFFFFF",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
