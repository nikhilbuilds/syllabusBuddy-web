"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  Upload as UploadIcon,
  Analytics as AnalyticsIcon,
  CalendarToday as CalendarIcon,
  Settings as SettingsIcon,
  School as SchoolIcon,
  AutoGraph as AutoGraphIcon,
} from "@mui/icons-material";

export default function FeaturesPage() {
  const features = [
    {
      icon: <UploadIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Easy Syllabus Upload",
      description:
        "Simply upload your course syllabus in any format, and our AI will automatically extract and organize all the important information.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Smart Content Organization",
      description:
        "Your syllabus is transformed into an interactive learning plan with clear milestones, deadlines, and study recommendations.",
    },
    {
      icon: <CalendarIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Intelligent Scheduling",
      description:
        "Get personalized study schedules that adapt to your learning pace and help you stay on track with your coursework.",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Progress Tracking",
      description:
        "Monitor your learning progress with detailed analytics and insights to help you identify areas that need more attention.",
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "AI-Powered Recommendations",
      description:
        "Receive personalized study recommendations and resources based on your learning style and course requirements.",
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 40, color: "#0ff367" }} />,
      title: "Customizable Experience",
      description:
        "Tailor your learning experience with customizable settings, notifications, and study preferences.",
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
          Discover how SyllabusBuddy transforms your academic experience with
          powerful features designed to enhance your learning journey.
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
