"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Box sx={{ backgroundColor: "#010f0f", minHeight: "100vh", pt: 8 }}>
      <Container maxWidth="lg">
        {/* Mission Section */}
        <Box sx={{ mb: 12, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              mb: 3,
              fontWeight: 700,
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            At SyllabusBuddy, we&apos;re on a mission to revolutionize how
            students interact with their course syllabi. We believe that every
            student deserves a personalized learning experience that adapts to
            their unique needs and learning style.
          </Typography>
        </Box>

        {/* Story Section */}
        <Box sx={{ mb: 12 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  mb: 3,
                  fontWeight: 700,
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                SyllabusBuddy was born from a simple observation: students often
                struggle to keep track of their course requirements and
                deadlines. We saw an opportunity to leverage AI technology to
                transform static syllabi into dynamic, interactive learning
                companions.
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.8,
                }}
              >
                Today, we&apos;re proud to help students across the globe stay
                organized, meet their academic goals, and make the most of their
                educational journey.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid rgba(15, 243, 103, 0.2)",
                }}
              >
                <Image
                  src="/about-image.png"
                  alt="SyllabusBuddy Story"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
