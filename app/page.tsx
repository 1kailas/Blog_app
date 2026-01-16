import { fetchBlogPosts } from "@/lib/api";
import BlogGrid from "@/components/BlogGrid";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Modern Blog",
  description: "Explore our collection of insightful articles and tutorials",
};

export default async function Home() {
  // Server-Side Rendering: Fetch posts on the server
  const posts = await fetchBlogPosts();

  return (
    <div>
      <Hero />
      <section className="container-custom py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest blog posts covering technology, design, and development.
            Stay updated with cutting-edge insights and tutorials.
          </p>
        </div>
        <BlogGrid initialPosts={posts} />
      </section>
      <Newsletter />
    </div>
  );
}
