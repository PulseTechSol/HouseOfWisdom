import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function Details() {
  const universalGap = { xs: "20px", md: "40px" };
  return (
    <>
      <Box>
        <Box
          sx={{
            maxWidth: "1440px",
            padding: sectionPadding,
            paddingTop: "0px !important",
            margin: "auto",
            "& > :not(:last-child)": {
              marginBottom: universalGap,
            },
          }}
        >
          <Typography sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}>
            British Muslim professionals are now leading across business,
            academia, law, healthcare, and public service. As the community
            grows in education and civic engagement, the next decade presents an
            opportunity to transform representation into meaningful leadership —
            leadership that shapes policy, drives innovation, and strengthens
            British society.
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
                color: "#fff",
                fontWeight: 600,
              }}
            >
              A New Era Of Opportunity
            </Typography>
            <Typography sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}>
              Rising educational achievement, digital entrepreneurship, and
              diversity initiatives have opened doors for Muslim professionals.
              Yet challenges such as bias, limited access to senior networks,
              and a lack of visible role models continue to restrict leadership
              growth. Overcoming these barriers requires coordinated action from
              individuals, organisations, and professional networks.
            </Typography>
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
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Defining The Next Generation Of Leaders
            </Typography>
            <Typography sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}>
              Future Muslim leadership in Britain will be built on integrity,
              collaboration, and community consciousness. True leaders will
              combine professional excellence with values of service and
              inclusion — creating bridges between sectors, communities, and
              cultures.
            </Typography>
            <Box
              sx={{
                "& > :not(:last-child)": {
                  marginBottom: { xs: "10px", md: "20px" },
                },
              }}
            >
              <Typography
                sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}
              >
                Key qualities will include:
              </Typography>
              <Bullets
                items={[
                  "Ethical, purpose-driven decision making",
                  "Strong communication and public engagement",
                  "Collaborative innovation and cultural intelligence",
                ]}
              />
            </Box>
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
                color: "#fff",
                fontWeight: 600,
              }}
            >
              How To Build The Future
            </Typography>
            <Box
              sx={{
                "& > :not(:last-child)": {
                  marginBottom: { xs: "10px", md: "20px" },
                },
              }}
            >
              <Typography
                sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}
              >
                For Organisations:
              </Typography>
              <Bullets
                items={[
                  "Create transparent recruitment and promotion pathways",
                  "Offer mentorship and sponsorship opportunities",
                  "Support flexible work policies and family-friendly environments",
                ]}
              />

              <Typography
                sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}
              >
                For Professionals:
              </Typography>
              <Bullets
                items={[
                  "Build visible expertise and strong cross-sector networks",
                  "Seek mentors who open doors, not just give advice",
                  "Lead authentically, guided by values and service",
                ]}
              />
            </Box>
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
                color: "#fff",
                fontWeight: 600,
              }}
            >
              The Role Of Networks
            </Typography>
            <Typography sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}>
              Platforms like House of Wisdom are vital in connecting British
              Muslim professionals, fostering collaboration, and amplifying
              their collective voice. Through events, mentorship, and leadership
              programs, such networks turn individual success into shared
              progress.
            </Typography>
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
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Moving Forward
            </Typography>
            <Typography sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}>
              The future of Muslim professional leadership in Britain is not
              just about inclusion — it’s about influence. By investing in
              talent, nurturing networks, and leading with integrity, British
              Muslims can help shape a society that reflects the values of
              excellence, fairness, and humanity.
            </Typography>
            <Typography sx={{ fontSize: localFontSize.p2, color: "#ffffff80" }}>
              Together, we can build a future where representation becomes
              leadership — and leadership drives positive change.
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
        color: "#ffffff80",
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
