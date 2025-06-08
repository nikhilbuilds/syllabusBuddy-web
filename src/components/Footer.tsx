"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { text: "Features", href: "/features" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  return (
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
              Your AI-powered learning companion for better organization, daily
              quizzes, and progress tracking.
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
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Email:{" "}
              <a
                href="mailto:support@syllabusbuddy.com"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                support@syllabusbuddy.com
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone:{" "}
              <a
                href="https://wa.me/918528907496"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                8528907496
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
