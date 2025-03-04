import React from "react";
import Link from "next/link";

const projects = [
  { title: "Image-Based Diagnostic Assistant", slug: "diagnostic-assistant", description: "AI-powered brain MRI classification and segmentation." },
  { title: "Fantasy Sports Optimizer", slug: "fantasy-optimizer", description: "AI-powered player performance prediction using XGBoost." },
  { title: "Vet360 AI", slug: "vet360-ai", description: "AI platform for veterinary healthcare and predictive analytics." },
  { title: "ML Matrix Newsletter", slug: "ml-matrix", description: "AI-powered content generation for data science and AI trends." },
  { title: "Healthcare Disparity Analysis", slug: "healthcare-disparity", description: "Data-driven insights on healthcare inequality." },
  { title: "Real-Time Misinformation Detector", slug: "misinformation-detector", description: "AI system for detecting misinformation in real-time." }
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
