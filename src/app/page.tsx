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
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import QuizIcon from "@mui/icons-material/Quiz";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export default function LandingPage() {
  const features = [
    {
      icon: <QuizIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Daily Quizzes",
      description:
        "Reinforce learning every day with quizzes tailored to your syllabus topics.",
    },
    {
      icon: <WhatshotIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Revision Streaks",
      description:
        "Stay motivated by building streaks that track your daily progress.",
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Progress Tracker",
      description:
        "Visualize your strengths and weaknesses with interactive dashboards.",
    },
    {
      icon: <CloudUploadIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Smart Upload",
      description:
        "Upload any syllabus—PDF, DOCX, or text—and let AI extract key topics instantly.",
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Personalized Recommendations",
      description:
        "Get AI-powered suggestions for quizzes, revision topics, and next steps based on your progress.",
    },
  ];

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
                    Your Smart Learning Companion
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
                    Transform your academic experience with daily quizzes,
                    personalized revision plans, and streak-based
                    motivation—powered by AI to keep you on track.
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
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "center",
              }}
            >
              {/* First row: 3 cards */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 4,
                  width: "100%",
                }}
              >
                {features.slice(0, 3).map((feature, index) => (
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
                    <CardContent
                      sx={{ flexGrow: 1, textAlign: "center", p: 3 }}
                    >
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
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
              {/* Second row: 2 cards, centered */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr",
                    md: "repeat(2, 1fr)",
                  },
                  gap: 4,
                  width: { xs: "100%", md: "66.66%" },
                  mx: { md: "auto" },
                }}
              >
                {features.slice(3).map((feature, index) => (
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
                    <CardContent
                      sx={{ flexGrow: 1, textAlign: "center", p: 3 }}
                    >
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
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
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
                    Be among the first to revolutionize your learning journey
                    with SyllabusBuddy. Download the app today and start
                    building your study streak!
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
