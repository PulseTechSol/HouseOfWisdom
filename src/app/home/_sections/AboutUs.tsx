"use client";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { pngs } from "@/_assets/pngs";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Grid sx={{ maxWidth: { xl: "1600px" }, margin: "auto" }} container>
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
          <Box sx={{ maxWidth: { xl: "80%" } }}>
            <Box sx={{ marginBottom: { xs: "20px", md: "40px" } }}>
              <Typography
                sx={{
                  fontSize: localFontSize.h2,
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                About Us
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  border: {
                    xs: "2px solid #25D366",
                    md: "4px solid #25D366",
                  },
                }}
              />
            </Box>
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
        </Grid>
        <Grid
          //  size={6.4}
          size={{ xs: 12, md: 5, lg: 6, xl: 6.7 }}
          sx={
            {
              // maxHeight: { xl: "770px" },
            }
          }
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={pngs.AboutUs}
            alt="About Us"
          />
        </Grid>
      </Grid>
    </>
  );
}
