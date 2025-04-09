'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/container";
import GenixTech from "../public/photos/GenixTech.png";
import { ContactModal } from './components/ContactModal';
import { Calendar } from 'lucide-react';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <main className="mx-auto px-4 bg-slate-950 text-violet-50 min-h-screen">
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <Container className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Building AI-Enhanced Web Solutions
            </h1>
            <p className="text-base md:text-lg text-violet-200 max-w-2xl mx-auto lg:mx-0">
              I'm a developer focused on creating custom web applications 
              with AI integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="default" className="w-full sm:w-auto">
                <Link href="/solutions">View Solutions</Link>
              </Button>
              <Button 
                variant="cta"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto"
              >
                Discuss your project {/* View my work */}
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Image
                src={GenixTech}
                alt="AI Solutions Illustration"
                width={600}
                height={300}
                className="rounded-lg border object-cover border-violet-500/20 shadow-xl shadow-violet-500/10"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </Container>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
        <Container className="space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-violet-300">
              Transform Your Business Operations
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
              {/* Service cards with improved mobile layout */}
              <div className="p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-violet-500/20">
                <h3 className="text-xl font-medium text-violet-400 mb-4">How I provide value</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Custom web application development</li>
                  <li>• Integration of AI APIs (OpenAI, HuggingFace)</li>
                  <li>• Modern React/Next.js solutions</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-violet-500/20">
                <h3 className="text-xl font-medium text-violet-400 mb-4">Current Focus</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Building AI-integrated projects</li>
                  <li>• Learning and implementing best practices</li>
                  <li>• Open to collaboration opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Solutions Preview */}
      <section className="py-12 md:py-16">
        <Container className="px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 text-violet-300">
            Live Solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution) => (
              <div 
                key={solution.title} 
                className="group p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-violet-500/20 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{solution.icon}</span>
                    <h3 className="text-xl font-semibold text-violet-300">
                      {solution.title}
                    </h3>
                  </div>
                  <span className={`
                    px-2 py-1 text-xs rounded-full capitalize
                    ${solution.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                      solution.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-violet-500/20 text-violet-400'}
                  `}>
                    {solution.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">
                  {solution.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  <span>{solution.timeline}</span>
                </div>

                {/* Progress bar for in-progress projects */}
                {solution.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{solution.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-violet-500 rounded-full transition-all duration-500"
                        style={{ width: `${solution.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-violet-500/10 text-violet-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key features */}
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature) => (
                    <li 
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-violet-400 mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="flex gap-3 mt-6">
                  {solution.githubUrl ? (
                    <Link 
                      href={solution.githubUrl}
                      className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                      target="_blank"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </Link>
                  ) : (
                    solution.comingSoon && (
                      <div className='flex gap-5 mt-4'>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Coming Soon
                        </span>
                        {/* <Link
                          href={solution.waitlistUrl}
                          className='text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1'
                          target="_blank"
                        >
                          <Calendar />
                          Join the Waitlist
                        </Link> */}
                      </div>
                    )
                  )}
                </div>
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
                The Value I Offer
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
                    "Integration of AI APIs/Models (OpenAI, HuggingFace)",
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
                I'm available for small to medium web development projects.
                While I'm growing my AI integration skills, I can help with:
              </p>

              {/* Enhanced service list */}
              <div className="flex flex-col items-center">
                <ul className="inline-block space-y-4 text-left">
                  {[
                    "Custom web applications",
                    "Fullstack development",
                    "AI API integrations"
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
    </>
  );
}

// Always Sync with the Solutions Page Details
const solutions = [
  {
    title: "ResumeGPT",
    status: "development",
    icon: "🤖",
    description: "Experimenting with OpenAI API integration to build an AI-powered resume parser that extracts key information from resumes (PDF/DOCX) and structures it into JSON format.",
    features: [
      "Upload resumes (PDF/DOCX)",
      "Multiple export formats",
      "Work in progress"
    ],
    timeline: "March 2025",
    stack: ["Next.js", "OpenAI", "Tailwind", "Node.Js", "Express", "MongoDB"],
    progress: 50,
    githubUrl: "https://github.com/JAILBREAK-101/ResumeGPT"
  },
  {
    title: "This Portfolio",
    description: "My personal portfolio built with Next.js and Tailwind",
    icon: "🎨",
    status: "active",
    timeline: "March 2025",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Performance optimized"
    ],
    progress: 80,
    githubUrl: "https://github.com/JAILBREAK-101/genixtechportolio"
  },
  {
    title: "Subtilo",
    description: "AI-powered video subtitles application",
    icon: "📊",
    status: "development",
    timeline: "Q3 2025",
    stack: ["Next.js", "Python(Flask)", "TensorFlow"],
    features: [
      "Real-time translation",
      "Subtitle Generation"
    ],
    progress: 15,
    comingSoon: true,
    // waitlistUrl: "https://subtiloai.vercel.app"
  }
];