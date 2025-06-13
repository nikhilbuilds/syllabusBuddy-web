import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/utils/api";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Ensure we're running on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check authentication status
  useEffect(() => {
    if (!isMounted) return;

    const checkAuth = async () => {
      try {
        setIsLoading(true);
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch (error: any) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
        if (error.response?.status === 401) {
          router.push("/admin/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [isMounted, router]);

  return {
    isAuthenticated,
    isLoading,
    isMounted,
  };
}

export function useAuthRedirect() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Ensure we're running on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if already authenticated and redirect
  useEffect(() => {
    if (!isMounted) return;

    const checkAuth = async () => {
      try {
        await getCurrentUser();
        // If we get here, user is already authenticated
        router.push("/admin/dashboard");
      } catch (error) {
        // User is not authenticated, stay on login page
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [isMounted, router]);

  return {
    isCheckingAuth,
    isMounted,
  };
}
