"use client";

import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    capture_pageview: false, // We'll handle this manually
  });
}

console.log(
  "process.env.NEXT_PUBLIC_POSTHOG_KEY",
  process.env.NEXT_PUBLIC_POSTHOG_KEY
);

function PostHogPageview() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip analytics for admin pages
    if (pathname?.startsWith("/admin")) {
      return;
    }

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
  const pathname = usePathname();

  // Don't render PostHog provider for admin pages
  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <Provider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageview />
      </Suspense>
      {children}
    </Provider>
  );
}
