import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

interface CurrentAffair {
  id: string;
  headline: string;
  summary: string;
  keywords: string[];
  relatedTopics: string[];
  checked?: boolean;
  isImportant?: boolean;
}

export const login = async (email: string, password: string) => {
  const response = await api.post("/users/login", { email, password });
  return response.data;
};

export const logout = async () => {
  try {
    await api.post("/users/logout");
    // Clear any client-side auth state if needed
    return true;
  } catch (error) {
    console.error("Logout failed:", error);
    return false;
  }
};

export const uploadCurrentAffairs = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/admin/current-affairs/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const submitCurrentAffairs = async (currentAffairs: CurrentAffair[]) => {
  const response = await api.post("/admin/current-affairs/create", {
    currentAffairs,
  });

  console.log("Response:", response.data);
  return response.data;
};

export const subscribeUser = async (email: string) => {
  const response = await api.post("/users/subscribe", { email });
  return response.data;
};

export default api;
