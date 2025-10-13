"use client";
import React from "react";
import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { pngs } from "@/_assets/pngs";
import Image from "next/image";
import { svgs } from "@/_assets/svgs";

export default function TheMessage() {
  return (
    <>
      {/* for desktop */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Grid
          sx={{
            maxWidth: { xl: "1600px" },
            margin: "auto",
          }}
          container
        >
          <Grid
            size={{ xs: 12, md: 7, lg: 6, xl: 5.3 }}
            sx={{
              position: "relative",
            }}
          >
            <Image
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={pngs.theMessage}
              alt="About Us"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "30px", md: "40px", lg: "60px", xl: "80px" },
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: localFontSize.h3,
                  // lineHeight: localFontSize.h3,
                }}
              >
                Hammad Mustafa <br /> Al-Madani Al-Qadri
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF80",
                  fontSize: localFontSize.p2,
                  lineHeight: localFontSize.p2,
                  paddingTop: { xs: "5px", md: "10px" },
                  textWrap: "nowrap",
                }}
              >
                Patron, House of Wisdom
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5, lg: 6, xl: 6.7 }}
            sx={{
              padding: sectionPadding,
              paddingLeft: {
                xs: "15px",
                sm: "20px",
                lg: "30px",
                xl: "60px !important",
              },
              backgroundColor: "#000",
            }}
          >
            <Box
              data-aos="fade-left"
              data-aos-duration="500"
              sx={{ maxWidth: { xl: "80%" } }}
            >
              <Box sx={{ marginBottom: { xs: "20px", md: "40px" } }}>
                <Typography
                  sx={{
                    fontSize: localFontSize.h2,
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  The Message
                </Typography>
                <Divider
                  sx={{
                    width: "80px",
                    border: "2px solid #25D366",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Image
                  style={{
                    width: "40px",
                    height: "28px",
                    objectFit: "contain",
                  }}
                  src={svgs.quoteComma}
                  alt="quoteComma"
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: localFontSize.p1,
                      color: "#ffffff80",
                      paddingY: "30px",
                    }}
                  >
                    The future of our community, and our country, will be shaped
                    by the voices we raise, the leaders we nurture, and the
                    values we stand for. The House of Wisdom exists to unlock
                    the potential of British Muslims across every field of
                    society, and to build a network of thinkers, professionals,
                    and changemakers who are committed to progress, unity, and
                    service. Together, through collaboration and courage, we can
                    shape a better Britain, one that reflects the richness of
                    all its people and the strength of shared purpose.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "auto",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    style={{
                      width: "40px",
                      height: "28px",
                      objectFit: "contain",
                      transform: "rotate(180deg)",
                    }}
                    src={svgs.quoteComma}
                    alt="quoteComma"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* for mobile */}
      <Box
        sx={{
          padding: sectionPadding,
          display: { sm: "none" },
          backgroundImage: "url(./bgTheMessage.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "750px",
        }}
      >
        {/* heading  */}
        <Box sx={{ marginBottom: { xs: "20px", md: "40px" } }}>
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            The Message
          </Typography>
          <Divider
            sx={{
              width: "80px",
              border: "2px solid #25D366",
            }}
          />
          {/* quotation here */}
          <Box sx={{ display: "flex", gap: "10px", marginTop: "40px" }}>
            <Image
              style={{
                width: "26px",
                objectFit: "contain",
              }}
              src={svgs.quoteComma}
              alt="quoteComma"
            />
            <Box>
              <Typography
                sx={{
                  fontSize: localFontSize.p1,
                  color: "#ffffff80",
                  paddingY: "30px",
                }}
              >
                The future of our community, and our country, will be shaped by
                the voices we raise, the leaders we nurture, and the values we
                stand for. The House of Wisdom exists to unlock the potential of
                British Muslims across every field of society, and to build a
                network of thinkers, professionals, and changemakers who are
                committed to progress, unity, and service. Together, through
                collaboration and courage, we can shape a better Britain, one
                that reflects the richness of all its people and the strength of
                shared purpose.
              </Typography>
            </Box>
            <Box
              sx={{
                height: "auto",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Image
                style={{
                  width: "26px",
                  objectFit: "contain",
                  transform: "rotate(180deg)",
                }}
                src={svgs.quoteComma}
                alt="quoteComma"
              />
            </Box>
          </Box>
          {/* biography there  */}
          <Box
            sx={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                color: "#fff",
                fontSize: localFontSize.h3,
                maxWidth: "300px",
                margin: "auto",
              }}
            >
              Hammad Mustafa Al-Madani Al-Qadri
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF80",
                fontSize: localFontSize.p2,
                lineHeight: localFontSize.p2,
                paddingTop: { xs: "5px", md: "10px" },
                textWrap: "nowrap",
              }}
            >
              Patron, House of Wisdom
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
