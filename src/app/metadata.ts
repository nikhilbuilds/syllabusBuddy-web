import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://syllabusbuddy.com"),
  title: {
    default: "SyllabusBuddy - Your AI-Powered Syllabus Management Assistant",
    template: "%s | SyllabusBuddy",
  },
  description:
    "Transform your academic experience with SyllabusBuddy. Upload, analyze, and manage your course syllabi with AI-powered insights and smart organization.",
  keywords: [
    "syllabus management",
    "AI education",
    "course organization",
    "academic planning",
    "student tools",
  ],
  authors: [{ name: "SyllabusBuddy Team" }],
  creator: "SyllabusBuddy",
  publisher: "SyllabusBuddy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syllabusbuddy.com",
    siteName: "SyllabusBuddy",
    title: "SyllabusBuddy - Your AI-Powered Syllabus Management Assistant",
    description:
      "Transform your academic experience with SyllabusBuddy. Upload, analyze, and manage your course syllabi with AI-powered insights and smart organization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SyllabusBuddy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyllabusBuddy - Your AI-Powered Syllabus Management Assistant",
    description:
      "Transform your academic experience with SyllabusBuddy. Upload, analyze, and manage your course syllabi with AI-powered insights and smart organization.",
    creator: "@syllabusbuddy",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};
