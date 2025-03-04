import React from 'react';

export default function HomePage() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Senior Data Analytics Professional</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-6">
          Passionate about Data Science, AI, Machine Learning, Software Engineering, and AI-powered applications.
        </p>
        <div className="flex space-x-4">
          <a href="/projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg">View Projects</a>
          <a href="/blog" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg">Read Blog</a>
        </div>
      </section>
    );
  }
  