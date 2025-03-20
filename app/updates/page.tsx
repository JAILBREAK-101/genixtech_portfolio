import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "../components/ui/container";
import { Button } from "../components/ui/Button";

export const metadata: Metadata = {
  title: "Updates & Research",
  description: "Latest developments and learning progress in AI web development",
};

const updates = [
  {
    category: "Current Learning",
    items: [
      {
        title: "AI Integration Fundamentals",
        date: "March 2024",
        type: "study",
        description: "Deep diving into OpenAI API integration and RAG implementations",
        links: [
          {
            text: "Study Notes",
            url: "/blog/ai-integration-notes"
          }
        ],
        tags: ["OpenAI", "RAG", "Vector DB"]
      },
      {
        title: "Next.js Advanced Patterns",
        date: "February 2024",
        type: "study",
        description: "Exploring server components, streaming, and edge runtime",
        tags: ["Next.js", "React", "Performance"]
      }
    ]
  },
  {
    category: "Project Progress",
    items: [
      {
        title: "Portfolio Site Development",
        date: "Ongoing",
        type: "project",
        description: "Building and iterating on my personal portfolio site",
        progress: 75,
        milestones: [
          "✓ Core pages structure",
          "✓ Responsive design",
          "→ AI integration features",
          "→ Blog section"
        ]
      }
    ]
  },
  {
    category: "Upcoming Plans",
    items: [
      {
        title: "AI Chat Implementation",
        date: "Q2 2024",
        type: "planned",
        description: "Building a context-aware chat interface with RAG",
        tags: ["OpenAI", "Next.js", "TypeScript"]
      }
    ]
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Page Header */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Development Updates
            </h1>
            <p className="text-lg text-violet-200">
              Tracking my journey in AI-enhanced web development
            </p>
          </section>

          {/* Updates Timeline */}
          <div className="space-y-12">
            {updates.map((category) => (
              <section key={category.category} className="space-y-6">
                <h2 className="text-2xl font-semibold text-violet-300">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div 
                      key={item.title}
                      className="p-6 bg-slate-900/50 rounded-lg border border-violet-500/20"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-medium text-violet-400">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {item.date}
                          </p>
                        </div>
                        <span className={`
                          px-2 py-1 text-xs rounded-full
                          ${item.type === 'study' ? 'bg-blue-500/20 text-blue-400' :
                            item.type === 'project' ? 'bg-emerald-500/20 text-emerald-400' :
                            'bg-violet-500/20 text-violet-400'}
                        `}>
                          {item.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">
                        {item.description}
                      </p>

                      {item.progress && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full">
                            <div 
                              className="h-full bg-violet-500 rounded-full"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {item.milestones && (
                        <ul className="space-y-2 mb-4">
                          {item.milestones.map((milestone) => (
                            <li 
                              key={milestone}
                              className="text-gray-300 flex items-center gap-2"
                            >
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-sm bg-violet-500/10 text-violet-300 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.links && (
                        <div className="mt-4 pt-4 border-t border-violet-500/10">
                          {item.links.map((link) => (
                            <Link
                              key={link.url}
                              href={link.url}
                              className="text-violet-400 hover:text-violet-300 text-sm"
                            >
                              {link.text} →
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Newsletter Signup */}
          <section className="text-center space-y-6 pt-8">
            <h2 className="text-2xl font-semibold text-violet-300">
              Follow My Journey
            </h2>
            <p className="text-gray-300">
              Get notified about new projects and learning resources
            </p>
            <Button variant="cta">
              <Link href="/contact">Connect With Me</Link>
            </Button>
          </section>
        </div>
      </Container>
    </main>
  );
}