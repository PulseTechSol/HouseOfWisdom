"use client";

import { Box, Typography, Divider, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { svgs } from "@/_assets/svgs";

export default function UnitingForImpact() {
  return (
    <Box sx={{ bgcolor: "#E9E9E9" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* top banner  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: { xs: "16px", md: "20px" },
            justifyContent: "center",
          }}
        >
          <Image src={svgs.whoWeAre} alt="Icon" width={24} height={24} />
          <Typography sx={{ fontSize: localFontSize.p2, color: "#25D366" }}>
            our mission
          </Typography>
        </Box>
        {/* heading there  */}
        <Box
          sx={{
            marginBottom: "20px",
            width: "fit-content",
            marginX: "auto",
            maxWidth: "880px",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#000",
              textAlign: "center",
              width: "fit-content",
              marginX: "auto",
            }}
          >
            Serving Humanity
            <Divider
              sx={{
                width: "80px",
                border: { xs: "2px solid #25D366", md: "4px solid #25D366" },
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#00000080",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            HOW is a platform designed to ignite revival by helping British
            Muslims reclaim the spirit of curiosity, excellence, leadership, and
            service that once defined Muslim culture. Our goal is to inspire
            groundbreaking contributions to humanity once again.
          </Typography>
        </Box>
        {/* the card box  */}
        <Grid
          sx={{ marginTop: { xs: "40px", md: "80px" } }}
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card
              iconSrc={svgs.thoughtLeadership}
              title="Thought leadership"
              description="Developing bold new ideas and strategies for community elevation."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card
              iconSrc={svgs.thoughtLeadership}
              title="Collaboration"
              description="Building a strong network of professionals to address collective challenges"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card
              iconSrc={svgs.thoughtLeadership}
              title="Advocacy"
              description="Equipping leaders to represent and defend our community's interests."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Card
              iconSrc={svgs.thoughtLeadership}
              title="Empowerment"
              description="Supporting emerging leaders through mentorship, investment, and expertise."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

type CardProps = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

export function Card({ iconSrc, title, description }: CardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: "10px", md: "20px" },
        // width: "100%",
        backgroundColor: "#25D366",
        padding: { xs: "20px", md: "30px", lg: "40px" },
        borderRadius: "40px",
        justifyContent: "center",
        height: "310px",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          marginBottom: { xs: "10px", md: "20px" },
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={iconSrc}
          alt={title}
        />
      </Box>

      <Typography
        sx={{
          fontSize: localFontSize.h3,
          fontWeight: 600,
          color: "#FFFFFF",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
