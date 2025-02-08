import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Federico Huneeus portfolio",
  description: "Federico Huneeus page",
  keywords: ["Federico Huneeus", "Portfolio", "Frontend developer", "Next.js"],
  openGraph: {
    title: "Federico Huneeus Portfolio",
    description:
      "Federico Huneeus personal portfolio showcasing skills, projects, and more.",
    url: "https://www.federicohuneeus.com",
    siteName: "Federico Huneeus Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Federico Huneeus",
              url: "https://https://www.federicohuneeus.com",
              sameAs: [
                "https://www.linkedin.com/in/federico-huneeus-garc%C3%ADa-a27b7354/",
                "https://github.com/federicohuneeus10",
              ],
            }),
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
