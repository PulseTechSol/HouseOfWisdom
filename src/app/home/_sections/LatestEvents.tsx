"use client";
import { Box, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import CustomButton from "@/_components/CustomButton";

export default function LatestEvents() {
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
            <CustomButton text="get involved" lightmode={true} />
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
            iconSrc={pngs.latestEvents1}
            date="October 15, 2025"
            title="official launch at central hall"
            description="Join leading Muslim professionals for a day of strategic discussions on community leadership and policy influence."
          />
          <EventCard
            iconSrc={pngs.latestEvents2}
            date="February 28, 2026"
            title="New Member Welcome"
            description="We're excited to welcome 25 new professionals to our growing network this month."
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
};

export function EventCard({ iconSrc, title, description, date }: Props) {
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
      }}
    >
      <Box
        sx={{
          maxHeight: { xl: "350px" },
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={iconSrc}
          alt={title}
        />
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
      <Button
        sx={{
          textTransform: "capitalize",
          color: "#fff",
          borderRadius: "10px",
          padding: "15px 30px",
          fontSize: localFontSize.p2,
          backgroundColor: "#25D366",
          height: { xs: "45px", md: "56px" },
          textWrap: "nowrap",
          // the flex there
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        learn more
        <hr style={{ border: "1px solid #fff", width: "30px" }} />
      </Button>
    </Box>
  );
}
