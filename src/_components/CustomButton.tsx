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
            sx={{
              width: "30px",
              border: "2px solid #006B4F",
            }}
          />
        ) : (
          <Image
            src={svgs.ourPropleWhite}
            alt=""
            width={24}
            height={24}
            aria-hidden
          />
        )
      }
      sx={{
        textTransform: "capitalize",
        color: lightmode ? "#006B4F" : "#fff",
        borderRadius: "10px",
        padding: "15px 30px",
        fontSize: localFontSize.p2,
        gap: "12px",
        border: "2px solid #006B4F",
        backgroundColor: lightmode ? "transparent" : "#006B4F",
        "& .MuiButton-endIcon": { margin: 0 },
        height: { xs: "45px", md: "56px" },
        textWrap: "nowrap",
      }}
    >
      {text}
    </Button>
  );
}
