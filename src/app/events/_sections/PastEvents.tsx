"use client";

import { Box, Typography, GlobalStyles } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PastEvents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ bgcolor: "#000" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* heading there  */}
        <Typography
          sx={{
            fontSize: localFontSize.h2,
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Past Events
        </Typography>
        {/* the card box  */}
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "center",
            // gap: "30px",
            // flexWrap: "wrap",
            marginTop: { xs: "40px", md: "80px" },
          }}
        >
          <GlobalStyles
            styles={{
              ".custom-dots li": {
                backgroundColor: "#fff",
              },
            }}
          />
          <Slider {...settings}>
            <ValueCard
              iconSrc={svgs.pastEvent1}
              title="Inaugural Networking Gala"
              date="December 2023"
              description="Our launch event that brought together over 200 Muslim professionals from across various sectors."
            />
            <ValueCard
              iconSrc={svgs.pastEvent2}
              title="Women in Leadership Panel"
              date="January 2024"
              description="Panel discussion featuring prominent Muslim women leaders discussing barriers and opportunities in professional advancement."
            />
            <ValueCard
              iconSrc={svgs.pastEvent3}
              title="Financial Services"
              date="February 2024"
              description="Strategic discussion on Islamic finance integration and Muslim professional advancement in financial services."
            />
            <ValueCard
              iconSrc={svgs.pastEvent1}
              title="Financial Services"
              date="February 2024"
              description="Strategic discussion on Islamic finance integration and Muslim professional advancement in financial services."
            />
            <ValueCard
              iconSrc={svgs.pastEvent2}
              title="Women in Leadership Panel"
              date="January 2024"
              description="Panel discussion featuring prominent Muslim women leaders discussing barriers and opportunities in professional advancement."
            />
            <ValueCard
              iconSrc={svgs.pastEvent3}
              title="Financial Services"
              date="February 2024"
              description="Strategic discussion on Islamic finance integration and Muslim professional advancement in financial services."
            />
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

type ValueCardProps = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
  date: string;
};

export function ValueCard({
  iconSrc,
  title,
  description,
  date,
}: ValueCardProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: { xs: "320px", sm: "300px", md: "360px" },
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        // height: "345px",
        marginX: { xs: "auto", lg: "10px" },
        height: { xs: "264px", sm: "270px", md: "312px", lg: "336px" },
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
          color: "#000",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: localFontSize.p3,
          color: "#000",
          marginY: { xs: "6px", md: "10px" },
        }}
      >
        {date}
      </Typography>
      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#00000080",
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
    </Box>
  );
}
