import { fetchBlogPosts } from "@/lib/api";
import BlogGrid from "@/components/BlogGrid";
import Hero from "@/components/Hero";
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
      <section className="container-custom py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-lg text-gray-600">
            Discover our latest blog posts covering technology, design, and development.
          </p>
        </div>
        <BlogGrid initialPosts={posts} />
      </section>
    </div>
  );
}
