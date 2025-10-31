import { svgs } from "@/_assets/svgs";
import { sectionPaddingX } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function NavTopBar() {
  return (
    <Box sx={{ backgroundColor: "#25D366" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
          px: sectionPaddingX,
          py: "15px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          textWrap: "nowrap",
        }}
      >
        <Box sx={{ width: "30px" }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={svgs.logo}
            alt="logo"
          />
        </Box>
        {/* IMPORTANT: lock the row height, center items, and hide overflow */}
        <Marquee
          gradient={false}
          pauseOnHover
          style={{
            height: 28,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              Website launching on 24th Nov 2025 — The House of Wisdom (HOW) is
              a new initiative by British Muslims, inspired by the Islamic
              Golden Age to build thought leadership and empower a new
              generation of confident, principled Muslim leaders.{" "}
            </Typography>
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
}
