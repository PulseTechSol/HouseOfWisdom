"use client";

import React from "react";
import { TextField } from "@mui/material";
import { localFontSize } from "@/utils/themes";

interface CustomInputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
}

export function CustomInput({
  label,
  value,
  onChange,
  multiline = false,
  rows = 1,
}: CustomInputProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      multiline={multiline}
      rows={rows}
      InputLabelProps={
        {
          // style: { color: "#00000080", fontSize: localFontSize.p2 },
        }
      }
      inputProps={
        {
          // style: { color: "#00000080", fontSize: localFontSize.p2 },
        }
      }
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "& fieldset": {
            borderColor: "#25D366",
          },
          "&:hover fieldset": {
            borderColor: "#25D366",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#25D366",
          },
          fontSize: localFontSize.p2,
          color: "#00000080",
        },
      }}
    />
  );
}
