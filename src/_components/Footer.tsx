"use client";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography, Link } from "@mui/material";
// Button, TextField,⬆️
import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { svgs } from "@/_assets/svgs";

const footerData = [
  // {
  //   imgSrc: svgs.phone,
  //   text: "+44 (0) 20 7123 4567",
  //   description: "Monday - Friday, 9AM - 5PM",
  // },
  {
    imgSrc: svgs.email,
    text: "info@houseofwisdom.org.uk",
    description: "General Inquiry",
  },
];

const navLinks = [
  { text: "Home", route: "/" },
  { text: "About", route: "/about-us" },
  { text: "Our People", route: "/our-people" },
  { text: "Events", route: "/events" },
  { text: "Blogs", route: "/blogs" },
  { text: "Contact", route: "/contact-us" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const checkActive = (path: string) => pathname === path;

  return (
    <Box
      sx={{
        background: "#000",
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
            gap: "40px",
            rowGap: { sm: "60px !important" },
            flexWrap: "wrap",
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              maxWidth: "360px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "22px",
                margin: { xs: "auto", md: "0" },
                height: "35px",
              }}
            >
              <Image
                src={svgs.logo}
                alt="logo"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: localFontSize.p2,
                color: "rgba(255,255,255,0.5)",
                paddingTop: { xs: "15px", md: "25px" },
                paddingBottom: { xs: "20px", md: "40px" },
                display: { xs: "none", md: "block" },
              }}
            >
              Bringing professional Muslims together to network, shape policies,
              and create influence for British Muslims in public life.
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
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
          <Box data-aos="zoom-in" data-aos-duration="500">
            <Typography
              sx={{
                fontSize: localFontSize.h4,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: { xs: "20px", md: "40px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Pages
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                flexWrap: { xs: "wrap", md: "nowrap" },
                rowGap: { xs: "20px", md: "20px" },
                columnGap: "40px",
                justifyContent: "center",
                maxWidth: "250px",
              }}
            >
              {navLinks.map((link, index) => {
                return (
                  <Typography
                    key={index}
                    onClick={() => router.push(link.route)}
                    sx={{
                      fontSize: localFontSize.p2,
                      fontWeight: "400",
                      cursor: "pointer",
                      textTransform: "capitalize",
                      color: checkActive(link.route) ? "#FFFFFF" : "#FFFFFF80",
                    }}
                  >
                    {link.text}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{ maxWidth: { md: "160px" }, width: "100%" }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h4,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: { xs: "20px", md: "40px" },
                textWrap: "nowrap",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              USEFUL LINKS
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                flexWrap: { xs: "wrap", md: "nowrap" },
                rowGap: { xs: "20px", md: "20px" },
                columnGap: "40px",
                justifyContent: "center",
                margin: { xs: "auto", md: "0" },
              }}
            >
              <Typography
                sx={{
                  fontSize: localFontSize.p2,
                  fontWeight: "400",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  color: "#FFFFFF80",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  fontSize: localFontSize.p2,
                  fontWeight: "400",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  color: "#FFFFFF80",
                }}
              >
                Cookies
              </Typography>
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: "306px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h4,
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: { xs: "30px", md: "40px" },
                textWrap: "nowrap",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Contact
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
                  gap: { xs: "12px", md: "20px" },
                  justifyContent: { xs: "flex-start", md: "initial" },
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                <Image
                  src={data.imgSrc}
                  alt={data.text}
                  height={40}
                  width={40}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: localFontSize.p2,
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                      textWrap: { xs: "nowrap", md: "wrap" },
                    }}
                  >
                    {data.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: "400",
                      color: "rgba(255,255,255,0.5)",
                      textWrap: { xs: "nowrap", md: "wrap" },
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            maxWidth: "800px",
            // width: "100%",
            margin: "auto",
            padding: "30px 20px",
            fontSize: localFontSize.p2,
            fontWeight: "400",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
        >
          Copyright © 2025 | House of Wisdom. All Rights Reserved.{" "}
          <Link
            sx={{
              fontSize: "inherit",
              fontWeight: "inherit",
              textDecoration: "none",
              transition: "all 0.4s ease-in-out",
              color: "#25D366",
              "&:hover": {
                color: "rgba(255, 255, 255, 1)",
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
