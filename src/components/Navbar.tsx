"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
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
import { Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Features", href: "/features" },
    { text: "About", href: "/about" },
    { text: "Subscribe", href: "/subscribe" },
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
    <>
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
                sx={{ color: "white" }}
              >
                <MenuIcon sx={{ color: "#fff" }} />
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
            backgroundColor: "#010f0f",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
