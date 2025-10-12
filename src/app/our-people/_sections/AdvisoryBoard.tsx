"use client";
import { Box, Typography, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { pngs } from "@/_assets/pngs";

export default function UnitingForImpact() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
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
            Advisory Board{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#00000080",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            Our Advisory Board comprises distinguished professionals from
            various sectors who provide strategic guidance and expertise to help
            shape our initiatives and expand our impact.
          </Typography>
        </Box>
        {/* the card box  */}
        <Grid
          sx={{ marginTop: { xs: "40px", md: "80px" } }}
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser1}
              title="Fatima Al-Zahra"
              description="Senior Partner, International Law Firm"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser2}
              title="Dr. Yusuf Mohammad"
              description="Consultant Surgeon & Medical Director"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser3}
              title="Ayesha Patel"
              description="Chief Technology Officer, FinTech Startup"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser4}
              title="Zaid Rashid"
              description="Head of Public Policy, Tech Corporation"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser5}
              title="Dr. Khadija Williams"
              description="Senior Lecturer, Cambridge University"
            />
          </Grid>
          <Grid
            sx={{ height: { xs: "220px", md: "230px", lg: "270px" } }}
            size={{ xs: 12, sm: 6, lg: 4 }}
          >
            <Card
              iconSrc={pngs.adviser6}
              title="Bilal Hassan"
              description="Managing Director, Investment Banking"
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
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "flex-start",
        textAlign: "center",
        gap: { xs: "5px", md: "10px" },
        backgroundColor: "#25D366",
        padding: { xs: "20px", md: "30px", lg: "40px" },
        borderRadius: { xs: "20px", sm: "40px" },
        height: "-webkit-fill-available",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          marginBottom: { xs: "5px", md: "10px" },
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
          fontSize: localFontSize.h4,
          color: "#FFFFFF",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
          // elipsis
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
