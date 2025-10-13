"use client";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";
import { svgs } from "@/_assets/svgs";

export default function WhoWeAre() {
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
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          alignItems: "center",
          gap: { xs: "40px", md: "50px", xl: "80px" },
          margin: "auto",
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{ width: { xs: "100%", md: "100%" } }}
        >
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
                color: "#25D366",
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
                color: "#FFF",
              }}
            >
              Driven by Purpose
            </Typography>
            <Divider
              sx={{
                width: "80px",
                border: { xs: "2px solid #25D366", md: "4px solid #25D366" },
              }}
            />
          </Box>

          <Typography sx={{ fontSize: localFontSize.p1, color: "#FFFFFF80" }}>
            The House of Wisdom (HOW) is a bold new initiative launched by a
            group of British Muslims, led by Patron Hammad Mustafa Al-Madani
            Al-Qadri. Inspired by the intellectual legacy of the Islamic Golden
            Age, HOW is rooted in a powerful vision: to create a culture of
            thought leadership, curiosity, and principled excellence within the
            British Muslim community. In the face of growing social, political,
            and economic challenges, we believe the most urgent task before us
            is to cultivate a new generation of confident, capable Muslim
            leaders who can shape the future with integrity and purpose.
            <br />
            <br />
            At its heart, HOW is a platform for leadership development bringing
            together Muslim professionals and thinkers from across disciplines
            to generate bold ideas, influence public discourse, and build
            strategic capacity. We focus on engaging individuals across key
            sectors including law, politics, finance, business, medicine,
            academia, media, technology, and the creative industries. We are
            creating a space where emerging leaders are mentored, supported, and
            equipped with the skills, networks, and vision needed to drive
            meaningful change. Through HOW, we aim to foster a generation that
            leads not just in their professions, but in the public life of
            Britain.
            <br />
            <br />
            This is a movement for renewal, not rooted in nostalgia, but in
            forward-thinking action. HOW champions intellectual and cultural
            excellence grounded in Islamic values, while actively confronting
            the realities of our time. By investing in thought leadership and
            empowering future leaders, we strive to create a strong, united
            voice for British Muslims, one that uplifts communities, shapes
            society, and reclaims a proud legacy of leadership and service.
            <br />
            <br />
            While rooted in the British Muslim experience, HOW is committed to
            building bridges across faiths, cultures, and communities. We
            believe that true progress comes through collaboration, mutual
            respect, and a shared commitment to the common good. Our vision is
            not only to empower Muslims, but to contribute to a more just,
            inclusive, and dynamic Britain. A Britain where people of all
            backgrounds work together to tackle the challenges of our time and
            build a future defined by dignity, opportunity, and hope for all.
          </Typography>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-duration="500"
          sx={{
            width: { xs: "100%", md: "100%" },
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0px 4px 34px 0px #00000059",
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
  );
}
