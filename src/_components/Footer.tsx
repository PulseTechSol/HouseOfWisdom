"use client";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography, Link } from "@mui/material";
// Button, TextField,⬆️
import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { svgs } from "@/_assets/svgs";

const footerData = [
  {
    imgSrc: svgs.phone,
    text: "0522518384 (UAE)",
  },
  {
    imgSrc: svgs.phone,
    text: "+447871777747 (INTERNATIONAL)",
  },
  {
    imgSrc: svgs.email,
    text: "info@savilerowfurniture.com",
  },
];

const navLinks = [
  { text: "home", route: "/" },
  { text: "about us", route: "/about-us" },
  { text: "our service", route: "/our-services" },
  { text: "our projects", route: "./our-projects" },
  { text: "Contact us", route: "./contact-us" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const checkActive = (path: string) => pathname === path;

  return (
    <Box
      sx={{
        background: "#1A1A1A",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          borderBottom: "2px solid rgba(255,255,255,0.2)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "start" },
            gap: { xs: "30px", md: "20px" },
          }}
        >
          <Box
            sx={{
              maxWidth: "405px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "50px",
              }}
            >
              <Image
                src={svgs.logo}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: localFontSize.p2,
                color: "rgba(255,255,255,0.5)",
                paddingTop: { xs: "10px", md: "20px" },
                paddingBottom: { xs: "20px", md: "40px" },
              }}
            >
              Based in the heart of Dubai, we specialize in offering exquisitely
              furnished apartments, combining world-class interiors with turnkey
              convenience.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                "& *": {
                  height: "25px",
                  width: "25px",
                },
              }}
            >
              <Image src={svgs.facebook} alt="facebook" />
              <Image src={svgs.instagram} alt="instagram" />
              <Image src={svgs.linkedin} alt="linkedin" />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: localFontSize.h4,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: { xs: "20px", md: "40px" },
              }}
            >
              Pages
            </Typography>

            {navLinks.map((link, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    rowGap: { xs: "20px", md: "0px" },
                    columnGap: "40px",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    onClick={() => router.push(link.route)}
                    sx={{
                      fontSize: localFontSize.p2,
                      fontWeight: "400",
                      marginBottom: { xs: "10px", md: "20px" },
                      cursor: "pointer",
                      textTransform: "capitalize",
                      color: checkActive(link.route) ? "#FFFFFF" : "#FFFFFF80",
                    }}
                  >
                    {link.text}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            data-aos-duration="500"
            data-aos="fade-left"
            sx={{
              maxWidth: "370px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                fontWeight: "600",
                textTransform: "uppercase",
                color: "rgba(255,255,255,1)",
                marginBottom: "30px",
                textAlign: { xs: "center", md: "initial" },
              }}
            >
              Contact Us
            </Typography>
            {footerData.map((data, i) => (
              <Box
                key={i}
                sx={{
                  maxWidth: { xs: "250px", md: "290px" },
                  width: "100%",
                  margin: { xs: "20px auto", md: "20px 0px" },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "15px", md: "30px" },
                  //   margin: "20px 0px",
                  justifyContent: { xs: "center", md: "initial" },
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                <Image
                  src={data.imgSrc}
                  alt={data.text}
                  height={24}
                  width={24}
                />
                <Typography
                  sx={{
                    fontSize: localFontSize.p2,
                    fontWeight: "400",
                    color: "rgba(255,255,255,0.5)",
                    textWrap: { xs: "nowrap", md: "wrap" },
                  }}
                >
                  {data.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            maxWidth: "800px",
            width: "100%",
            margin: "auto",
            padding: "30px 20px",
            fontSize: localFontSize.p2,
            fontWeight: "400",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          Copyright &copy; 2025 Savile Row Furniture. All Rights Reserved.{" "}
          <Link
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              textDecoration: "none",
              transition: "all 0.4s ease-in-out",
              color: "#ffffff",
              "&:hover": {
                color: "rgba(255,255,255,0.5)",
              },
            }}
            href="https://www.qashnova.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By Qashnova
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
