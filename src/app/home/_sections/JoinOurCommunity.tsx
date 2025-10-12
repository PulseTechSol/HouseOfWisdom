"use client";

import { Box, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/utils/themes";
import CustomButton from "@/_components/CustomButton";

export default function JoinOurCommunity() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* lable ther  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            paddingBottom: { xs: "20px", md: "40px" },
          }}
        >
          <Box
            sx={{
              height: "16px",
              width: "16px",
              backgroundColor: "transparent",
              borderRadius: "50%",
              border: "2px solid #25D366",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "6px",
                width: "6px",
                backgroundColor: "#25D366",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>
          <Typography
            sx={{
              fontSize: localFontSize.p2,
              color: "#25D366",
            }}
          >
            Ready to Make an Impact?
          </Typography>
        </Box>

        {/* heading there  */}
        <Box sx={{ textAlign: "center", maxWidth: "1140px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              textAlign: "center",
            }}
          >
            Join our community of professionals
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#00000080",
              marginTop: { xs: "10px", md: "20px" },
              textAlign: "center",
            }}
          >
            Join our community of influential Muslim professionals working
            together to create positive change in British society. Your
            expertise and vision can help shape a better future.
          </Typography>
        </Box>
        {/* the card box  */}
        <Box
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
