import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhilash Jhaji | Senior Software Engineer",
  description: "Senior Software Engineer specializing in Android & Flutter development with 5+ years of experience in system performance tuning, BLE integration, and AI-powered solutions.",
  keywords: ["Android Developer", "Flutter Developer", "Kotlin", "Mobile App Development", "Software Engineer", "Hyderabad", "India"],
  authors: [{ name: "Abhilash Jhaji" }],
  openGraph: {
    title: "Abhilash Jhaji | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Android & Flutter development with 5+ years of experience.",
    type: "website",
    url: "https://abhilashjha.com",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abhilash Jhaji - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhilash Jhaji | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Android & Flutter development with 5+ years of experience.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
