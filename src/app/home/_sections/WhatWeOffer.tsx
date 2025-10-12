"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import CustomButton from "@/_components/CustomButton";

export default function WhatWeOffer() {
  return (
    <Box
      sx={{
        bgcolor: "#E9E9E9",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "20px", md: "30px", xl: "80px" },
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              width: { xs: "100%", md: "50%" },
              "& > :not(:last-child)": {
                marginBottom: { xs: "12px", md: "30px" },
              },
            }}
          >
            {/*  , heading &  there  */}
            <Box sx={{ marginBottom: { xs: "20px", md: "40px" } }}>
              <Typography
                sx={{
                  fontSize: localFontSize.h2,
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                What We Offer
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
            {/* listed points there  */}
            <Box
              sx={{
                "& > :not(:last-child)": {
                  marginBottom: { xs: "10px", md: "20px" },
                },
              }}
            >
              <IconTextRow
                title="Networking Events:"
                describtion="High-level gatherings designed to connect professionals across industries."
              />
              <IconTextRow
                title="Mentorship:"
                describtion="Guidance from accomplished leaders to support your career and personal journey."
              />
              <IconTextRow
                title="Professional Growth:"
                describtion="Seminars, workshops, and resources tailored to your development."
              />
              <IconTextRow
                title="Community Impact:"
                describtion="Initiatives that bridge professional success with meaningful social change."
              />
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Image
              src={pngs.whatWeOffer}
              alt="Driven By Purpose"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

type IconTextRowProps = {
  title: string;
  describtion: string;
};

export function IconTextRow({ title, describtion }: IconTextRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "6px", md: "10px" },
      }}
    >
      <Box
        sx={{
          height: "10px",
          width: "10px",
          aspectRatio: "1/1",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          marginTop: "10px",
        }}
      ></Box>
      <Box>
        <Typography sx={{ fontSize: localFontSize.p1, color: "#000000" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: localFontSize.p1,
            color: "#00000080",
            marginTop: "5px",
          }}
        >
          {describtion}
        </Typography>
      </Box>
    </Box>
  );
}
