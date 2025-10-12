"use client";

import { Button, Divider } from "@mui/material";
import Image from "next/image";
import { svgs } from "@/_assets/svgs";
import { localFontSize } from "@/utils/themes";

type CustomButtonProps = {
  text: string;
  onClick?: () => void;
  lightmode?: boolean;
};

export default function CustomButton({
  text,
  onClick,
  lightmode = false,
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick ?? (() => {})}
      endIcon={
        lightmode ? (
          <Divider
            className="btn-end-icon"
            sx={{
              width: "30px",
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#25D366",
              transition: "all .2s ease",
            }}
          />
        ) : (
          <Image
            className="btn-end-icon"
            src={svgs.ourPropleWhite}
            alt=""
            width={24}
            height={24}
            aria-hidden
            style={{ transition: "transform .2s ease" }}
          />
        )
      }
      sx={{
        textTransform: "capitalize",
        color: lightmode ? "#25D366" : "#fff",
        borderRadius: "10px",
        padding: "15px 30px",
        fontSize: localFontSize.p2,
        gap: "12px",
        border: "2px solid #25D366",
        backgroundColor: lightmode ? "transparent" : "#25D366",
        "& .MuiButton-endIcon": { margin: 0 },

        height: { xs: "45px", md: "56px" },
        textWrap: "nowrap",
        transition:
          "background-color .2s ease, color .2s ease, box-shadow .2s ease",

        /* HOVER for both modes */
        "&:hover": {
          backgroundColor: lightmode ? "#25D366" : "#20b85a",
          color: "#fff",
          boxShadow: "0 6px 14px rgba(37, 211, 102, 0.25)",

          /* nudge the end icon */
          "& .btn-end-icon": {
            transform: "translateX(3px)",
          },
        },

        /* Make divider line turn white on hover when in light mode */
        "&:hover .btn-end-icon": lightmode
          ? { borderColor: "#fff" }
          : undefined,

        /* Focus-visible for accessibility */
        "&:focus-visible": {
          outline: "3px solid rgba(37, 211, 102, 0.35)",
          outlineOffset: "2px",
        },
        /* Active press feedback */
        "&:active": {
          transform: "translateY(1px)",
          boxShadow: "0 3px 8px rgba(37, 211, 102, 0.2)",
        },
      }}
    >
      {text}
    </Button>
  );
}
