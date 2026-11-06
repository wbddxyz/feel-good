import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feel Good | A Little Space for Yourself",
  description:
    "Take a moment for yourself. Check in with your mood, enjoy a positive reminder and follow a calming breathing exercise.",
  applicationName: "Feel Good",
  keywords: ["wellbeing", "mindfulness", "breathing exercise", "positive reflections"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
