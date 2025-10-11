"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1140px",
          margin: "auto",
        }}
      >
        {/* heading there  */}
        <Box
          sx={{
            paddingBottom: { xs: "30px", md: "40px", xl: "80px" },
            marginX: "auto",
            width: "fit-content",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              textTransform: "capitalize",
            }}
          >
            get in touch
          </Typography>
          <Divider
            sx={{
              width: "80px",
              border: { xs: "2px solid #25D366", md: "4px solid #25D366" },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "flex-start",
            gap: { xs: "20px", md: "30px", xl: "80px" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ maxWidth: "470px" }}>
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                color: "#00000080",
                paddingBottom: { xs: "20px", md: "40px" },
              }}
            >
              Our team is ready to assist with your queries, partnerships, or
              collaborations. Get in touch to explore how we can work together
              for meaningful impact.
            </Typography>
            <Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Image src={svgs.email} height={40} width={40} alt="phone" />
                <Typography
                  sx={{ fontSize: localFontSize.p1, color: "#00000080" }}
                >
                  info@houseofwisdom.org.uk
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Image src={svgs.phone} height={40} width={40} alt="phone" />
                <Typography
                  sx={{ fontSize: localFontSize.p1, color: "#00000080" }}
                >
                  +44 (0) 20 7123 4567
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ width: { xs: "100%", md: "460px" }, backgroundColor: "red" }}
          >
            <ContactUsForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
