"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import QuizIcon from "@mui/icons-material/Quiz";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function FeaturesPage() {
  const features = [
    {
      icon: <DescriptionIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Syllabus Parsing",
      description:
        "Upload your course syllabus in any format. Our AI instantly extracts topics, milestones, and deadlines so you can focus on studying.",
    },
    {
      icon: <QuizIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Quiz Generator",
      description:
        "Create daily quizzes automatically aligned with your topics to make learning interactive and fun.",
    },
    {
      icon: <WhatshotIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Streak Tracker",
      description:
        "Keep your motivation high with streaks that record your consistent progress.",
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Progress Analytics",
      description:
        "Visual dashboards to help you track strengths, weaknesses, and areas that need more attention.",
    },
    {
      icon: <EventRepeatIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Revision Planner",
      description:
        "AI-powered reminders and study plans to ensure you never miss an important topic.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Gamification & Rewards",
      description:
        "Earn badges, milestones, and unlock achievements as you complete your goals.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#010f0f", minHeight: "100vh", pt: 8 }}>
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            mb: 2,
            fontWeight: 700,
          }}
        >
          Features
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            mb: 8,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Features Designed to Elevate Your Learning
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  backgroundColor: "#010f0f",
                  border: "1px solid rgba(15, 243, 103, 0.2)",
                  borderRadius: 2,
                  height: "100%",
                  transition: "transform 0.2s",
                  mb: { xs: 3, md: 0 },
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#0ff367",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
