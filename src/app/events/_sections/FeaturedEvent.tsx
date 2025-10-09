"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import CustomButton from "@/_components/CustomButton";

export default function FeaturedEvent() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: localFontSize.h2,
            fontWeight: 600,
            color: "#000",
            textAlign: "center",
            paddingBottom: { xs: "30px", md: "40px", lg: "80px" },
          }}
        >
          Join Our Mission
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: "20px", md: "30px", xl: "80px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              "& > :not(:last-child)": {
                marginBottom: { xs: "12px", md: "30px" },
              },
            }}
          >
            {/* banner , heading & describtion there  */}
            <Box>
              {/* banner  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Divider
                  sx={{
                    width: "30px",
                    border: "2px solid #006B4F",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: localFontSize.p2,
                    color: "#006B4F",
                  }}
                >
                  Conference
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "10px", md: "20px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: localFontSize.h2,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Driven by Purpose
                </Typography>
                <Typography
                  sx={{ fontSize: localFontSize.p1, color: "#00000080" }}
                >
                  Our flagship annual event bringing together leading Muslim
                  professionals for strategic discussions on community
                  leadership, policy influence, and professional development.
                </Typography>
              </Box>
            </Box>
            {/* listed points there  */}
            <Box
              sx={{
                "& > :not(:last-child)": { marginBottom: "5px" },
              }}
            >
              <IconTextRow iconSrc={svgs.calander} text="October 15, 2025" />
              <IconTextRow iconSrc={svgs.calander} text="October 15, 2025" />
              <IconTextRow iconSrc={svgs.calander} text="October 15, 2025" />
              <IconTextRow iconSrc={svgs.calander} text="October 15, 2025" />
            </Box>
            {/* button here  */}
            <CustomButton text="Register now" lightmode={true} />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Image
              src={pngs.drivenByPurpose}
              alt="Driven By Purpose"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

type IconTextRowProps = {
  iconSrc: string | StaticImageData;
  text: string;
};

export function IconTextRow({ iconSrc, text }: IconTextRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "10px", md: "20px" },
        alignItems: "center",
      }}
    >
      <Image src={iconSrc} alt="" width={25} height={25} />
      <Typography sx={{ fontSize: localFontSize.p1, color: "#00000080" }}>
        {text}
      </Typography>
    </Box>
  );
}
