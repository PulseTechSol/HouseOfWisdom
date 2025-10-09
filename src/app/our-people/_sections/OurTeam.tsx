"use client";
import { Box, Typography, Divider, SxProps, Theme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";

export default function OurTeam() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <CustomSlider
        styles={{
          right: { xs: "0", md: "-25px" },

          top: { xs: "40%", md: "calc(42%)" },
        }}
      />
    ),
    prevArrow: (
      <CustomSlider
        styles={{
          left: { xs: "0", md: "-25px" },
          top: { xs: "43%", md: "calc(44.5%)" },
          transform: "rotate(180deg)",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: "20px", md: "30px", xl: "80px" },
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mb: { xs: "20px", md: "40px" },
            }}
          >
            <Image
              src={svgs.whoWeAre}
              alt="Who We Are"
              width={30}
              height={30}
            />
            <Typography
              sx={{
                fontSize: localFontSize.p2,
                color: "#006B4F",
              }}
            >
              Who We Are
            </Typography>
          </Box>

          {/* heading there  */}
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              sx={{
                fontSize: localFontSize.h2,
                fontWeight: 600,
                color: "#000",
              }}
            >
              Driven by Purpose
            </Typography>
            <Divider
              sx={{
                width: "80px",
                border: { xs: "2px solid #006B4F", md: "4px solid #006B4F" },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", md: "20px" },
            }}
          >
            <Typography sx={{ fontSize: localFontSize.p1, color: "#00000080" }}>
              Our organization brings together accomplished Muslim professionals
              Our strength lies in the people who make up House of Wisdom — a
              collective of accomplished Muslim professionals, leaders, and
              visionaries from across the UK. Bound by shared values of faith,
              excellence, and service, we work together to uplift communities
              and shape a more inclusive future. every field — business,
              academia, law, healthcare, technology, and beyond.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%", xl: "45%" },
          }}
        >
          <Slider {...settings}>
            <MemberCard
              image={pngs.teamMember1}
              name="Tariq Ahmed"
              designation="Executive Director & Corporate Relations"
            />
            <MemberCard
              image={pngs.teamMember1}
              name="Tariq Ahmed"
              designation="Executive Director & Corporate Relations"
            />
            <MemberCard
              image={pngs.teamMember1}
              name="Tariq Ahmed"
              designation="Executive Director & Corporate Relations"
            />
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

type MemberCardProps = {
  image: string | StaticImageData;
  name: string;
  designation: string;
};

export function MemberCard({ image, name, designation }: MemberCardProps) {
  return (
    <Box sx={{ margin: "auto", width: "fit-content" }}>
      <Box
        sx={{
          width: "260px",
          margin: "8px",
        }}
      >
        <Box sx={{ height: "fit-content", maxWidth: "260px", width: "100%" }}>
          <Image
            src={image}
            alt={name}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: localFontSize.h4,
            color: "#000000",
            textTransform: "capitalize",
            paddingTop: { xs: "20px", md: "40px" },
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
          {designation}
        </Typography>
      </Box>
    </Box>
  );
}

interface CustomSliderProps {
  styles?: SxProps<Theme>;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ styles, onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        cursor: "pointer",
        width: { xs: "15px", md: "20px" },
        height: "auto",
        zIndex: 2,
        ...styles,
      }}
      onClick={onClick}
    >
      <Image
        loading="lazy"
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={svgs.sliderArrow}
        alt="SliderArrow"
      />
    </Box>
  );
};
