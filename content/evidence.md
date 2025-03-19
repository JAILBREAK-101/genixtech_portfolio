```tsx
// After Evidence
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/Button";
import SignupForm from "./components/SignupForm";
import { Container } from "./components/ui/container";
import { SocialProof } from './components/SocialProof';
import { ValueTimeline } from './components/ValueTimeline';
import { CallToAction } from './components/CallToAction';

export default function Page() {
  return (
    <main className="mx-auto px-4 bg-slate-950 text-violet-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              AI-Powered Solutions to Scale Your Business Effortlessly
            </h1>
            <p className="text-lg text-violet-200">
              I build AI-driven automation tools that optimize workflows, 
              increase revenue, and eliminate inefficiencies.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="default" size="lg" 
                className="bg-violet-600 hover:bg-violet-700 text-white border border-violet-400/20 shadow-lg shadow-violet-500/20">
                <Link href="/contact">Book a Free Strategy Call</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/hero-image.png"
              alt="AI Solutions Illustration"
              width={600}
              height={400}
              className="rounded-lg border border-violet-500/20 shadow-xl shadow-violet-500/10"
              priority
            />
          </div>
        </Container>
      </section>

      <SocialProof />

      {/* Problems We Solve Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
        <Container className="space-y-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-semibold text-violet-300">
              Transform Your Business Operations
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-red-500/20 shadow-lg shadow-red-500/10">
                <h3 className="text-xl font-medium text-red-400 mb-4">❌ Current Challenges</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• 40% of work hours lost to manual data entry</li>
                  <li>• Scattered communication across multiple platforms</li>
                  <li>• Inconsistent customer response times</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                <h3 className="text-xl font-medium text-emerald-400 mb-4">✅ Our Impact</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Automate 80% of repetitive tasks</li>
                  <li>• Unified AI-powered workspace</li>
                  <li>• 24/7 intelligent customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ValueTimeline />

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

      <CallToAction />

      {/* Early Access Signup Section */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-violet-950/20 to-slate-950">
        <Container className="max-w-4xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Get Exclusive Early Access to the Future of AI
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join a select group of pioneers shaping the next wave of AI-powered tools.  
              Gain priority access, influence development, and experience innovation before anyone else.
            </p>
            <SignupForm />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              🚀 Only limited spots available for early adopters.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}

const solutions = [
  {
    title: "Subtilo",
    description: "AI-powered video transcription & subtitles with 99% accuracy in 100+ languages",
    icon: "🎥"
  },
  {
    title: "AI Chatbots",
    description: "24/7 customer support automation with natural language understanding",
    icon: "🤖"
  },
  {
    title: "Workflow Automation",
    description: "Custom AI workflows that reduce manual tasks by 80%",
    icon: "⚡"
  }
];
```