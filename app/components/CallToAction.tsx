export function CallToAction() {
  const benefits = [
    "Free 45-minute strategy session",
    "Custom implementation roadmap",
    "ROI calculation & timeline",
    "No commitment required"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-violet-950/30 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-violet-200 mb-8">
            Book your free strategy call now and get:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="p-4 bg-violet-500/10 rounded-lg">
                <p className="text-violet-300">{benefit}</p>
              </div>
            ))}
          </div>
          <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Book Your Free Strategy Call
            <span className="block text-sm text-violet-200 mt-1">
              Next available slot: Tomorrow, 10:00 AM
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}