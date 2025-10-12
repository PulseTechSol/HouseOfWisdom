import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function Details() {
  return (
    <>
      <Box sx={{ padding: sectionPadding }}>
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
            The Policy & Governance Workshop by House of Wisdom brings together
            professionals, academics, and community leaders to explore the
            principles of effective governance and the role of British Muslims
            in shaping public policy. This workshop aims to equip participants
            with insights, skills, and strategies to engage meaningfully with
            decision-making processes across government, public institutions,
            and civil society.
          </Typography>
          <Box>
            <Typography sx={{ fontSize: localFontSize.h3, color: "#000000" }}>
              n-making processes across government, public institutions, and
              civil society.
            </Typography>
            <Bullets
              items={[
                "Access the personal data we hold about you.",
                "Request correction or deletion of inaccurate or outdated data.",
                "Object to or restrict processing of your data.",
                "Withdraw consent (where applicable).",
                "Lodge a complaint with the UK Information Commissioner’s Office (ICO).",
              ]}
            />
            <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
              n-making processes across government, public institutions, and
              civil society.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function Bullets(props: { items: string[] }) {
  return (
    <List
      component="ul"
      disablePadding
      sx={{
        pl: 3,
        listStyleType: "disc",
        "& .MuiListItem-root": { display: "list-item", px: 0, py: 0.5 },
        fontSize: localFontSize.p2,
        color: "#00000080",
      }}
    >
      {props.items.map((t, i) => (
        <ListItem key={i} component="li">
          {t}
        </ListItem>
      ))}
    </List>
  );
}
