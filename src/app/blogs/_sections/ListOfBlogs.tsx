"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import Image, { StaticImageData } from "next/image";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

export default function ListOfBlogs() {
  const [activeCategory, setActiveCategory] = React.useState("All Posts");
  const router = useRouter();

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
          slidesToShow: 1,
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

  const blogData = [
    {
      image: pngs.blogItem1,
      category: "Workplace Culture",
      readTime: "8 min read",
      title: "Building Bridges: Interfaith Dialogue in Professional Settings",
      description:
        "How Muslim professionals can foster understanding and collaboration across religious and cultural divides in the workplace.",
      authorIcon: svgs.profile,
      authorName: "Tariq Ahmed",
      dateIcon: svgs.calander,
      date: "February 25, 2024",
      labels: ["Interfaith", "Professional Development"],
    },
    {
      image: pngs.blogItem3,
      category: "Finance",
      readTime: "8 min read",
      title: "The Rise of Islamic Finance in the UK Market",
      description:
        "Examining the growth of Sharia-compliant financial products and the opportunities they present for Muslim professionals in finance.",
      authorIcon: svgs.profile,
      authorName: "Prof. Omar Ibrahim",
      dateIcon: svgs.calander,
      date: "February 15, 2024",
      labels: ["Islamic Finance", "Banking"],
    },
    {
      image: pngs.blogItem2,
      category: "Policy & Advocacy",
      readTime: "7 min read",
      title: "Policy Influence: A Practical Guide for Muslim Professionals",
      description:
        "A step-by-step approach to engaging with policy-making processes and creating meaningful change at local and national levels.",
      authorIcon: svgs.profile,
      authorName: "Sarah Khan",
      dateIcon: svgs.calander,
      date: "February 20, 2024",
      labels: ["Policy", "Government"],
    },
    {
      image: pngs.blogItem4,
      category: "Professional Development",
      readTime: "7 min read",
      title: "Networking Strategies for Muslim Professionals",
      description:
        "Effective approaches to building professional networks while maintaining Islamic values and principles.",
      authorIcon: svgs.profile,
      authorName: "Dr. Amina Hassan",
      dateIcon: svgs.calander,
      date: "February 10, 2024",
      labels: ["Networking", "Career"],
    },
    {
      image: pngs.blogItem1,
      category: "Workplace Culture",
      readTime: "8 min read",
      title: "Building Bridges: Interfaith Dialogue in Professional Settings",
      description:
        "How Muslim professionals can foster understanding and collaboration across religious and cultural divides in the workplace.",
      authorIcon: svgs.profile,
      authorName: "Tariq Ahmed",
      dateIcon: svgs.calander,
      date: "February 25, 2024",
      labels: ["Interfaith", "Professional Development"],
    },
    {
      image: pngs.blogItem3,
      category: "Finance",
      readTime: "8 min read",
      title: "The Rise of Islamic Finance in the UK Market",
      description:
        "Examining the growth of Sharia-compliant financial products and the opportunities they present for Muslim professionals in finance.",
      authorIcon: svgs.profile,
      authorName: "Prof. Omar Ibrahim",
      dateIcon: svgs.calander,
      date: "February 15, 2024",
      labels: ["Islamic Finance", "Banking"],
    },
    {
      image: pngs.blogItem2,
      category: "Policy & Advocacy",
      readTime: "7 min read",
      title: "Policy Influence: A Practical Guide for Muslim Professionals",
      description:
        "A step-by-step approach to engaging with policy-making processes and creating meaningful change at local and national levels.",
      authorIcon: svgs.profile,
      authorName: "Sarah Khan",
      dateIcon: svgs.calander,
      date: "February 20, 2024",
      labels: ["Policy", "Government"],
    },
    {
      image: pngs.blogItem4,
      category: "Professional Development",
      readTime: "7 min read",
      title: "Networking Strategies for Muslim Professionals",
      description:
        "Effective approaches to building professional networks while maintaining Islamic values and principles.",
      authorIcon: svgs.profile,
      authorName: "Dr. Amina Hassan",
      dateIcon: svgs.calander,
      date: "February 10, 2024",
      labels: ["Networking", "Career"],
    },
  ];

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
          <Slider {...settings}>
            {blogData.map((blog, index) => (
              <Box
                key={index}
                sx={{ px: 2 }}
                onClick={() =>
                  router.push(
                    "blogs/the-future-of-muslim-professional-leadership"
                  )
                }
              >
                <BlogListCard {...blog} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

interface BlogListCardProps {
  image: StaticImageData;
  category: string;
  readTime: string;
  title: string;
  description: string;
  authorIcon: StaticImageData;
  authorName: string;
  dateIcon: StaticImageData;
  date: string;
  labels: string[]; // ✅ only text now
  onClick?: () => void;
}

export function BlogListCard({
  image,
  category,
  readTime,
  title,
  description,
  authorIcon,
  authorName,
  dateIcon,
  date,
  labels,
  onClick = () => {},
}: BlogListCardProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        maxWidth: "555px",
        padding: "20px",
        borderRadius: "20px",
        border: "2px solid #25D366",
        "& > :not(:last-child)": {
          marginBottom: { xs: "12px", sm: "20px", md: "30px" },
        },
        marginY: "10px",
        marginX: { xs: "8px", sm: "auto", lg: "10px" },
        height: { xs: "590px", sm: "600px", md: "655px", lg: "690px" },
      }}
    >
      {/* image */}
      <Box
        sx={{
          width: "100%",
          height: "250px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        onClick={onClick}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={image}
          alt={title}
        />
      </Box>

      {/* category button + read time */}
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
            fontSize: localFontSize.p3,
            fontWeight: 500,
            transition: "all 0.3s ease",
            textWrap: "nowrap",
            "&:hover": {
              backgroundColor: "#20b85a",
            },
          }}
        >
          {category}
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image height={25} width={25} src={svgs.clock} alt="clock" />
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              color: "#00000080",
              textWrap: "nowrap",
            }}
          >
            {readTime}
          </Typography>
        </Box>
      </Box>

      {/* title + description */}
      <Box>
        <Typography
          sx={{
            fontSize: localFontSize.h4,
            color: "#000000",
            paddingBottom: { xs: "5px", md: "10px" },
            // elipsis
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: localFontSize.p2,
            color: "#00000080",
            // elipsis
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* author + date */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "20px", md: "30px" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image height={25} width={25} src={authorIcon} alt="author" />
          <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
            {authorName}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image height={25} width={25} src={dateIcon} alt="date" />
          <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
            {date}
          </Typography>
        </Box>
      </Box>

      {/* labels */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {labels.map((label, index) => (
          <Button
            key={index}
            sx={{
              backgroundColor: "#E9E9E9",
              color: "#00000080",
              borderRadius: "10px",
              padding: { xs: "10px", sm: "5px 10px" },
              textTransform: "none",
              fontSize: localFontSize.p3,
              transition: "all 0.3s ease",
              textWrap: "nowrap",
              "&:hover": {
                backgroundColor: "#20b85a",
                color: "#fff",
              },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image height={18} width={18} src={svgs.lable} alt="label" />
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
