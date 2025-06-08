"use client";

import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#010f0f", py: 3, mt: "auto" }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="white" align="center">
          © {new Date().getFullYear()} SyllabusBuddy. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
