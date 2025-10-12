"use client";

import { Box, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/utils/themes";
import CustomButton from "./CustomButton";

export default function JoinOurMission() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* heading there  */}
        <Box sx={{ textAlign: "center", maxWidth: "650px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              textAlign: "center",
            }}
          >
            Join Our Mission
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#00000080",
              marginTop: { xs: "10px", md: "20px" },
              textAlign: "center",
            }}
          >
            {`Be part of a network that's shaping the future of Muslim
            professional engagement in British public life.`}
          </Typography>
        </Box>
        {/* the card box  */}
        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            marginTop: { xs: "40px", md: "80px" },
            display: "flex",
            justifyContent: "center",
            gap: { xs: "10px", sm: "20px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <CustomButton text="get involved" lightmode={true} />
          <CustomButton text="meet our people" />
        </Box>
      </Box>
    </Box>
  );
}
