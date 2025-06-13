"use client";

import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";

if (
  typeof window !== "undefined" &&
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1" &&
  process.env.NEXT_PUBLIC_ENABLE_POSTHOG === "true"
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    capture_pageview: false, // We'll handle this manually
  });
}

function PostHogPageview() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip analytics for admin pages
    console.log("pathname", pathname);
    if (pathname?.startsWith("/admin")) {
      console.log("skipping analytics for admin page");
      return;
    }
    console.log("capturing pageview for", pathname);

    if (pathname) {
      let url = window.origin + pathname;
      if (typeof window !== "undefined") {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.toString()) {
          url = url + `?${searchParams.toString()}`;
        }
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageview />
      </Suspense>
      {children}
    </Provider>
  );
}
