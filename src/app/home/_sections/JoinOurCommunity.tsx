"use client";

import { Box, InputBase, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";
import Image from "next/image";

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
          }}
        >
          {/* the input fu=ield there */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #25D366",
              borderRadius: "10px",
              padding: "15px 20px",
              height: "70px",
              maxWidth: "480px",
              width: "100%",
              margin: "auto",
            }}
          >
            <InputBase
              placeholder="Enter Your Email Address"
              sx={{
                flex: 1,
                fontSize: localFontSize.p2,
                color: "#00000080",
              }}
            />
            <Box
              sx={{
                width: "44px",
                height: "44px",
              }}
            >
              <Image
                src={svgs.sendIcon}
                alt="Send"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
