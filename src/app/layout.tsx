import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalR.io - Grow your local business with 5-star reviews",
  description: "Mobile-first SaaS platform for local businesses to collect Google reviews, respond to feedback, and boost local SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
