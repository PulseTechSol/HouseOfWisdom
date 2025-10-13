"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";
import CustomButton from "@/_components/CustomButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedEvent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <Box
        sx={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "transparent",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
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
            color: "#fff",
            textAlign: "center",
            paddingBottom: { xs: "30px", md: "40px", lg: "80px" },
          }}
        >
          Featured Event
        </Typography>
        <Slider {...settings}>
          <SlidingSection />
          <SlidingSection />
          <SlidingSection />
        </Slider>
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
      <Typography sx={{ fontSize: localFontSize.p1, color: "#ffffff80" }}>
        {text}
      </Typography>
    </Box>
  );
}

export function SlidingSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: "20px", md: "30px", xl: "80px" },
        }}
      >
        <Box
          data-aos="zoom-in"
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
                  color: "#fff",
                }}
              >
                Leadership Summit 2025
              </Typography>
              <Typography
                sx={{ fontSize: localFontSize.p1, color: "#ffffff80" }}
              >
                Our flagship annual event bringing together leading Muslim
                professionals for strategic discussions on community leadership,
                policy influence, and professional development.
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
            <IconTextRow iconSrc={svgs.clock} text="9:00 AM - 6:00 PM" />
            <IconTextRow iconSrc={svgs.location} text="The Shard, London" />
            <IconTextRow
              iconSrc={svgs.ourPeopleGreen}
              text="150+ Expected Attendees"
            />
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
            data-aos="zoom-in"
            data-aos-duration="500"
            src={pngs.drivenByPurpose}
            alt="Driven By Purpose"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
}
