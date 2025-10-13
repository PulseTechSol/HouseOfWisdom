"use client";
import { sectionPaddingX, localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import { svgs } from "@/_assets/svgs";
import Image from "next/image";
import NavTopBar from "./NavTopBar";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const toggleDrawer = (open: boolean) => {
    setMenu(open);
  };
  function sidebar() {
    setMenu((p) => !p);
    console.log(menu);
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Our People", href: "/our-people" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact-us" },
  ];
  const menuNavLinks = [
    {
      src: svgs.homeGreen,
      darkLogo: svgs.homeWhite,
      text: "Home",
      route: "/",
    },
    {
      src: svgs.aboutGreen,
      darkLogo: svgs.aboutWhite,
      text: "About",
      route: "/about-us",
    },
    {
      src: svgs.ourPeopleGreen,
      darkLogo: svgs.ourPropleWhite,
      text: "Our People",
      route: "/our-people",
    },
    {
      src: svgs.eventsGreen,
      darkLogo: svgs.eventsWhite,
      text: "Events",
      route: "/events",
    },
    {
      src: svgs.blogsGreen,
      darkLogo: svgs.blogsWhite,
      text: "Blogs",
      route: "/blogs",
    },
    {
      src: svgs.contactGreen,
      darkLogo: svgs.contactWhite,
      text: "Contact",
      route: "/contact-us",
    },
  ];

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <NavTopBar />
      </Box>
      <Box sx={{ backgroundColor: "#25D366" }}>
        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: 1440,
            height: 80,
            margin: "auto",
            px: sectionPaddingX,
            py: "10px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Image src={svgs.logo} alt="logo" width={50} height={50} />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "30px",
              alignItems: "center",
            }}
          >
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;

              return (
                <Typography
                  key={href}
                  onClick={() => router.push(href)}
                  sx={{
                    fontSize: localFontSize.p2,
                    color: active ? "#fff" : "#FFFFFF80",
                    borderBottom: active
                      ? "1px solid #fff"
                      : "1px solid transparent",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": { color: "#fff" },
                    lineHeight: "28px",
                  }}
                >
                  {label}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: { xs: "30px", sm: "40px" },
            }}
          >
            <Image onClick={sidebar} src={svgs.hamburger} alt="hamburger" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <NavTopBar />
      </Box>

      <Box
        onClick={sidebar}
        sx={{
          // bgcolor:""
          display: menu ? "block" : "none",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "1000",
        }}
      ></Box>
      <Box
        sx={{
          height: "100vh",
          maxWidth: { xs: "100vw", sm: "50vw" },
          position: "fixed",
          top: "0px",
          left: "0px",
          transition: "all 0.4s ease-in-out",
          transform: menu ? "translateX(0)" : "translateX(200%)",
          zIndex: "1000",
          backgroundColor: "#FFFFFF",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            margin: "40px 20px 70px 30px",
            textAlign: "left",
          }}
        >
          <Image
            onClick={sidebar}
            src={svgs.crossGreen}
            alt="kashanimgclose"
            height={20}
            width={20}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {menuNavLinks.map((link, i) => (
            <Box
              onClick={() => {
                toggleDrawer(false);
                router.push(link.route);
              }}
              sx={{
                width: "-webkit-fill-available !important",
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                gap: "30px",
                backgroundColor:
                  pathname ===
                  (link.route.startsWith("./")
                    ? link.route.substring(1)
                    : link.route)
                    ? "#25D366"
                    : "",
                padding: "25px 20px",
                cursor: "pointer",
              }}
              key={i}
            >
              <Image
                style={{ height: "30px", width: "30px", objectFit: "contain" }}
                src={
                  pathname ===
                  (link.route.startsWith("./")
                    ? `/${link.route.substring(2)}`
                    : link.route)
                    ? link.darkLogo
                    : link.src
                }
                alt="location"
              />
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? "#fff"
                      : "#25D366",
                  fontSize: "20px",
                }}
              >
                {link.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
