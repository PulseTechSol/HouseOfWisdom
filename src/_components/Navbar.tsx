"use client";

import { sectionPaddingX, localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import { svgs } from "@/_assets/svgs";
import Image from "next/image";
import NavTopBar from "./NavTopBar";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "" },
  { label: "Our People", href: "" },
  { label: "Events", href: "" },
  { label: "Blog", href: "" },
  { label: "Contact", href: "" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <NavTopBar />
      <Box sx={{ backgroundColor: "#006B4F" }}>
        <Box
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
            <Image src={svgs.hamburger} alt="hamburger" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
