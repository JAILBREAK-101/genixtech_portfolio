import { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from "../components/ui/container";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const metadata: Metadata = {
  title: 'Updates & Research | AI Solutions',
  description: 'Latest developments, research insights, and upcoming innovations in AI technology.',
  openGraph: {
    title: 'Updates & Research | AI Solutions',
    description: 'Latest developments, research insights, and upcoming innovations in AI technology.',
    type: 'website',
    images: ['/og-updates.png'],
  },
};

function LoadingCard() {
  return (
    <div className="p-6 bg-slate-900/50 rounded-lg border border-violet-500/20 animate-pulse">
      <div className="h-6 w-3/4 bg-violet-500/20 rounded mb-4"></div>
      <div className="h-24 w-full bg-violet-500/10 rounded mb-4"></div>
      <div className="h-4 w-1/4 bg-violet-500/20 rounded"></div>
    </div>
  );
}

const categories = [
  {
    title: "Latest Research",
    items: [
      {
        title: "First Principles in AI Development",
        type: "research",
        date: "2024-03",
        description: "Exploring fundamental approaches to AI system design",
        link: "/research/first-principles"
      }
    ]
  },
  {
    title: "YouTube Content",
    items: [
      {
        title: "Building Scalable AI Solutions",
        type: "video",
        date: "2024-03-15",
        videoId: "your-video-id",
        description: "How to architect AI systems that scale"
      }
    ]
  },
  {
    title: "Upcoming Innovations",
    items: [
      {
        title: "Advanced NLP Processing Engine",
        type: "project",
        status: "development",
        timeline: "Q3 2024",
        description: "Next-generation natural language processing"
      }
    ]
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <Container>
        <h1 className="text-4xl font-bold mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Latest Updates & Research
        </h1>

        <div className="space-y-20">
          {categories.map((category) => (
            <section key={category.title} className="space-y-8">
              <h2 className="text-2xl font-semibold text-violet-300">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ErrorBoundary>
                  <Suspense fallback={<LoadingCard />}>
                    {category.items.map((item) => (
                      <div 
                        key={item.title}
                        className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                      >
                        <h3 className="text-xl font-medium text-violet-400 mb-4">
                          {item.title}
                        </h3>
                        {item.type === 'video' && (
                          <div className="mb-4">
                            <YouTubeEmbed videoId={item.videoId} title={item.title} />
                          </div>
                        )}
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        {item.date && (
                          <div className="text-sm text-violet-300">
                            📅 {item.date}
                          </div>
                        )}
                        {item.timeline && (
                          <div className="text-sm text-violet-300">
                            🚀 Expected: {item.timeline}
                          </div>
                        )}
                      </div>
                    ))}
                  </Suspense>
                </ErrorBoundary>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}