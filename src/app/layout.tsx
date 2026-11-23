
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ampelly Sri Charan | Portfolio",
  description:
    "Personal portfolio of Ampelly Sri Charan, B.Tech Computer Science and Data Science student at Malla Reddy Technical Campus. Explore my projects, technical skills, and education.",
  keywords: [
    "Ampelly Sri Charan",
    "Sri Charan Portfolio",
    "Data Science",
    "Machine Learning",
    "Web Development",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Ampelly Sri Charan" }],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
