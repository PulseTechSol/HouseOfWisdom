"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";

import { Box, InputBase, Typography, Divider } from "@mui/material";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function JoinOurCommunity() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function onSubmit() {
    if (!email) {
      // toast.error("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      setEmail("");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "/api/join-community",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.status === 200) {
        toast.success("Form submitted successfully!");
        setEmail("");
      } else {
        toast.error("Submission failed! Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{ bgcolor: "#1A1A1A" }}>
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
          <Box
            sx={{
              marginX: "auto",
              width: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h2,
                fontWeight: 600,
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Join our community of professionals
            </Typography>
            <Divider
              sx={{
                width: "80px",
                border: "2px solid #25D366",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#FFFFFF80",
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
          {/* the input field there */}
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #25D366",
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                flex: 1,
                fontSize: localFontSize.p2,
                color: "#FFFFFF80",
              }}
            />
            <Box
              sx={{
                width: "44px",
                height: "44px",
              }}
              onClick={onSubmit}
              role="button"
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
