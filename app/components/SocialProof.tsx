export function SocialProof() {
  const metrics = [
    { value: "40%", label: "Average Cost Reduction" },
    { value: "2.5x", label: "Productivity Increase" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ];

  const testimonials = [
    {
      quote: "Transformed our workflow completely. We're saving 20 hours per week.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      image: "/testimonials/sarah.jpg"
    },
    // Add 2-3 more testimonials
  ];

  const recognitions = [
    { logo: "/logos/forbes.svg", name: "Forbes Technology Council" },
    { logo: "/logos/gartner.svg", name: "Gartner Cool Vendor 2024" },
    // Add more recognitions
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-violet-200 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300 mb-16">
          {recognitions.map((item) => (
            <img
              key={item.name}
              src={item.logo}
              alt={item.name}
              className="h-12 dark:filter dark:brightness-0 dark:invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
}