export default function Loading() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] w-full bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-32 bg-gray-300 rounded"></div>
            </div>
            <div className="h-12 w-3/4 bg-gray-300 rounded mb-4"></div>
            <div className="h-8 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Skeleton */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200 mb-8">
            <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"></div>
            <div>
              <div className="h-6 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </article>
  );
}
