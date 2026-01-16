export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
      <div className="container-custom py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Amazing
            <br />
            <span className="text-primary-200">Stories & Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            Explore our collection of insightful articles about technology, design,
            and web development. Learn from industry experts and level up your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#articles"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Start Reading
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-colors duration-200"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-gradient-to-b from-transparent to-gray-50" />
    </section>
  );
}
