"use client";
import { Box, Typography, Divider, Button } from "@mui/material";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { CustomInput } from "./CustomInput";

export default function ContactUsForm() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <CustomInput label="Name" />
      <CustomInput label="Email" />
      <CustomInput label="Message" multiline rows={4} />
      <Button
        sx={{
          textTransform: "capitalize",
          color: "#fff",
          borderRadius: "10px",
          padding: "15px 30px",
          fontSize: localFontSize.p2,
          gap: "12px",
          border: "2px solid #25D366",
          backgroundColor: "#25D366",
          "& .MuiButton-endIcon": { margin: 0 },
          height: { xs: "45px", md: "56px" },
          textWrap: "nowrap",
        }}
      >
        button
      </Button>
    </Box>
  );
}
