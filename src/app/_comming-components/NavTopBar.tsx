import { sectionPaddingX } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

export default function NavTopBar() {
  return (
    <Box sx={{ backgroundColor: "#1A1A1A" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
          px: sectionPaddingX,
          py: "10px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          textWrap: "nowrap",
        }}
      >
        <Typography sx={{ fontSize: 14, color: "#fff", lineHeight: 1 }}>
          Next Event:
        </Typography>

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
              sx={{ fontSize: 14, color: "#FFFFFF80", lineHeight: 1 }}
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
