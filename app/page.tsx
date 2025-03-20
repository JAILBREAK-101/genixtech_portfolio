import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/Button";
// import SignupForm from "./components/SignupForm";
import { Container } from "./components/ui/container";
import AiIllustration from "../public/photos/AI-Illustration.jpg";

export default function Page() {
  return (
    <main className="mx-auto px-4 bg-slate-950 text-violet-50 min-h-screen">
      {/* Hero Section */}
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
              <Button variant="cta">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={AiIllustration}
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

      <section className="py-16 bg-gradient-to-r from-slate-950 via-violet-950/20 to-slate-950">
        <Container className="max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-violet-300">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-gray-300">
              I'm currently available for small to medium web development projects.
              While I'm growing my AI integration skills, I can help with:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-gray-300">
              <li>• Custom web applications</li>
              <li>• React/Next.js development</li>
              <li>• Basic AI API integrations</li>
            </ul>
            <Button variant="cta">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
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