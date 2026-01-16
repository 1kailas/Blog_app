# 🚀 BlogHub - Next.js Blog Application

A full-fledged, professionally designed blog application built with Next.js 14, featuring Server-Side Rendering (SSR), modern animations, and a beautiful responsive UI with Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Features
- **Server-Side Rendering (SSR)** - Homepage and blog posts are rendered on the server for optimal performance and SEO
- **Dynamic Routing** - Individual blog post pages with dynamic routes (`/blog/[id]`)
- **Search Functionality** - Real-time client-side search to filter posts by title, author, or tags
- **Category Filtering** - Filter posts by categories with an intuitive UI
- **React Query Integration** - Efficient data fetching and caching (ready for API integration)
- **Responsive Design** - Fully responsive UI that works beautifully on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Loading States** - Skeleton screens and loading indicators for better UX
- **Error Boundaries** - Graceful error handling with user-friendly error pages
- **SEO Optimized** - Automatic sitemap generation and robots.txt configuration

### 🎨 Design & UI
- **Animated Hero Section** - Eye-catching hero with gradient animations and floating elements
- **Enhanced Blog Cards** - Interactive cards with smooth hover effects and transitions
- **Sticky Navigation** - Header with backdrop blur and scroll effects
- **Newsletter Component** - Functional newsletter subscription with validation
- **Share Buttons** - Social media sharing on blog posts (Twitter, Facebook, LinkedIn)
- **Professional Footer** - Comprehensive footer with social links and navigation
- **Smooth Animations** - Fade-in, slide-up, and gradient animations throughout
- **Modern Typography** - Beautiful font hierarchy and first-letter styling
- **Glass Morphism** - Backdrop blur effects and translucent elements
- **Tailwind CSS** - Utility-first styling with custom theme configuration
- **Semantic HTML** - Proper HTML5 semantic elements for better structure
- **ARIA Labels** - Comprehensive accessibility attributes for screen readers
- **Keyboard Navigation** - Full keyboard accessibility support
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- **Fast Loading** - Optimized images with Next.js Image component

### 🛠️ Technical Implementation
- **TypeScript** - Full type safety throughout the application
- **Component Architecture** - Modular, reusable React components
- **Server Components** - Leveraging Next.js 14 App Router features
- **Client Components** - Strategic use of client-side interactivity
- **Mock API** - Simulated blog post data (ready for real API integration)

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
web/
├── app/                      # Next.js App Router
│   ├── blog/
│   │   └── [id]/            # Dynamic blog post pages
│   │       └── page.tsx
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage with SSR
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── BlogCard.tsx         # Individual blog post card
│   ├── BlogGrid.tsx         # Grid layout with filtering
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Providers.tsx        # React Query provider
│   └── SearchBar.tsx        # Search functionality
├── lib/
│   └── api.ts              # API functions and mock data
├── types/
│   └── blog.ts             # TypeScript type definitions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Key Components

### Homepage (`app/page.tsx`)
- Implements Server-Side Rendering
- Fetches blog posts on the server
- Passes initial data to client components

### Blog Post Page (`app/blog/[id]/page.tsx`)
- Dynamic routing for individual posts
- Server-Side Rendering for each post
- SEO optimization with dynamic metadata
- `generateStaticParams` for static generation

### BlogGrid Component
- Client-side search and filtering
- Category filtering with smooth transitions
- Responsive grid layout
- Empty state handling

### Search Functionality
- Real-time search across titles, authors, and tags
- Debounced input for better performance
- Clear search button for better UX

## 🔧 API Integration

The app currently uses mock data in `lib/api.ts`. To integrate with a real API:

### Option 1: MockAPI.io

1. Create an account at [mockapi.io](https://mockapi.io)
2. Create a new resource called `posts`
3. Add your blog post data
4. Update `lib/api.ts`:

```typescript
const API_URL = 'https://[your-id].mockapi.io/api/v1';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_URL}/posts`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  return response.json();
}
```

### Option 2: Your Own API

Update the API functions in `lib/api.ts` to point to your backend:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_URL}/posts`, {
    cache: 'no-store' // or 'force-cache' depending on your needs
  });
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}
```

## 🎯 Features Showcase

### ✅ Server-Side Rendering (SSR)
- Homepage renders blog posts on the server
- Individual blog posts use SSR for optimal SEO
- Dynamic metadata generation for each page

### ✅ Dynamic Routing
- Blog posts accessible via `/blog/[id]`
- Automatic route generation
- 404 handling for non-existent posts

### ✅ Search & Filter
- Real-time search functionality
- Category-based filtering
- Combined search and category filters

### ✅ React Query Ready
- Provider setup complete
- Configured with sensible defaults
- Ready for client-side data fetching

### ✅ SEO & Accessibility
- Semantic HTML elements (`<article>`, `<nav>`, `<main>`, etc.)
- ARIA labels for all interactive elements
- Meta tags for social media sharing
- Keyboard navigation support
- Focus indicators for accessibility

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Responsive navigation with mobile menu
- Optimized images for different screen sizes

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... add your colors
  },
}
```

### Typography
The app uses Inter font by default. Change it in `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
const yourFont = YourFont({ subsets: ["latin"] });
```

### Mock Data
Edit `lib/api.ts` to add more blog posts or modify existing ones.

## 📊 Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Server-Side Rendering for initial load
- ✅ React Query caching
- ✅ Tailwind CSS JIT compilation
- ✅ TypeScript for better code quality
- ✅ Lazy loading for images

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

```bash
npm run build
```

Then deploy the `.next` folder and `node_modules` to your hosting platform.

## 📝 Environment Variables (Optional)

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_SITE_URL=https://your-site.com
```

## 🧪 Testing Checklist

- [x] Homepage loads with all posts
- [x] Individual blog posts are accessible
- [x] Search functionality works correctly
- [x] Category filtering works
- [x] Combined search and filter works
- [x] Mobile navigation works
- [x] Images load properly
- [x] SEO meta tags are present
- [x] Accessibility with keyboard navigation
- [x] 404 page for non-existent posts

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

## 🎉 Acknowledgments

- Built for the Oronium Web Development Challenge
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- React Query team for the data fetching library

---

**⭐ 800 Karma Points Project - #cl-web-projectblog**

Made with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
