import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Handle 401 responses globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Authentication error detected");
      // Don't redirect here, let the component handle it
      // The component will check for 401 and redirect appropriately
    }
    return Promise.reject(error);
  }
);

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
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/user");
  return response.data;
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
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
  const response = await axios.post("/api/subscribe", { email });
  return response.data;
};

export const verifyEmail = async (token: string) => {
  const response = await axios.post(
    "https://api.syllabusbuddy.com/api/v1/onboarding/verify-email",
    { token }
  );
  return response.data;
};

export default api;
