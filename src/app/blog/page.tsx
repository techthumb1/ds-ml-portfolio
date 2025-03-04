import React from "react";
import Link from "next/link";

const blogPosts = [
  { title: "The Future of AI in Medicine", slug: "ai-medicine", description: "How AI is revolutionizing healthcare diagnostics and treatment." },
  { title: "Optimizing Fantasy Sports with Machine Learning", slug: "fantasy-sports-ai", description: "Using AI models to gain an edge in fantasy sports leagues." },
  { title: "Ethics in AI: Balancing Innovation and Responsibility", slug: "ai-ethics", description: "Understanding the ethical challenges in AI development." },
  { title: "Federated Learning for Financial Forecasting", slug: "federated-learning-finance", description: "How federated learning is changing stock and crypto trading." }
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
