import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "../components/ui/container";

const solutionCategories = [
  {
    title: "AI Content Creation",
    solutions: [
      {
        name: "Subtilo",
        description: "AI-powered video transcription & subtitles",
        features: [
          "99% accuracy in 100+ languages",
          "Real-time translation",
          "Custom voice cloning",
        ],
        status: "live",
        metrics: "Processing 10,000+ minutes daily"
      }
    ]
  },
  {
    title: "Business Automation",
    solutions: [
      {
        name: "AI Chatbots",
        description: "24/7 customer support automation",
        features: [
          "Natural language understanding",
          "Multi-platform integration",
          "Custom knowledge base",
        ],
        status: "beta",
        metrics: "Handling 5,000+ queries daily"
      }
    ]
  },
  {
    title: "Workflow Optimization",
    solutions: [
      {
        name: "Process Automation",
        description: "Custom AI workflows",
        features: [
          "80% reduction in manual tasks",
          "Cross-platform integration",
          "Real-time analytics",
        ],
        status: "development",
        timeline: "Launch: Q2 2024"
      }
    ]
  }
];

export const metadata: Metadata = {
  title: "Solutions",
  description: "GenixTech Solutions",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <Container>
        <h1 className="text-4xl font-bold mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          AI Solutions Portfolio
        </h1>
        
        <div className="space-y-20">
          {solutionCategories.map((category) => (
            <section key={category.title} className="space-y-8">
              <h2 className="text-2xl font-semibold text-violet-300">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.solutions.map((solution) => (
                  <div 
                    key={solution.name}
                    className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium text-violet-400">
                        {solution.name}
                      </h3>
                      <span className={`
                        px-2 py-1 text-xs rounded-full
                        ${solution.status === 'live' ? 'bg-emerald-500/20 text-emerald-400' : 
                          solution.status === 'beta' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-violet-500/20 text-violet-400'}
                      `}>
                        {solution.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <ul className="space-y-2 mb-4">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-gray-400 flex items-center gap-2">
                          <span className="text-violet-400">▹</span> {feature}
                        </li>
                      ))}
                    </ul>
                    {solution.metrics && (
                      <div className="text-sm text-violet-300 mt-4">
                        📈 {solution.metrics}
                      </div>
                    )}
                    {solution.timeline && (
                      <div className="text-sm text-violet-300 mt-4">
                        🚀 {solution.timeline}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
