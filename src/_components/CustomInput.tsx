"use client";

import React from "react";
import { TextField } from "@mui/material";
import { localFontSize } from "@/utils/themes";

interface CustomInputProps {
  label: string;
  name?: string; // RHF injects
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // RHF injects
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // RHF injects
  multiline?: boolean;
  rows?: number;
  helperText?: string;
  error?: boolean;
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      name,
      onChange,
      onBlur,
      multiline = false,
      rows = 1,
      helperText,
      error = false,
    },
    ref
  ) => {
    return (
      <TextField
        label={label}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        variant="outlined"
        fullWidth
        multiline={multiline}
        rows={rows}
        error={error}
        helperText={error ? helperText : ""} // only show when invalid
        inputRef={ref} // <-- critical: attach RHF ref here
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": { borderColor: "#25D366" },
            "&:hover fieldset": { borderColor: "#25D366" },
            "&.Mui-focused fieldset": { borderColor: "#25D366" },
            fontSize: localFontSize.p2,
            color: "#00000080",
          },
        }}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";
