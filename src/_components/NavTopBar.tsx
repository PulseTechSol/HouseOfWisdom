import { sectionPaddingX } from "@/utils/themes";
import { Box, Typography, Divider } from "@mui/material";
import { svgs } from "@/_assets/svgs";
import Image, { StaticImageData } from "next/image";

export default function NavTopBar() {
  return (
    <Box
      sx={{ backgroundColor: "#1A1A1A", display: { xs: "none", md: "block" } }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
          px: sectionPaddingX,
          py: "10px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Typography sx={{ fontSize: "14px", color: "#fff" }}>
            Next Event:
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#FFFFFF80" }}>
            Networking Dinner - Healthcare Professionals
          </Typography>
        </Box>
        {/* sub-section */}
        <TopBarInfoItem icon={svgs.calander} text="April 25, 2024" />
        <TopBarInfoItem icon={svgs.clock} text="7:00 PM - 10:00 PM" />
        <TopBarInfoItem icon={svgs.location} text="The Dorchester, London" />
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
    <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: "#fff", borderRightWidth: 2 }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box sx={{ width: 25, height: 25 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={icon}
            alt="icon"
          />
        </Box>

        <Typography sx={{ fontSize: "14px", color: "#FFFFFF80" }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
