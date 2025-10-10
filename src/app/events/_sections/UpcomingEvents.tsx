"use client";
import { Box, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function UpcomingEvents() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: localFontSize.h2,
            fontWeight: 600,
            color: "#000",
            textAlign: "center",
            paddingBottom: { xs: "30px", md: "40px", lg: "80px" },
          }}
        >
          Join Our Mission
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "20px", md: "30px", xl: "80px" },
            justifyContent: "center",
          }}
        >
          {/* the cards there  */}
          <EventCard
            buttonText="Conference"
            heading="Driven by Purpose"
            description="Our flagship annual event bringing together leading Muslim professionals for strategic discussions on community leadership, policy influence, and professional development."
            points={[
              { iconSrc: svgs.calander, text: "October 15, 2025" },
              { iconSrc: svgs.location, text: "London, United Kingdom" },
              { iconSrc: svgs.clock, text: "10:00 AM – 4:00 PM" },
              { iconSrc: svgs.calander, text: "Limited seats" },
            ]}
          />
          <EventCard
            buttonText="Conference"
            heading="Driven by Purpose"
            description="Our flagship annual event bringing together leading Muslim professionals for strategic discussions on community leadership, policy influence, and professional development."
            points={[
              { iconSrc: svgs.calander, text: "October 15, 2025" },
              { iconSrc: svgs.location, text: "London, United Kingdom" },
              { iconSrc: svgs.clock, text: "10:00 AM – 4:00 PM" },
              { iconSrc: svgs.calander, text: "Limited seats" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}

type IconTextRowProps = {
  iconSrc: string | StaticImageData;
  text: string;
};

export function IconTextRow({ iconSrc, text }: IconTextRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "10px", md: "20px" },
        alignItems: "center",
      }}
    >
      <Image src={iconSrc} alt="" width={25} height={25} />
      <Typography sx={{ fontSize: localFontSize.p1, color: "#00000080" }}>
        {text}
      </Typography>
    </Box>
  );
}

type EventPoint = {
  iconSrc: string | StaticImageData;
  text: string;
};

type EventCardProps = {
  buttonText: string;
  heading: string;
  description: string;
  points: EventPoint[];
};

export function EventCard({
  buttonText,
  heading,
  description,
  points,
}: EventCardProps) {
  return (
    <Box
      sx={{
        maxWidth: "555px",
        padding: { xs: "20px", md: "30px" },
        borderRadius: "20px",
        border: "2px solid #25D366",
        width: "-webkit-fill-availables",
      }}
    >
      <Button
        sx={{
          textTransform: "capitalize",
          color: "#fff",
          backgroundColor: "#25D366",
          padding: "10px",
          borderRadius: "10px",
          "&:hover": { backgroundColor: "#015C46" },
        }}
      >
        {buttonText}
      </Button>

      <Typography
        sx={{
          fontSize: localFontSize.h4,
          color: "#000",
          marginTop: { xs: "20px", lg: "30px" },
          marginBottom: "6px",
        }}
      >
        {heading}
      </Typography>

      <Typography sx={{ fontSize: localFontSize.p1, color: "#00000080" }}>
        {description}
      </Typography>

      <Box
        sx={{
          "& > :not(:last-child)": { marginBottom: "5px" },
          marginTop: { xs: "10px", lg: "20px" },
        }}
      >
        {points.map((p, i) => (
          <IconTextRow key={i} iconSrc={p.iconSrc} text={p.text} />
        ))}
      </Box>
    </Box>
  );
}
