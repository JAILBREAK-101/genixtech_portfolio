export function ValueTimeline() {
  const timeline = [
    {
      phase: "Initial Consultation",
      duration: "45 minutes",
      description: "Deep dive into your current processes and pain points",
      deliverable: "Custom roadmap and implementation plan"
    },
    {
      phase: "Setup & Integration",
      duration: "2-3 days",
      description: "Quick implementation with zero downtime",
      deliverable: "Fully configured AI solution"
    },
    {
      phase: "Team Training",
      duration: "1 day",
      description: "Comprehensive training for your team",
      deliverable: "Certified team members"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Your Journey to AI-Powered Success
        </h2>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={item.phase} className="flex gap-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-violet-500/20" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-violet-400">{item.phase}</h3>
                <p className="text-violet-200 mt-2">{item.description}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <span className="text-violet-300">⏱️ {item.duration}</span>
                  <span className="text-violet-300">📦 {item.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}