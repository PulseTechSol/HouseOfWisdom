"use client";
import React from "react";
import { TextField } from "@mui/material";

interface CustomInputProps {
  label: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
        fullWidth
        variant="outlined"
        multiline={multiline}
        rows={rows}
        error={error}
        helperText={error ? helperText : ""}
        inputRef={ref}
        InputLabelProps={{
          style: {
            color: "#00000080",
            // fontSize: localFontSize.p2,
          },
        }}
        inputProps={{
          style: {
            color: "#00000080",
            // fontSize: localFontSize.p2,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#25D366",
            },
            "&:hover fieldset": {
              borderColor: "#25D366",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#25D366",
            },
          },
          "& .MuiInputBase-input": {},
          "& .css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
            height: "fit-content",
          },
          "& .css-1pk1fka": {
            height: "fit-content",
          },
        }}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";
