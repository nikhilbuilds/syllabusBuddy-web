"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Upload as UploadIcon,
  Analytics as AnalyticsIcon,
  CalendarToday as CalendarIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Features", href: "/features" },
    // { text: "Pricing", href: "/pricing" }, // Commented out as everything is free
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        SyllabusBuddy
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "#010f0f",
          borderBottom: "1px solid rgba(15, 243, 103, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                textDecoration: "none",
                color: "#0ff367",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                src="/logo.png"
                alt="SyllabusBuddy"
                width={32}
                height={32}
              />
              SyllabusBuddy
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    href={item.href}
                    color="inherit"
                    sx={{
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(15, 243, 103, 0.1)",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>

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
                    background: "linear-gradient(45deg, #fff 30%, #e3f2fd 90%)",
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
                  Transform your academic experience with smart organization and
                  AI-powered insights
                </Typography>
                <Stack direction="row" spacing={2}>
                  {/* <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href="/signup"
                    sx={{
                      backgroundColor: "white",
                      color: "primary.main",
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    Get Started
                  </Button> */}
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
                  Join thousands of students who are already using SyllabusBuddy
                  to enhance their learning experience.
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

        <Box
          component="footer"
          sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  SyllabusBuddy
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Your AI-powered academic companion for better organization and
                  success.
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  {menuItems.map((item) => (
                    <Link
                      key={item.text}
                      href={item.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                          transition: "color 0.2s ease-in-out",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Contact
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Email: support@syllabusbuddy.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: 8528907496
                </Typography>
              </Box>
            </Box>
            {/* <Box
              sx={{
                mt: 4,
                pt: 4,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} SyllabusBuddy. All rights reserved.
              </Typography>
            </Box> */}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
