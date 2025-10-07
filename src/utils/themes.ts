// import { localFontSize } from "@/app/utils/themes";

// this is the font family below there
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans , sans-serif",
  },
});
// export theme;

export const localFontSize = {
  // headings
  h1: {
    xs: "32px",
    sm: "40px",
    md: "50px",
    lg: "64px",
  },
  h2: {
    xs: "20px",
    sm: "32px",
    md: "40px",
    lg: "48px",
  },
  h3: {
    xs: "20px",
    sm: "24px",
    md: "30px",
    lg: "36px",
  },
  // typography
  p1: {
    xs: "18px",
    md: "20px",
  },
  p2: { xs: "16px", md: "18px" },
};

export const sectionPadding = {
  xs: "40px 20px",
  sm: "50px 60px",
  md: "60px 80px",
  lg: "100px 150px",
};
