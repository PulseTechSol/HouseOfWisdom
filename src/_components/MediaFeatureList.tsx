"use client";

import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";

export default function MediaFeatureList() {
  const mediaOnLeft = true;

  return (
    <Box sx={{ bgcolor: "#1A1A1A" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
          display: "flex",
          flexDirection: {
            xs: mediaOnLeft ? "column-reverse" : "column",
            md: mediaOnLeft ? "row" : "row-reverse",
          },
          alignItems: "center",
          gap: { xs: "20px", md: "30px", xl: "80px" },
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Image
            src={pngs.ourValues}
            alt="Driven By Purpose"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-duration="500"
          sx={{ width: { xs: "100%", md: "50%" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mb: { xs: "16px", md: "20px" },
            }}
          >
            <Image src={svgs.ourValues} alt="Icon" width={24} height={24} />
            <Typography sx={{ fontSize: localFontSize.p2, color: "#25D366" }}>
              Our Values
            </Typography>
          </Box>
          {/* heading there  */}
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              sx={{
                fontSize: localFontSize.h2,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Principles We Live By
            </Typography>
            <Divider
              sx={{
                width: "80px",
                border: "2px solid #25D366",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", md: "14px" },
            }}
          >
            {[
              {
                title: "Build a Thought Leadership Platform:",
                text: "Establish HOW as a hub for thought leadership, critical thinking, and cultural dialogue.",
              },
              {
                title: "Develop Future Muslim Leaders:",
                text: "Create leadership programs, mentorship schemes, and youth-focused initiatives.",
              },
              {
                title: "Connect and Mobilise Muslim Professionals:",
                text: "Build a national network of Muslim leaders across all sectors (law, media, tech, business, academia, etc.).",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{ display: "flex", gap: { xs: "5px", md: "10px" } }}
              >
                <Box
                  sx={{
                    mt: { xs: "7px", md: "9px" },
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    bgcolor: "#25D366",
                    flex: "0 0 auto",
                  }}
                />
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: localFontSize.p1,
                      color: "#fff",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    sx={{ fontSize: localFontSize.p1, color: "#FFFFFF80" }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
