"use client";
import { useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import { CustomInput } from "./CustomInput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
}

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      message: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/contactus", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        reset();
      } else {
        toast.error(`Failed to send email: ${response?.data?.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    toast.error("Please fill all required fields correctly.");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit, onError)}
      sx={{
        bgcolor: "#1A1A1A",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <CustomInput
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name", { required: "Name is required" })}
      />

      <CustomInput
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Enter a valid email address",
          },
        })}
      />

      <CustomInput
        label="Company"
        error={!!errors.company}
        helperText={errors.company?.message}
        {...register("company", {
          required: "Company is required",
        })}
      />

      <CustomInput
        label="Industry"
        error={!!errors.industry}
        helperText={errors.industry?.message}
        {...register("industry", {
          required: "Industry is required",
        })}
      />

      <CustomInput
        label="Message"
        rows={4}
        multiline
        error={!!errors.message}
        helperText={errors.message?.message}
        {...register("message")}
      />

      <Button
        type="submit"
        disabled={loading}
        sx={{
          textTransform: "capitalize",
          color: "#fff",
          borderRadius: "10px",
          padding: "15px 30px",
          fontSize: localFontSize.p2,
          gap: "12px",
          backgroundColor: "#25D366",
          transition: "all 0.3s ease-in-out",
          "& .MuiButton-endIcon": { margin: 0 },
          height: { xs: "45px", md: "56px" },
          textWrap: "nowrap",
          border: { xs: "1px solid #25D366", md: "2px solid #25D366" },
          "&:hover": {
            backgroundColor: "transparent",
            color: "#25D366",
          },
        }}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </Box>
  );
}
