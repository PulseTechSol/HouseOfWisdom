import { sectionPaddingX } from "@/utils/themes";
import { Box, Typography, Divider } from "@mui/material";
import { svgs } from "@/_assets/svgs";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

export default function NavTopBar() {
  return (
    <Box sx={{ backgroundColor: "#1A1A1A", px: sectionPaddingX }}>
      <Box
        sx={{
          maxWidth: "1600px",
          margin: "auto",

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
            height: 28, // 24–28 works well for 20–25px icons
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
              Networking Dinner - Healthcare Professionals
            </Typography>

            <TopBarInfoItem icon={svgs.calander} text="April 25, 2024" />
            <TopBarInfoItem icon={svgs.clock} text="7:00 PM - 10:00 PM" />
            <TopBarInfoItem
              icon={svgs.location}
              text="The Dorchester, London"
            />
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
}

function TopBarInfoItem({
  icon,
  text,
}: {
  icon: StaticImageData | string;
  text: string;
}) {
  return (
    <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
      {/* fixed-height divider, not flexItem */}
      <Divider
        orientation="vertical"
        sx={{ borderColor: "#fff", borderRightWidth: 2, height: 16 }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "8px", md: "12px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "15px", md: 20 },
            height: { xs: "15px", md: 20 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={icon}
            alt="icon"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography sx={{ fontSize: 14, color: "#FFFFFF80", lineHeight: 1 }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
