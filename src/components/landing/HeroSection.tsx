import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #1a237e 30%, #311b92 90%)",
        color: "white",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(45deg, #fff 30%, #e3f2fd 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your AI-Powered Syllabus Management Assistant
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, color: "rgba(255, 255, 255, 0.9)" }}
            >
              Transform your academic experience with smart organization and
              AI-powered insights
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/signup"
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/features"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
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
                src="/hero-image.png"
                alt="SyllabusBuddy Platform"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
