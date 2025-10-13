"use client";
import { Box, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

export default function UpcomingEvents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    row: 1,
    customPaging: () => (
      <Box
        sx={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "transparent",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
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
            color: "#fff",
            textAlign: "center",
            paddingBottom: { xs: "30px", md: "40px", lg: "80px" },
          }}
        >
          Upcoming Events
        </Typography>
        <Slider {...settings}>
          {/* the cards there  */}
          <EventCard
            link="/events/policy-and-governance-workshop"
            buttonText="Conference"
            heading="Policy & Governance Workshop"
            description="An interactive workshop focused on understanding UK policy-making processes and how Muslim professionals can effectively engage with government institutions."
            points={[
              { iconSrc: svgs.calander, text: "April 10, 2024" },
              { iconSrc: svgs.clock, text: "2:00 PM - 5:00 PM" },
              { iconSrc: svgs.location, text: "Westminster Hub, London" },
              {
                iconSrc: svgs.ourPeopleGreen,
                text: "50+ Expected Attendees",
              },
            ]}
          />
          <EventCard
            link="/events/policy-and-governance-workshop"
            buttonText="Networking"
            heading="Networking Dinner - Healthcare Professionals"
            description="An exclusive networking dinner for Muslim healthcare professionals to discuss challenges, opportunities, and collaborative initiatives in the healthcare sector."
            points={[
              { iconSrc: svgs.calander, text: "April 25, 2024" },
              { iconSrc: svgs.clock, text: "7:00 PM - 10:00 PM" },
              { iconSrc: svgs.location, text: "The Dorchester, London" },
              {
                iconSrc: svgs.ourPeopleGreen,
                text: "75+ Expected Attendees",
              },
            ]}
          />
          <EventCard
            link="/events/policy-and-governance-workshop"
            buttonText="Conference"
            heading="Policy & Governance Workshop"
            description="An interactive workshop focused on understanding UK policy-making processes and how Muslim professionals can effectively engage with government institutions."
            points={[
              { iconSrc: svgs.calander, text: "April 10, 2024" },
              { iconSrc: svgs.clock, text: "2:00 PM - 5:00 PM" },
              { iconSrc: svgs.location, text: "Westminster Hub, London" },
              {
                iconSrc: svgs.ourPeopleGreen,
                text: "50+ Expected Attendees",
              },
            ]}
          />
        </Slider>
      </Box>
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
  link: string;
};

export function EventCard({
  buttonText,
  heading,
  description,
  points,
  link,
}: EventCardProps) {
  const router = useRouter();
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        maxWidth: "555px",
        padding: { xs: "20px", md: "30px" },
        borderRadius: "20px",
        border: "2px solid #25D366",
        width: "-webkit-fill-availables",
        height: { xs: "389px", md: "435px", lg: "491px" },
        marginX: { xs: "5px", sm: "auto", md: "10px" },
      }}
    >
      <Button
        onClick={() => router.push(link)}
        sx={{
          textTransform: "capitalize",
          color: "#fff",
          backgroundColor: "#25D366",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {buttonText}
      </Button>

      <Typography
        sx={{
          fontSize: localFontSize.h4,
          color: "#fff",
          marginTop: { xs: "20px", lg: "30px" },
          marginBottom: "6px",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {heading}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p1,
          color: "#ffffff80",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
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
      <Typography sx={{ fontSize: localFontSize.p1, color: "#ffffff80" }}>
        {text}
      </Typography>
    </Box>
  );
}
