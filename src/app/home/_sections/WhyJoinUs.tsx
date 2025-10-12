"use client";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { pngs } from "@/_assets/pngs";
import Image from "next/image";

export default function WhyJoinUs() {
  return (
    <>
      <Grid
        sx={{
          flexDirection: { xs: "column-reverse", md: "unset" },
          maxWidth: { xl: "1600px" },
          margin: "auto",
        }}
        container
      >
        <Grid
          sx={{
            padding: sectionPadding,
            paddingRight: {
              xs: "15px",
              sm: "20px",
              lg: "30px",
              xl: "60px !important",
            },
          }}
          size={{ xs: 12, md: 7, lg: 6, xl: 5.3 }}
        >
          <Box sx={{ maxWidth: { xl: "800px" } }}>
            <Box sx={{ marginBottom: { xs: "20px", md: "40px" } }}>
              <Typography
                sx={{
                  fontSize: localFontSize.h2,
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                Why Join Us
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  border: {
                    xs: "2px solid #000",
                    md: "4px solid #000",
                  },
                }}
              />
            </Box>
            <Typography sx={{ fontSize: localFontSize.p1, color: "#00000080" }}>
              {` Joining our network opens doors to meaningful connections,
              mentorship opportunities, and professional development. Whether
              you’re an established leader or an emerging professional, you’ll
              find resources and relationships that help you grow while giving
              back to the community.`}
            </Typography>
          </Box>
        </Grid>
        <Grid
          //  size={6.4}
          size={{ xs: 12, md: 5, lg: 6, xl: 6.7 }}
          sx={{
            maxHeight: { xl: "600px" },
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={pngs.whyJoinUs}
            alt="About Us"
          />
        </Grid>
      </Grid>
    </>
  );
}
