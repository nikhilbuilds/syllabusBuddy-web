"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

export default function ContactPage() {
  const theme = useTheme();

  const contactInfo = {
    phone: "+918528907496", // Replace with your actual phone number
    email: "contact@syllabusbuddy.com", // Replace with your actual email
  };

  const handlePhoneClick = () => {
    // Format phone number for WhatsApp (remove any spaces, dashes, etc.)
    const formattedPhone = contactInfo.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${formattedPhone}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, "_blank");
  };

  return (
    <Box sx={{ backgroundColor: "#010f0f", minHeight: "100vh", pt: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            mb: 2,
            fontWeight: 700,
          }}
        >
          Contact Us
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
          Get in touch with us for any questions or support
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          {/* Phone Card */}
          <Card
            sx={{
              backgroundColor: "#010f0f",
              border: "1px solid rgba(15, 243, 103, 0.2)",
              borderRadius: 2,
              width: { xs: "100%", md: "300px" },
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "#0ff367",
                cursor: "pointer",
              },
            }}
            onClick={handlePhoneClick}
          >
            <CardContent sx={{ textAlign: "center", py: 4 }}>
              <IconButton
                sx={{
                  backgroundColor: "rgba(15, 243, 103, 0.1)",
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "rgba(15, 243, 103, 0.2)",
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 40, color: "#0ff367" }} />
              </IconButton>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <PhoneIcon sx={{ color: "#0ff367" }} />
                {contactInfo.phone}
              </Typography>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card
            sx={{
              backgroundColor: "#010f0f",
              border: "1px solid rgba(15, 243, 103, 0.2)",
              borderRadius: 2,
              width: { xs: "100%", md: "300px" },
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "#0ff367",
                cursor: "pointer",
              },
            }}
            onClick={handleEmailClick}
          >
            <CardContent sx={{ textAlign: "center", py: 4 }}>
              <IconButton
                sx={{
                  backgroundColor: "rgba(15, 243, 103, 0.1)",
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "rgba(15, 243, 103, 0.2)",
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 40, color: "#0ff367" }} />
              </IconButton>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <EmailIcon sx={{ color: "#0ff367" }} />
                {contactInfo.email}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
