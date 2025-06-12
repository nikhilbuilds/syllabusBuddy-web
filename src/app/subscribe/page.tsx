"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { subscribeUser } from "@/utils/api";
import { AxiosError } from "axios";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await subscribeUser(email);
      setStatus("success");
      setMessage(
        "You have been added to the waitlist! We'll let you know when we launch."
      );
      setEmail("");
    } catch (error) {
      if (error instanceof AxiosError) {
        setStatus("error");
        setMessage(
          error.response?.data?.error ||
            "Something went wrong. Please try again."
        );
      } else {
        setStatus("error");
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#010f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          mb: 2,
          lineHeight: 1.2,
        }}
      >
        Revolutionize Your Study Routine!
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
          mt: 2,
          mb: 4,
          width: { xs: "90vw", sm: 600, md: 700 },
          maxWidth: "98vw",
        }}
      >
        <TextField
          type="email"
          placeholder="Your email for a free 6-month trial"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: {
              color: "#fff",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "8px",
              padding: "12px 16px",
            },
          }}
          sx={{
            width: "100%",
            flex: { sm: 1 },
            minWidth: { sm: 300 },
            input: {
              color: "#fff",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              padding: "0",
            },
          }}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          aria-label="Join our waitlist"
          sx={{
            width: { xs: "100%", sm: "auto" },
            background: "#0ff367",
            color: "#010f0f",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            padding: "0.75rem 1.5rem",
            "&:hover": { background: "#00e05c" },
          }}
        >
          Join our waitlist
        </Button>
      </Box>
      {message && (
        <Box
          sx={{
            mb: 3,
            p: 1.5,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            background:
              status === "success"
                ? "rgba(15, 243, 103, 0.1)"
                : "rgba(211, 47, 47, 0.1)",
            border: "1px solid",
            borderColor:
              status === "success"
                ? "rgba(15, 243, 103, 0.2)"
                : "rgba(211, 47, 47, 0.2)",
            width: { xs: "90vw", sm: 600, md: 700 },
            maxWidth: "98vw",
          }}
        >
          {status === "success" ? (
            <CheckCircleOutlineIcon sx={{ color: "#0ff367" }} />
          ) : (
            <ErrorOutlineIcon sx={{ color: "#d32f2f" }} />
          )}
          <Typography
            variant="body1"
            sx={{
              color: status === "success" ? "#0ff367" : "#d32f2f",
              fontWeight: 500,
            }}
          >
            {message}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          fontSize: { xs: "1rem", md: "1.2rem" },
          color: "#fff",
          textAlign: "center",
          maxWidth: 800,
          mb: 6,
          lineHeight: 1.6,
        }}
      >
        Join our waitlist today and get 6 months of free access to Syllabus
        Buddy — your personal learning assistant that breaks down any syllabus
        into a daily plan and quizzes you to success!
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: { xs: 2, sm: 3 },
          mb: 4,
          maxWidth: 1100,
          width: "100%",
        }}
      >
        <Box
          sx={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 1.5, sm: 2 },
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255,255,255,0.12)",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            sx={{
              background: "rgba(15, 243, 103, 0.1)",
              borderRadius: "50%",
              p: { xs: 1.5, sm: 2 },
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CalendarTodayIcon
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                color: "#0ff367",
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: 600 }}
            >
              Personalized daily study plans
            </Box>
            {/* <Box
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.8)",
                mt: 1,
              }}
            >
              Get customized study schedules tailored to your pace
            </Box> */}
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 1.5, sm: 2 },
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255,255,255,0.12)",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            sx={{
              background: "rgba(15, 243, 103, 0.1)",
              borderRadius: "50%",
              p: { xs: 1.5, sm: 2 },
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SchoolIcon
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                color: "#0ff367",
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: 600 }}
            >
              AI-generated quizzes
            </Box>
            {/* <Box
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.8)",
                mt: 1,
              }}
            >
              Smart quizzes that adapt to your learning progress
            </Box> */}
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 1.5, sm: 2 },
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255,255,255,0.12)",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            sx={{
              background: "rgba(15, 243, 103, 0.1)",
              borderRadius: "50%",
              p: { xs: 1.5, sm: 2 },
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TrendingUpIcon
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                color: "#0ff367",
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: 600 }}
            >
              Track progress & streaks
            </Box>
            {/* <Box
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.8)",
                mt: 1,
              }}
            >
              Monitor your learning journey and build study habits
            </Box> */}
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 1.5, sm: 2 },
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255,255,255,0.12)",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            sx={{
              background: "rgba(15, 243, 103, 0.1)",
              borderRadius: "50%",
              p: { xs: 1.5, sm: 2 },
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LanguageIcon
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                color: "#0ff367",
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: 600 }}
            >
              Hindi & English support
            </Box>
            {/* <Box
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.8)",
                mt: 1,
              }}
            >
              Learn in your preferred language for better understanding
            </Box> */}
          </Box>
        </Box>
      </Box>
      {/* <Box  
        sx={{
          mt: 2,
          color: "rgba(255,255,255,0.7)",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        No credit card required. Your data is safe with us.
      </Box> */}
    </Box>
  );
}
