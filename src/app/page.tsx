"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import {
  Upload as UploadIcon,
  Analytics as AnalyticsIcon,
  CalendarToday as CalendarIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>SyllabusBuddy – Your Syllabus Companion</title>
        <meta
          name="description"
          content="Stay on top of your learning with SyllabusBuddy. Track topics, get reminders, and more."
        />
        <link rel="canonical" href="https://syllabusbuddy.com/" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <Box component="main" sx={{ pt: 8, backgroundColor: "#010f0f" }}>
          <Box
            sx={{
              background: "#010f0f",
              color: "white",
              py: { xs: 8, md: 12 },
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(circle at center, rgba(15, 243, 103, 0.1) 0%, transparent 70%)",
                zIndex: 1,
              },
            }}
          >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      background:
                        "linear-gradient(45deg, #fff 30%, #e3f2fd 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    Your AI-Powered Syllabus Management Assistant
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    Transform your academic experience with smart organization
                    and AI-powered insights
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      size="large"
                      component={Link}
                      href="/features"
                      sx={{
                        borderColor: "white",
                        color: "white",
                        px: 4,
                        py: 1.5,
                        fontSize: "1.1rem",
                        "&:hover": {
                          borderColor: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    position: "relative",
                    height: { xs: 300, md: 400 },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      zIndex: 1,
                    },
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="SyllabusBuddy Platform"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Box>
            </Container>
          </Box>

          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 6,
                textAlign: "center",
                color: "white",
              }}
            >
              Why Choose <span style={{ color: "#0ff367" }}>SyllabusBuddy</span>
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "repeat(4, 1fr)",
                },
                gap: 4,
              }}
            >
              {[
                {
                  icon: <UploadIcon sx={{ fontSize: 40 }} />,
                  title: "Smart Upload",
                  description:
                    "Upload your syllabi in any format and let our AI extract key information automatically.",
                },
                {
                  icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
                  title: "AI Analysis",
                  description:
                    "Get intelligent insights and recommendations based on your course requirements.",
                },
                {
                  icon: <CalendarIcon sx={{ fontSize: 40 }} />,
                  title: "Smart Calendar",
                  description:
                    "Automatically sync important dates and deadlines with your preferred calendar.",
                },
                {
                  icon: <SettingsIcon sx={{ fontSize: 40 }} />,
                  title: "Customizable",
                  description:
                    "Personalize your experience with custom categories, tags, and organization methods.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 3 }}>
                    <Box sx={{ color: "primary.main", mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>

          <Box
            sx={{
              py: { xs: 8, md: 12 },
              backgroundColor: "#010f0f",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(circle at center, rgba(15, 243, 103, 0.1) 0%, transparent 70%)",
                zIndex: 1,
              },
            }}
          >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                  alignItems: "center",
                  backgroundColor: "#010f0f",
                  borderRadius: 2,
                  p: 4,
                  border: "1px solid rgba(15, 243, 103, 0.2)",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "white",
                    }}
                  >
                    Ready to Get Started?
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    Join thousands of students who are already using
                    SyllabusBuddy to enhance their learning experience.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.syllabusbuddy.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/google-play-badge.png"
                        alt="Get it on Google Play"
                        width={180}
                        height={54}
                        style={{ height: 54, width: "auto" }}
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/app/syllabusbuddy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/app-store-badge.svg"
                        alt="Download on the App Store"
                        width={180}
                        height={54}
                        style={{ height: 54, width: "auto" }}
                      />
                    </a>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    position: "relative",
                    height: { xs: 300, md: 400 },
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid rgba(15, 243, 103, 0.2)",
                  }}
                >
                  <Image
                    src="/get-started.png"
                    alt="Get Started with SyllabusBuddy"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
