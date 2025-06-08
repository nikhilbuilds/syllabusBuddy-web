"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#010f0f" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
        >
          SyllabusBuddy
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/features">
            Features
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          <Button color="inherit" component={Link} href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
