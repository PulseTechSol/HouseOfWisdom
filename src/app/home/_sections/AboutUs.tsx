"use client";
import React from "react";
import { localFontSize, sectionPaddingY } from "@/utils/themes";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { pngs } from "@/_assets/pngs";
import Image from "next/image";
import CustomButton from "@/_components/CustomButton";

export default function AboutUs() {
  return (
    <>
      <Grid sx={{ maxWidth: { xl: "1600px" }, margin: "auto" }} container>
        <Grid
          sx={{
            paddingY: sectionPaddingY,
            paddingLeft: {
              xs: "20px",
              sm: "60px",
              md: "80px",
            },
            paddingRight: {
              xs: "20px",
              lg: "30px",
              xl: "60px !important",
            },
            backgroundColor: "#1A1A1A",
          }}
          size={{ xs: 12, md: 7, lg: 6, xl: 5.3 }}
        >
          <Box data-aos="fade-right" data-aos-duration="500">
            <Box sx={{ marginBottom: { xs: "20px", md: "40px" } }}>
              <Typography
                sx={{
                  fontSize: localFontSize.h2,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                About Us
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  border: "2px solid #25D366",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                color: "#FFFFFF80",
                marginBottom: { xs: "20px", md: "40px" },
              }}
            >
              The House of Wisdom (HOW) is a bold new initiative launched by a
              group of British Muslims, led by Patron Hammad Mustafa Al-Madani
              Al-Qadri. Inspired by the intellectual legacy of the Islamic
              Golden Age, HOW is rooted in a powerful vision: to create a
              culture of thought leadership, curiosity, and principled
              excellence within the British Muslim community. In the face of
              growing social, political, and economic challenges, we believe the
              most urgent task before us is to cultivate a new generation of
              confident, capable Muslim leaders who can shape the future with
              integrity and purpose.
            </Typography>
            <CustomButton text="learn more" lightmode={true} />
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
