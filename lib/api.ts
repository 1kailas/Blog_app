import { BlogPost } from "@/types/blog";

// API Configuration
// To use MockAPI.io: Create a .env.local file and add:
// NEXT_PUBLIC_API_URL=https://your-id.mockapi.io/api/v1
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const USE_MOCK_DATA = !API_URL; // Use mock data if no API URL is configured

// Mock data - Used when no API URL is configured
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14 and Server Components",
    excerpt: "Learn how to build modern web applications with Next.js 14's new App Router and Server Components for better performance and SEO.",
    content: `Next.js 14 introduces powerful features that revolutionize how we build web applications. Server Components allow us to render components on the server, reducing the JavaScript bundle size sent to the client and improving initial page load times.

The App Router provides a more intuitive file-based routing system with built-in layouts, loading states, and error boundaries. This makes it easier to create complex application structures while maintaining clean code organization.

Server-Side Rendering (SSR) in Next.js 14 is more efficient than ever. By default, components are Server Components, which means they run on the server and send only the necessary HTML to the client. This results in faster page loads and better SEO performance.

One of the most exciting features is the ability to mix Server and Client Components seamlessly. You can keep most of your application as Server Components and only use Client Components when you need interactivity or browser-specific APIs.

The new streaming architecture allows you to show parts of your page as soon as they're ready, rather than waiting for the entire page to load. This creates a more responsive user experience and reduces perceived loading times.

Data fetching in Next.js 14 is also simplified with async/await support directly in Server Components. You can fetch data where you need it without prop drilling or complex state management solutions.`,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop",
    tags: ["Next.js", "React", "Web Development", "SSR"]
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Tips and Tricks for 2024",
    excerpt: "Discover advanced Tailwind CSS techniques to create beautiful, responsive designs with minimal custom CSS.",
    content: `Tailwind CSS has transformed the way we approach styling in modern web development. Its utility-first approach allows developers to build custom designs without leaving their HTML.

Understanding the configuration file is crucial for customizing Tailwind to match your design system. You can extend the default theme with custom colors, spacing, fonts, and more. This ensures consistency across your entire application.

Responsive design in Tailwind is incredibly intuitive. The mobile-first breakpoint system lets you add responsive classes directly in your markup, making it easy to see how your design adapts across different screen sizes.

Dark mode support is built into Tailwind, allowing you to create theme-aware applications with minimal effort. Simply use the 'dark:' prefix on your utility classes to define dark mode styles.

Component extraction is important when working with Tailwind. While utility classes are powerful, extracting commonly used patterns into components keeps your code DRY and maintainable. You can use @apply directive or create React/Vue components.

Performance optimization is key when using Tailwind. The JIT (Just-In-Time) compiler generates only the CSS you're actually using, resulting in tiny production builds. Combined with PurgeCSS, you can achieve incredibly small CSS files.`,
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=800&fit=crop",
    tags: ["Tailwind CSS", "CSS", "Design", "Frontend"]
  },
  {
    id: "3",
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt: "A comprehensive guide to creating robust, type-safe REST APIs that can handle millions of requests.",
    content: `Building scalable APIs requires careful planning and the right technology choices. Node.js combined with TypeScript provides an excellent foundation for creating robust backend services.

TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. This is especially valuable in large codebases where type safety can prevent entire classes of bugs and make refactoring much safer.

Express.js remains one of the most popular frameworks for building APIs in Node.js. Its middleware architecture makes it easy to add functionality like authentication, logging, and error handling in a modular way.

Database design is crucial for API performance. Whether you choose SQL or NoSQL depends on your data structure and query patterns. PostgreSQL offers excellent performance and features, while MongoDB provides flexibility for rapidly changing schemas.

Authentication and authorization are critical for any API. JWT (JSON Web Tokens) provide a stateless way to authenticate users, while role-based access control ensures users can only access resources they're authorized for.

Error handling should be consistent and informative. Use proper HTTP status codes, provide meaningful error messages, and log errors for debugging. Middleware can centralize error handling logic.

Testing is essential for maintaining API quality. Unit tests verify individual functions, integration tests check component interactions, and end-to-end tests ensure the entire system works correctly.`,
    author: "David Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    tags: ["Node.js", "TypeScript", "API", "Backend"]
  },
  {
    id: "4",
    title: "React Query: Simplifying Data Fetching in React",
    excerpt: "Learn how React Query transforms data fetching, caching, and state management in React applications.",
    content: `React Query has revolutionized how we handle server state in React applications. It eliminates the need for complex state management solutions for server data by providing powerful caching and synchronization features.

The library handles caching automatically, storing fetched data and serving it from cache on subsequent requests. This dramatically improves performance and reduces unnecessary network requests.

Background refetching keeps your data fresh without user intervention. React Query can automatically refetch data when the window regains focus, when the network reconnects, or at specified intervals.

Optimistic updates allow you to update the UI immediately when the user performs an action, then reconcile with the server response. This creates a snappy user experience even on slow networks.

Infinite scrolling and pagination are trivial to implement with React Query's useInfiniteQuery hook. It handles all the complexity of fetching and merging pages of data.

Error handling and retry logic are built-in. If a request fails, React Query will automatically retry with exponential backoff, and you can easily display error states in your UI.

DevTools provide invaluable insight into your queries. You can see all active queries, their cache status, and manually trigger refetches or invalidations for debugging.`,
    author: "Emily Watson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=800&fit=crop",
    tags: ["React", "React Query", "State Management", "Frontend"]
  },
  {
    id: "5",
    title: "Web Accessibility: Building Inclusive Applications",
    excerpt: "Essential practices for creating web applications that everyone can use, regardless of their abilities.",
    content: `Web accessibility is not just a nice-to-have feature; it's a fundamental requirement for inclusive web development. Making your applications accessible ensures that people with disabilities can use them effectively.

Semantic HTML is the foundation of accessibility. Using appropriate HTML elements like header, nav, main, and article helps screen readers understand your page structure. Buttons should be button elements, not divs with click handlers.

ARIA (Accessible Rich Internet Applications) attributes enhance HTML semantics when native elements fall short. However, the first rule of ARIA is to avoid using it if a native HTML element will work.

Keyboard navigation is crucial for users who can't use a mouse. Every interactive element should be reachable and operable via keyboard. The tab order should be logical, and focus indicators should be clearly visible.

Color contrast matters for users with visual impairments. WCAG guidelines specify minimum contrast ratios between text and background. Tools like the WebAIM contrast checker can help ensure your color choices are accessible.

Alternative text for images allows screen reader users to understand visual content. Every img element should have meaningful alt text, or an empty alt attribute if the image is purely decorative.

Testing with assistive technologies is the best way to ensure your application is truly accessible. Use screen readers like NVDA or JAWS, test keyboard navigation, and run automated accessibility audits.`,
    author: "James Miller",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop",
    tags: ["Accessibility", "A11y", "Web Development", "UX"]
  },
  {
    id: "6",
    title: "Modern CSS: Grid and Flexbox in Practice",
    excerpt: "Master CSS Grid and Flexbox to create complex, responsive layouts with ease and confidence.",
    content: `CSS Grid and Flexbox are powerful layout tools that have transformed how we build web interfaces. Understanding when and how to use each is key to efficient CSS development.

Flexbox excels at one-dimensional layouts, whether rows or columns. It's perfect for navigation bars, card layouts, and centering content. The flex container controls how its children are distributed and aligned.

CSS Grid is designed for two-dimensional layouts, handling both rows and columns simultaneously. It's ideal for page layouts, image galleries, and any design where you need precise control over both dimensions.

Grid template areas provide an intuitive way to define layouts. You can literally draw your layout in CSS, making it easy to visualize and maintain complex page structures.

Responsive design is simpler with these tools. Grid's auto-fit and auto-fill functions create responsive layouts without media queries. Flexbox naturally adapts to content size and container width.

Combining Grid and Flexbox is often the best approach. Use Grid for the overall page structure, then use Flexbox for component-level layouts. This leverages the strengths of both systems.

Browser support is excellent for both Grid and Flexbox. Modern browsers have full support, and fallbacks are straightforward for older browsers if needed.`,
    author: "Lisa Anderson",
    date: "2024-01-03",
    readTime: "8 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=1200&h=800&fit=crop",
    tags: ["CSS", "Grid", "Flexbox", "Layout", "Frontend"]
  }
];

// Simulate API delay for mock data
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch all blog posts (Server-Side)
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (USE_MOCK_DATA) {
    // Use mock data
    await delay(100);
    return mockPosts;
  }

  // Fetch from real API
  try {
    const response = await fetch(`${API_URL}/posts`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Fallback to mock data on error
    return mockPosts;
  }
}

// Fetch single blog post (Server-Side)
export async function fetchBlogPost(id: string): Promise<BlogPost | null> {
  if (USE_MOCK_DATA) {
    // Use mock data
    await delay(100);
    const post = mockPosts.find(post => post.id === id);
    return post || null;
  }

  // Fetch from real API
  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      next: { revalidate: 60 },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog post ${id}:`, error);
    // Fallback to mock data on error
    const post = mockPosts.find(post => post.id === id);
    return post || null;
  }
}

// For client-side React Query usage
export async function fetchBlogPostsClient(): Promise<BlogPost[]> {
  if (USE_MOCK_DATA) {
    await delay(300);
    return mockPosts;
  }

  // Fetch from real API
  const response = await fetch(`${API_URL}/posts`);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return await response.json();
}
