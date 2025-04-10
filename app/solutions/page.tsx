import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "../components/ui/container";
import { Button } from "../components/ui/Button";

// Sync with Homepage Solutions Section
// Learning tracks to show progression
const learningTracks = [
  {
    area: "Frontend Development",
    status: "active",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    currentProject: "Building this portfolio site",
    progress: 80
  },
  {
    area: "AI Integration",
    status: "learning",
    skills: ["TensorFlow", "HF Transformers"],
    currentProject: "Working on Subtilo",
    progress: 20
  },
  {
    area: "Backend Development",
    status: "active",
    skills: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "PostgreSQL", "Prisma"],
    currentProject: "Building ResumeGPT",
    progress: 55
  }
];

// Current work and experiments
const projects = [
  {
    name: "Portfolio Site",
    status: "in-progress",
    description: "My value-driven portfolio built with Next.js and Tailwind",
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Performance optimized"
    ],
    github: "https://github.com/JAILBREAK-101/genixtechportolio"
  },
  {
    name: "ResumeGPT",
    status: "development",
    description: "Experimenting with OpenAI API integration to build an AI-powered resume parser that extracts key information from resumes (PDF/DOCX) and structures it into JSON format.",
    features: [
      "Upload resumes (PDF/DOCX)",
      "Multiple export formats",
      "Work in progress"
    ],
    github: "https://github.com/JAILBREAK-101/ResumeGPT"
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
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Current Solutions & Learning Journey
            </h1>
            <p className="text-lg text-violet-200">
              I'm actively learning and building. Here's my honest progress 
              and what I'm working towards.
            </p>
          </section>

          {/* Current Projects */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-violet-300">
              Current Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.name}
                  className="p-6 bg-slate-900/50 rounded-lg border border-violet-500/20"
                >
                  <h3 className="text-xl font-medium text-violet-400 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-gray-400 flex items-center">
                        <span className="text-violet-400 mr-2">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.github && (
                    <Link 
                      href={project.github}
                      className="text-sm text-violet-400 hover:text-violet-300"
                      target="_blank"
                    >
                      View on GitHub →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Learning Tracks */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-violet-300">
              Learning Progress
            </h2>
            <div className="space-y-6">
              {learningTracks.map((track) => (
                <div 
                  key={track.area}
                  className="p-6 bg-slate-900/50 rounded-lg border border-violet-500/20"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-violet-400">
                        {track.area}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Currently: {track.currentProject}
                      </p>
                    </div>
                    <span className={`
                      px-2 py-1 text-xs rounded-full
                      ${track.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                        track.status === 'learning' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'}
                    `}>
                      {track.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div 
                        className="h-full bg-violet-500 rounded-full"
                        style={{ width: `${track.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-sm bg-violet-500/10 text-violet-300 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Collaborate */}
          <section className="text-center space-y-6 pt-8">
            <h2 className="text-2xl font-semibold text-violet-300">
              Let's Learn and Build Together
            </h2>
            <p className="text-gray-300">
              I'm open to collaboration and learning opportunities. 
              If you're interested in working together or have a project in mind:
            </p>
            <Button variant="cta">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </section>
        </div>
      </Container>
    </main>
  );
}
