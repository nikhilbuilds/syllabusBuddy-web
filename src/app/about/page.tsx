"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Box sx={{ backgroundColor: "#010f0f", minHeight: "100vh", pt: 8 }}>
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
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
            At SyllabusBuddy, our mission is to revolutionize the way students
            engage with their syllabus. We believe learning should be
            personalized, interactive, and rewarding—not just a checklist.
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
                Born from the real struggles of students trying to manage their
                syllabus, SyllabusBuddy transforms static syllabi into dynamic
                learning plans with quizzes, streaks, and progress tracking.
                We&apos;re here to make studying smarter, not harder.
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
