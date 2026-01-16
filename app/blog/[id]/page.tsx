import { fetchBlogPost, fetchBlogPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchBlogPost(params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Modern Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await fetchBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500 text-white">
                {post.category}
              </span>
              <time className="text-white/90" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-xl text-white/90">{post.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-gray-600 text-sm">
                {post.readTime} • {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
