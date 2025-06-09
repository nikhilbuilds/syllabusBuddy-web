"use client";

import { useState } from "react";
import {
  logout,
  submitCurrentAffairs,
  uploadCurrentAffairs,
} from "@/utils/api";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Alert,
  Chip,
  CircularProgress,
  Card,
  CardContent,
  Stack,
  TextField,
  Checkbox,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

interface CurrentAffair {
  id: string;
  headline: string;
  summary: string;
  keywords: string[];
  relatedTopics: string[];
  checked?: boolean;
  isImportant?: boolean;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentAffairs, setCurrentAffairs] = useState<CurrentAffair[]>([]);
  const [editingAffair, setEditingAffair] = useState<CurrentAffair | null>(
    null
  );
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }

    setUploading(true);
    setError("");
    setSuccess("");

    try {
      const response = await uploadCurrentAffairs(file);
      setSuccess(response.message);
      if (response.currentAffairs) {
        setCurrentAffairs(
          response.currentAffairs.map((affair: CurrentAffair) => ({
            ...affair,
            checked: false,
            isImportant: false,
          }))
        );
      }
      setFile(null);
    } catch (err) {
      setError("Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  const handleCheckboxChange = (index: number) => {
    setCurrentAffairs((prev) =>
      prev.map((affair, idx) =>
        idx === index
          ? {
              ...affair,
              checked: !affair.checked,
              isImportant: !affair.checked,
            }
          : affair
      )
    );
  };

  const handleEditClick = (affair: CurrentAffair) => {
    setEditingAffair(affair);
    setEditDialogOpen(true);
  };

  const handleEditSave = () => {
    if (editingAffair) {
      setCurrentAffairs((prev) =>
        prev.map((affair) =>
          affair.id === editingAffair.id
            ? { ...editingAffair, isImportant: affair.isImportant }
            : affair
        )
      );
    }

    console.log("Editing affair:", editingAffair);
    setEditDialogOpen(false);
    setEditingAffair(null);
  };

  const handleDelete = (headline: string) => {
    setCurrentAffairs((prev) =>
      prev.filter((affair) => affair.headline !== headline)
    );
  };

  const handleSubmitSelectedAffairs = async () => {
    await submitCurrentAffairs(currentAffairs);
  };

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        {/* logout button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: "#0ff367" }}
        >
          Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Upload and manage current affairs
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#010f0f",
          borderRadius: 2,
          border: "1px solid #0ff367",
        }}
      >
        <Box
          component="form"
          onSubmit={handleUpload}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            component="label"
            variant="outlined"
            color="success"
            startIcon={<CloudUploadIcon color="success" />}
            sx={{ mb: 2, color: "#0ff367" }}
          >
            Choose PDF File
            <input
              type="file"
              hidden
              accept=".pdf"
              onChange={handleFileChange}
            />
          </Button>

          {file && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Selected file: {file.name}
            </Typography>
          )}

          {error && (
            <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ width: "100%", mb: 2 }}>
              {success}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            disabled={!file || uploading}
            color="success"
            sx={{ minWidth: 200 }}
          >
            {uploading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Upload PDF"
            )}
          </Button>
        </Box>
      </Paper>

      {currentAffairs.length > 0 && (
        <Box>
          <Typography variant="h4" gutterBottom>
            Current Affairs
          </Typography>
          <Stack spacing={3}>
            {currentAffairs.map((affair, index) => (
              <Card key={index}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Checkbox
                      checked={affair.checked}
                      onChange={() => handleCheckboxChange(index)}
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      {affair.headline}
                    </Typography>
                    <IconButton onClick={() => handleEditClick(affair)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(affair.headline)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {affair.summary}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Keywords:
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {affair.keywords.map((keyword, idx) => (
                        <Chip
                          key={idx}
                          label={keyword}
                          color="primary"
                          size="small"
                        />
                      ))}
                    </Stack>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Related Topics:
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {affair.relatedTopics.map((topic, idx) => (
                        <Chip
                          key={idx}
                          label={topic}
                          color="secondary"
                          size="small"
                        />
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmitSelectedAffairs}
            >
              Submit Selected Affairs
            </Button>
          </Box>
        </Box>
      )}

      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit Current Affair</DialogTitle>
        <DialogContent>
          {editingAffair && (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Headline"
                value={editingAffair.headline}
                onChange={(e) =>
                  setEditingAffair({
                    ...editingAffair,
                    headline: e.target.value,
                  })
                }
                margin="normal"
              />
              <TextField
                fullWidth
                label="Summary"
                value={editingAffair.summary}
                onChange={(e) =>
                  setEditingAffair({
                    ...editingAffair,
                    summary: e.target.value,
                  })
                }
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                fullWidth
                label="Keywords (comma-separated)"
                value={editingAffair.keywords.join(", ")}
                onChange={(e) =>
                  setEditingAffair({
                    ...editingAffair,
                    keywords: e.target.value.split(", ").map((k) => k.trim()),
                  })
                }
                margin="normal"
              />
              <TextField
                fullWidth
                label="Related Topics (comma-separated)"
                value={editingAffair.relatedTopics.join(", ")}
                onChange={(e) =>
                  setEditingAffair({
                    ...editingAffair,
                    relatedTopics: e.target.value
                      .split(", ")
                      .map((t) => t.trim()),
                  })
                }
                margin="normal"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
