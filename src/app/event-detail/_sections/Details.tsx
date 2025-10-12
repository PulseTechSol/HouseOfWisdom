import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function Details() {
  const universalGap = { xs: "20px", md: "40px" };
  return (
    <>
      <Box sx={{ padding: sectionPadding, paddingTop: "0px !important" }}>
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
            "& > :not(:last-child)": {
              marginBottom: universalGap,
            },
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
          <Box
            sx={{
              "& > :not(:last-child)": {
                marginBottom: universalGap,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#000000",
                fontWeight: 600,
              }}
            >
              What You’ll Learn
            </Typography>
            <Bullets
              items={[
                "The fundamentals of governance and policy development in the UK",
                "How Muslim professionals can influence policy through research, advocacy, and leadership",
                "Best practices in ethical decision-making and public accountability",
                "Real-world case studies on successful community engagement in governance",
              ]}
            />
          </Box>
          <Box
            sx={{
              "& > :not(:last-child)": {
                marginBottom: universalGap,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#000000",
                fontWeight: 600,
              }}
            >
              Who Should Attend
            </Typography>
            <Typography sx={{ fontSize: localFontSize.p2, color: "#00000080" }}>
              This workshop is designed for professionals in:{" "}
            </Typography>
            <Bullets
              items={[
                "Law, politics, and public administration",
                "Education and academia",
                "Non-profit and community leadership",
                "Business and consultancy sectors interested in policy influence",
              ]}
            />
          </Box>
          <Box
            sx={{
              "& > :not(:last-child)": {
                marginBottom: universalGap,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#000000",
                fontWeight: 600,
              }}
            >
              Why Attend
            </Typography>
            <Bullets
              items={[
                "Gain practical understanding of UK governance frameworks",
                "Network with policymakers, thought leaders, and changemakers",
                "Strengthen your ability to represent your community in national conversations",
                "Enhance your professional leadership profile",
              ]}
            />
          </Box>
          <Box
            sx={{
              "& > :not(:last-child)": {
                marginBottom: universalGap,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#000000",
                fontWeight: 600,
              }}
            >
              Event Details
            </Typography>
            <Bullets
              items={[
                "Date: April 10, 2024",
                "Time: 2:00 PM - 5:00 PM",
                "Venue: Westminster Hub, London",
                "Format: In-person workshop with interactive sessions and Q&A",
              ]}
            />
          </Box>
          <Box
            sx={{
              "& > :not(:last-child)": {
                marginBottom: universalGap,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#000000",
                fontWeight: 600,
              }}
            >
              Join Us
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.p2,
                color: "#00000080",
              }}
            >
              Be part of a movement empowering Muslim professionals to
              contribute constructively to policy and governance in Britain.
              Together, we can strengthen our voice and shape a more inclusive
              and equitable society.
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
