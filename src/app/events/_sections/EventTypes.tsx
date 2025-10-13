"use client";

import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function EventTypes() {
  return (
    <Box sx={{ bgcolor: "#1A1A1A" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Box sx={{ maxWidth: "950px", margin: "auto", textAlign: "center" }}>
          {/* heading there  */}
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#fff",
              marginBottom: { xs: "10px", md: "20px" },
            }}
          >
            Types Of Events
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p2,
              color: "#ffffff80",
            }}
          >
            Our Advisory Board comprises distinguished professionals from
            various sectors who provide strategic guidance and expertise to help
            shape our initiatives and expand our impact.
          </Typography>
        </Box>
        {/* the card box  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: { xs: "40px", md: "80px" },
          }}
        >
          <ValueCard
            iconSrc={svgs.eventsTypes1}
            title="Conferences"
            description="Large-scale events featuring keynote speakers, panel discussions, and networking opportunities."
          />
          <ValueCard
            iconSrc={svgs.eventsTypes2}
            title="Workshops"
            description="Interactive sessions focused on skill development and practical knowledge sharing."
          />
          <ValueCard
            iconSrc={svgs.eventsTypes3}
            title="Networking"
            description="Intimate gatherings designed to foster meaningful professional connections."
          />
        </Box>
      </Box>
    </Box>
  );
}

type ValueCardProps = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

export function ValueCard({ iconSrc, title, description }: ValueCardProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: { xs: "250px", sm: "300px", md: "360px" },
        borderRadius: "20px",
        height: "250px",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          marginBottom: { xs: "10px", md: "20px" },
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={iconSrc}
          alt={title}
        />
      </Box>

      <Typography
        sx={{
          fontSize: localFontSize.h4,
          color: "#25D366",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
