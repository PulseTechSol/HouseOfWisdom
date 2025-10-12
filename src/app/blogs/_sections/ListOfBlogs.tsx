"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import Image from "next/image";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ListOfBlogs() {
  const [activeCategory, setActiveCategory] = React.useState("All Posts");

  const categories = [
    "All Posts",
    "Leadership",
    "Finance",
    "Professional Development",
    "Technology",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
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
  };

  return (
    <Box sx={{ bgcolor: "#fff" }}>
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
          List Of Blogs
        </Typography>

        {/* Filter Tabs */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", md: "20px", lg: "30px" },
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: { xs: "350px", sm: "500px", md: "900px" },
            margin: "auto",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              sx={{
                backgroundColor:
                  activeCategory === category ? "#25D366" : "transparent",
                color: activeCategory === category ? "#fff" : "#6B6B6B",
                height: "46px",
                borderRadius: "10px",
                padding: { xs: "10px", sm: "10px 20px" },
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                textWrap: "nowrap",
                "&:hover": {
                  backgroundColor:
                    activeCategory === category ? "#20b85a" : "#f5f5f5",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
        {/* slider there  */}
        <Box sx={{ paddingTop: { xs: "30px", md: "40px", lg: "80px" } }}>
          {/* card therer  */}
          <Slider {...settings}>
            <BlogListCard />
            <BlogListCard />
            <BlogListCard />
            <BlogListCard />
            <BlogListCard />
            <BlogListCard />
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export function BlogListCard() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "555px",
          padding: "20px",
          borderRadius: "20px",
          border: "2px solid #25D366",
          "& > :not(:last-child)": {
            marginBottom: { xs: "12px", sm: "20px", md: "30px" },
          },
          marginY: "30px",
          marginX: { xs: "10px", sm: "auto", md: "15px" },
        }}
      >
        {/* image  */}
        <Box
          sx={{
            width: "100%",
            height: "250px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={pngs.blogItem1}
            alt="adviser1"
          />
        </Box>
        {/* the button and the reminder time   */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              height: "46px",
              borderRadius: "10px",
              padding: { xs: "10px", sm: "10px 20px" },
              textTransform: "none",
              fontSize: localFontSize.p1,
              fontWeight: 500,
              transition: "all 0.3s ease",
              textWrap: "nowrap",
              "&:hover": {
                backgroundColor: "#20b85a",
              },
            }}
          >
            Workplace Culture
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image height={25} width={25} src={svgs.clock} alt="clock" />
            <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
              8 min read
            </Typography>
          </Box>
        </Box>
        {/* teh textuals box  */}
        <Box>
          <Typography
            sx={{
              fontSize: localFontSize.h4,
              color: "#000000",
              paddingBottom: { xs: "5px", md: "10px" },
            }}
          >
            Building Bridges: Interfaith Dialogue in Professional Settings
          </Typography>
          <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
            How Muslim professionals can foster understanding and collaboration
            across religious and cultural divides in the workplace.
          </Typography>
        </Box>
        {/* username and date  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "20px", md: "30px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image height={25} width={25} src={svgs.profile} alt="profile" />
            <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
              Tariq Ahmed
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image height={25} width={25} src={svgs.calander} alt="calander" />
            <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
              February 25, 2024
            </Typography>
          </Box>
        </Box>
        {/* the lable buttons there  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#E9E9E9",
              color: "#00000080",
              borderRadius: "10px",
              padding: { xs: "10px", sm: "5px 10px" },
              textTransform: "none",
              fontSize: localFontSize.p2,
              transition: "all 0.3s ease",
              textWrap: "nowrap",
              "&:hover": {
                backgroundColor: "#20b85a",
              },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image height={23} width={23} src={svgs.lable} alt="lable" />
            Interfaith
          </Button>
          <Button
            sx={{
              backgroundColor: "#E9E9E9",
              color: "#00000080",
              borderRadius: "10px",
              padding: { xs: "10px", sm: "5px 10px" },
              textTransform: "none",
              fontSize: localFontSize.p2,
              transition: "all 0.3s ease",
              textWrap: "nowrap",
              "&:hover": {
                backgroundColor: "#20b85a",
              },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image height={23} width={23} src={svgs.lable} alt="lable" />
            Professional Development
          </Button>
        </Box>
      </Box>
    </>
  );
}
