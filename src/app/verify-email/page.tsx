"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";
import { verifyEmail } from "@/utils/api";
import { AxiosError } from "axios";
import Link from "next/link";

function VerifyEmailContent() {
  const searchParams = useSearchParams();

  const token = searchParams?.get("token") || null;

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token found.");
      return;
    }

    const verify = async () => {
      try {
        const response = await verifyEmail(token);
        setStatus("success");
        setMessage(response.message || "Email verified successfully!");
      } catch (error) {
        setStatus("error");
        if (error instanceof AxiosError) {
          setMessage(
            error.response?.data?.error ||
              "Invalid or expired verification token."
          );
        } else {
          setMessage("An unexpected error occurred. Please try again.");
        }
      }
    };

    verify();
  }, [token]);

  const renderStatus = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <CircularProgress sx={{ color: "#0ff367" }} />
            <Typography sx={{ mt: 2, color: "#fff" }}>
              Verifying your email...
            </Typography>
          </>
        );
      case "success":
        return (
          <>
            <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "#0ff367" }} />
            <Typography variant="h5" sx={{ mt: 2, color: "#fff" }}>
              {message}
            </Typography>
            <Link href={`syllabusbuddy://login`} passHref>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#0ff367",
                  color: "#010f0f",
                  "&:hover": { background: "#00e05c" },
                }}
              >
                Open in App
              </Button>
            </Link>
          </>
        );
      case "error":
        return (
          <>
            <ErrorOutlineIcon sx={{ fontSize: 60, color: "#d32f2f" }} />
            <Typography variant="h5" sx={{ mt: 2, color: "#d32f2f" }}>
              {message}
            </Typography>
            <Link href="/subscribe" passHref>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#0ff367",
                  color: "#010f0f",
                  "&:hover": { background: "#00e05c" },
                }}
              >
                Go to Homepage
              </Button>
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#010f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {renderStatus()}
    </Box>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<Loading />}>
      <VerifyEmailContent />
    </Suspense>
  );
}

function Loading() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#010f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <CircularProgress sx={{ color: "#0ff367" }} />
      <Typography sx={{ mt: 2, color: "#fff" }}>Loading...</Typography>
    </Box>
  );
}
