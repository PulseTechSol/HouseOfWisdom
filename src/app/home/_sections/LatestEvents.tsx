"use client";
import { Box, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import CustomButton from "@/_components/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LatestEvents() {
  const router = useRouter();
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        backgroundImage: `url(./bgLatestEvents.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* header there  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { sm: "center" },
            gap: { xs: "20px", md: "40px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ maxWidth: "510px" }}>
            <Typography
              sx={{
                fontSize: localFontSize.h2,
                fontWeight: 600,
                color: "#fff",
                paddingBottom: { xs: "10px", md: "20px" },
              }}
            >
              Latest Events
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.p2,
                color: "#FFFFFF80",
              }}
            >
              Stay informed about our latest initiatives, events, and community
              developments
            </Typography>
          </Box>
          <Box>
            <CustomButton
              text="get involved"
              lightmode={true}
              onClick={() => router.push("events")}
            />
          </Box>
        </Box>
        {/* the card box  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "40px", md: "60px", lg: "30px" },
            flexWrap: { xs: "wrap", lg: "nowrap" },
            marginTop: { xs: "40px", md: "80px" },
          }}
        >
          <EventCard
            buttonText="Featured Event"
            iconSrc={pngs.latestEvents1}
            date="November 28, 2025 at 6:00 PM"
            title="official launch at central hall"
            description="Join leading Muslim professionals for a day of strategic discussions on community leadership and policy influence."
            // learnMore={() =>
            //   router.push("events/policy-and-governance-workshop")
            // }
          />
          <EventCard
            buttonText="Community Growth"
            iconSrc={pngs.latestEvents2}
            date="February 28, 2026"
            title="New Member Welcome"
            description="We're excited to welcome 25 new professionals to our growing network this month."
            // learnMore={() =>
            //   router.push("events/policy-and-governance-workshop")
            // }
          />
        </Box>
      </Box>
    </Box>
  );
}

type Props = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
  date: string;
  learnMore?: () => void;
  buttonText: string;
};

export function EventCard({
  iconSrc,
  title,
  description,
  date,
  buttonText,
  learnMore = () => {},
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "center",
        gap: { xs: "12px", md: "30px" },
        maxWidth: { xs: "555px", lg: "555px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: { xl: "350px" },
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={iconSrc}
          alt={title}
        />
        <Button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            textTransform: "capitalize",
            color: hovered ? "#25D366" : "#fff",
            backgroundColor: hovered ? "transparent" : "#25D366",
            padding: "10px",
            borderRadius: "10px",
            fontSize: localFontSize.p1,
            position: "absolute",
            top: { xs: "12px", md: "20px", lg: "30px" },
            left: { xs: "12px", md: "20px", lg: "30px" },
            height: "46px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            border: { xs: "1px solid #25D366", md: "2px solid #25D366" },
            transition:
              "background-color .2s ease, color .2s ease, border .2s ease",
          }}
        >
          <Image
            src={hovered ? svgs.calander : svgs.calanderWhite}
            alt="calendar"
            width={18}
            height={18}
            style={{
              transition: "transform .3s ease, filter .2s ease",
            }}
          />
          {buttonText}
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image height={15} width={15} src={svgs.calander} alt="calendar" />
        <Typography
          sx={{
            fontSize: localFontSize.p2,
            color: "#FFFFFF80",
          }}
        >
          {date}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: localFontSize.h3,
          fontWeight: 600,
          color: "#fff",
          textAlign: "left",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
          textAlign: "left",
        }}
      >
        {description}
      </Typography>
      <CustomButton text="learn more" lightmode={true} onClick={learnMore} />
    </Box>
  );
}
