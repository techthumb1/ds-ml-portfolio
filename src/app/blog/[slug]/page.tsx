import React from "react";
import { useParams } from "next/navigation";

const blogPosts = {
  "ai-medicine": {
    title: "The Future of AI in Medicine",
    content: "Artificial Intelligence is transforming healthcare, enabling more accurate diagnoses and personalized treatments...",
  },
  "fantasy-sports-ai": {
    title: "Optimizing Fantasy Sports with Machine Learning",
    content: "Machine learning algorithms can provide competitive insights into fantasy sports strategies by analyzing player performance trends...",
  },
  "ai-ethics": {
    title: "Ethics in AI: Balancing Innovation and Responsibility",
    content: "As AI becomes more powerful, ethical considerations such as bias, privacy, and accountability must be addressed...",
  },
  "federated-learning-finance": {
    title: "Federated Learning for Financial Forecasting",
    content: "Federated learning allows multiple financial institutions to collaborate on AI models without sharing raw data, improving security and insights...",
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 text-lg">{post.content}</p>
      </div>
    </section>
  );
}
