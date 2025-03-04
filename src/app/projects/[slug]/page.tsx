
import React from "react";
import { useParams } from "next/navigation";

const projectDetails = {
  "diagnostic-assistant": {
    title: "Image-Based Diagnostic Assistant",
    description: "An AI-powered system for brain MRI classification and segmentation, leveraging EfficientNet and UNet++ with ResNet34.",
  },
  "fantasy-optimizer": {
    title: "Fantasy Sports Optimizer",
    description: "AI-driven player performance prediction for NFL and NBA, integrating Sleeper & ESPN API data.",
  },
  "vet360-ai": {
    title: "Vet360 AI",
    description: "A veterinary healthcare platform utilizing AI for predictive analytics and adverse drug reaction monitoring.",
  },
  "ml-matrix": {
    title: "ML Matrix Newsletter",
    description: "An AI-powered content generation platform providing ML and AI insights, built using Flask & Next.js.",
  },
  "healthcare-disparity": {
    title: "Healthcare Disparity Analysis",
    description: "A data-driven study analyzing healthcare inequality in different communities.",
  },
  "misinformation-detector": {
    title: "Real-Time Misinformation Detector",
    description: "AI-powered misinformation detection system for verifying online content in real-time.",
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 text-lg">{project.description}</p>
      </div>
    </section>
  );
}
