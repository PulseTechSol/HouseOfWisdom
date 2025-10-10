"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: "20px", md: "30px", xl: "80px" },
          margin: "auto",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mb: { xs: "20px", md: "40px" },
            }}
          >
            <Image
              src={svgs.whoWeAre}
              alt="Who We Are"
              width={30}
              height={30}
            />
            <Typography
              sx={{
                fontSize: localFontSize.p2,
                color: "#25D366",
              }}
            >
              Who We Are
            </Typography>
          </Box>

          {/* heading there  */}
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              sx={{
                fontSize: localFontSize.h2,
                fontWeight: 600,
                color: "#000",
              }}
            >
              Driven by Purpose
            </Typography>
            <Divider
              sx={{
                width: "80px",
                border: { xs: "2px solid #25D366", md: "4px solid #25D366" },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", md: "20px" },
            }}
          >
            <Typography sx={{ fontSize: localFontSize.p1, color: "#00000080" }}>
              At its heart, HOW is a platform for leadership development
              bringing together Muslim professionals and thinkers from across
              disciplines to generate bold ideas, influence public discourse,
              and build strategic capacity. We focus on engaging individuals
              across key sectors including law, politics, finance, business,
              medicine, academia, media, technology, and the creative
              industries. We are creating a space where emerging leaders are
              mentored, supported, and equipped with the skills, networks, and
              vision needed to drive meaningful change. Through HOW, we aim to
              foster a generation that leads not just in their professions, but
              in the public life of Britain.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Image
            src={pngs.drivenByPurpose}
            alt="Driven By Purpose"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
