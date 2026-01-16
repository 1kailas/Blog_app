"use client";

import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="bg-white rounded-2xl shadow-md overflow-hidden card-hover group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.id}`} className="block">
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-600 text-white shadow-lg backdrop-blur-sm">
              {post.category}
            </span>
          </div>

          {/* Read Time Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900 shadow-lg">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <time 
            dateTime={post.date} 
            className="flex items-center gap-1.5 text-sm text-gray-500 mb-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author & CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900 block">
                  {post.author}
                </span>
                <span className="text-xs text-gray-500">Author</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
              <span>Read</span>
              <svg 
                className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
