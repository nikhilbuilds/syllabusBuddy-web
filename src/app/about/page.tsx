"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Image from "next/image";

export default function AboutPage() {
  const team = [
    {
      name: "Nikhil",
      role: "Founder & Developer",
      image: "/team/nikhil.jpg",
    },
    // Add more team members as needed
  ];

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
            At SyllabusBuddy, we're on a mission to revolutionize how students
            interact with their course syllabi. We believe that every student
            deserves a personalized learning experience that adapts to their
            unique needs and learning style.
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
                Today, we're proud to help students across the globe stay
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

        {/* Team Section */}
        {/* <Box>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              mb: 6,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#010f0f",
                    border: "1px solid rgba(15, 243, 103, 0.2)",
                    borderRadius: 2,
                    height: "100%",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#0ff367",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        mb: 2,
                        border: "2px solid #0ff367",
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
}
