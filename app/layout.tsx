import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlogHub - Your Gateway to Tech Excellence",
  description: "A modern blog platform featuring insightful articles, tutorials, and stories about technology, design, and development.",
  keywords: ["blog", "articles", "technology", "web development", "design", "programming", "tutorials"],
  authors: [{ name: "BlogHub Team" }],
  openGraph: {
    title: "BlogHub - Your Gateway to Tech Excellence",
    description: "Discover cutting-edge insights, tutorials, and stories from industry experts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogHub",
    description: "Your Gateway to Tech Excellence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
