"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";

export default function ListOfBlogs() {
  const [activeCategory, setActiveCategory] = React.useState("All Posts");

  const categories = [
    "All Posts",
    "Leadership",
    "Finance",
    "Professional Development",
    "Technology",
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
      </Box>
    </Box>
  );
}
