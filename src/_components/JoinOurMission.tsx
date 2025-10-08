"use client";

import { Box, Typography, Divider, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function JoinOurMission() {
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
        <Typography
          sx={{
            fontSize: localFontSize.h2,
            fontWeight: 600,
            color: "#000",
            textAlign: "center",
          }}
        >
          Driven by Purpose
        </Typography>
        {/* the card box  */}
        <Box sx={{ marginTop: { xs: "40px", md: "80px" } }}></Box>
      </Box>
    </Box>
  );
}
