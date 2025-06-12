import posthog from "posthog-js";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}
console.log(
  "process.env.NEXT_PUBLIC_POSTHOG_KEY",
  process.env.NEXT_PUBLIC_POSTHOG_KEY
);
export default posthog;
