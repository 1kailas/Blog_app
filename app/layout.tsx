import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Blog - Discover Amazing Stories",
  description: "A modern blog platform featuring insightful articles, tutorials, and stories about technology, design, and development.",
  keywords: ["blog", "articles", "technology", "web development", "design"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Modern Blog - Discover Amazing Stories",
    description: "A modern blog platform featuring insightful articles and tutorials",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Blog",
    description: "Discover amazing stories and insights",
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
          <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Modern Blog</h3>
                  <p className="text-gray-400">
                    Discover amazing stories and insights from our community of writers.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <p className="text-gray-400">
                    Stay connected with us on social media for the latest updates.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Modern Blog. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
