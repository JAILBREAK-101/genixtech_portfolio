'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/container";
import GenixTech from "../public/photos/GenixTech.png";
import { ContactModal } from './components/ContactModal';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="mx-auto px-4 bg-slate-950 text-violet-50 min-h-screen">
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Building AI-Enhanced Web Solutions
            </h1>
            <p className="text-lg text-violet-200">
              I'm a developer focused on creating custom web applications 
              with AI integrations. Currently building and learning.
            </p>
            <div className="flex gap-4">
              <Button variant="default">
                <Link href="/solutions">View My Work</Link>
              </Button>
              <Button 
                variant="cta"
                onClick={() => setIsModalOpen(true)}
              >
                Let's Talk
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={GenixTech}
              alt="AI Solutions Illustration"
              width={600}
              height={300}
              className="rounded-lg border object-cover border-violet-500/20 shadow-xl shadow-violet-500/10"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
        <Container className="space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-semibold text-violet-300">
              Transform Your Business Operations
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-violet-500/20">
                <h3 className="text-xl font-medium text-violet-400 mb-4">What I Can Help With</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Custom web application development</li>
                  <li>• Integration of AI APIs (OpenAI, HuggingFace)</li>
                  <li>• Modern React/Next.js solutions</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-violet-500/20">
                <h3 className="text-xl font-medium text-violet-400 mb-4">Current Focus</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Building my first AI-integrated projects</li>
                  <li>• Learning and implementing best practices</li>
                  <li>• Open to collaboration opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Solutions Preview */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-12 text-violet-300">My Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} 
                className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-violet-500/20 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 hover:border-violet-500/30 transition-all duration-300">
                <h3 className="text-xl font-medium mb-4 text-violet-400">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute inset-0 bg-grid-violet-900/20 bg-[size:20px_20px] opacity-20" />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto relative">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                What I Build
              </h2>
              <p className="text-lg text-violet-200/80">
                Focused on modern web solutions with AI capabilities
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* What I Can Help With Card */}
              <div className="group p-8 bg-slate-900/40 backdrop-blur-xl rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-violet-300">
                    Services Offered
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Custom web application development",
                    "Integration of AI APIs (OpenAI, HuggingFace)",
                    "Modern React/Next.js solutions"
                  ].map((service) => (
                    <li 
                      key={service} 
                      className="flex items-start gap-3 text-violet-100/80 hover:text-violet-100 transition-colors duration-200"
                    >
                      <span className="text-violet-400 mt-1">▹</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Focus Card */}
              <div className="group p-8 bg-slate-900/40 backdrop-blur-xl rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-violet-300">
                    Current Focus
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Building my first AI-integrated projects",
                    "Learning and implementing best practices",
                    "Open to collaboration opportunities"
                  ].map((focus) => (
                    <li 
                      key={focus} 
                      className="flex items-start gap-3 text-violet-100/80 hover:text-violet-100 transition-colors duration-200"
                    >
                      <span className="text-violet-400 mt-1">▹</span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 relative overflow-hidden">
        {/* Animated background with gradient and pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-violet-950/20 to-slate-950" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <Container className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              {/* Gradient heading */}
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Let's Build Something Together
              </h2>

              {/* Subtitle with better spacing */}
              <p className="text-lg md:text-xl text-violet-200/90 max-w-2xl mx-auto leading-relaxed">
                I'm currently available for small to medium web development projects.
                While I'm growing my AI integration skills, I can help with:
              </p>

              {/* Enhanced service list */}
              <div className="flex flex-col items-center">
                <ul className="inline-block space-y-4 text-left">
                  {[
                    "Custom web applications",
                    "React/Next.js development",
                    "Basic AI API integrations"
                  ].map((service) => (
                    <li 
                      key={service}
                      className="flex items-center gap-3 text-violet-100/80 hover:text-violet-100 transition-all duration-300 group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors duration-300">
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </span>
                      <span className="text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button with enhanced styling */}
              <div className="pt-8">
                <Button 
                  variant="cta"
                  onClick={() => setIsModalOpen(true)}
                  className="group text-white relative px-8 py-4 text-lg shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Discuss Your Project
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-cyan-400/20 blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </Button>
                <p className="mt-4 text-sm text-violet-300/60">
                  No commitment required • Quick response guaranteed
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}

const solutions = [
  {
    title: "In Development",
    description: "Working on my first AI-integrated application - Coming Soon",
    icon: "🚀",
    status: "development"
  },
  {
    title: "Learning Path",
    description: "Currently focusing on AI API integration and web development",
    icon: "📚",
    status: "ongoing"
  },
  {
    title: "Open to Projects",
    description: "Available for collaborative development opportunities",
    icon: "🤝",
    status: "available"
  }
];