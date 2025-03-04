import React from 'react';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
        Feel free to reach out for collaboration, consulting, or any inquiries.
      </p>
      <div className="space-y-4">
        <a href="mailto:your.email@example.com" className="text-lg text-blue-400 hover:underline">Email Me</a>
        <br />
        <a href="https://github.com/yourgithub" className="text-lg text-blue-400 hover:underline">GitHub</a>
        <br />
        <a href="https://linkedin.com/in/yourlinkedin" className="text-lg text-blue-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}
