"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import CustomButton from "@/_components/CustomButton";
import { useRouter } from "next/navigation";

export default function FeaturedArticle() {
  const router = useRouter();
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
          Featured Article
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
            data-aos="fade-right"
            data-aos-duration="500"
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
                    border: "2px solid #25D366",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: localFontSize.p2,
                    color: "#25D366",
                  }}
                >
                  Leadership
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
                  The Future of Muslim Professional Leadership in Britain
                </Typography>
                <Typography
                  sx={{ fontSize: localFontSize.p1, color: "#00000080" }}
                >
                  {`As we navigate an increasingly complex political and social
                  landscape, the role of Muslim professionals in shaping
                  Britain's future has never been more critical.`}
                </Typography>
              </Box>
            </Box>
            {/* listed points there  */}
            <Box
              sx={{
                // "& > :not(:last-child)": { marginBottom: "5px" },
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              <IconTextRow iconSrc={svgs.profile} text="Dr. Amina Hassan" />
              <IconTextRow iconSrc={svgs.calander} text="March 1, 2024" />
              <IconTextRow iconSrc={svgs.clock} text="8 min read" />
            </Box>
            {/* button here  */}
            <CustomButton
              text="read article"
              lightmode={true}
              onClick={() =>
                router.push(
                  "blogs/the-future-of-muslim-professional-leadership"
                )
              }
            />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
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
