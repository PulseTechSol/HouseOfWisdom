import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography } from "@mui/material";

interface Props {
  heading: string;
  bgImage?: string;
}
export default function HeroDetails({
  heading,
  bgImage = "bgHeroBlogDetails.png",
}: Props) {
  return (
    <>
      <Box sx={{ padding: sectionPadding }}>
        <Box
          sx={{
            maxWidth: "1140px",
            margin: "auto",
            backgroundImage: `url(./${bgImage})`,
            // backgroundImage: "url(./bgHeroEventDetails.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { xs: "20px", md: "40px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "500px",
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h1,
              color: "#fff",
              textAlign: "center",
              paddingX: { xs: "20px", md: "40px", lg: "60px" },
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {heading}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
