const Benefits = () => {
  const benefits = [
    {
      icon: "📱",
      title: "Enhanced Guest Experience",
      description: "Deliver seamless, personalized service that exceeds expectations and builds lasting loyalty."
    },
    {
      icon: "👥", 
      title: "Stronger Community",
      description: "Connect members and guests through shared experiences, events, and meaningful interactions."
    },
    {
      icon: "⚡",
      title: "Operational Excellence",
      description: "Streamline operations, reduce costs, and empower staff to focus on exceptional hospitality."
    },
    {
      icon: "📊",
      title: "Data-Driven Insights", 
      description: "Understand guest preferences and behaviors to make informed decisions that drive growth."
    },
    {
      icon: "🎯",
      title: "Competitive Advantage",
      description: "Stand out in the luxury market with cutting-edge technology that sets new standards."
    },
    {
      icon: "💎",
      title: "Premium Brand Image",
      description: "Reinforce your position as a leader in luxury hospitality through innovative digital experiences."
    }
  ];

  return (
    <section className="py-24 gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Solutions?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transform your venue into a digital-first destination that attracts, 
            delights, and retains the most discerning guests.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-smooth hover:bg-white/15 hover:transform hover:scale-105">
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="opacity-90 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6">
              Ready to Transform Your Venue?
            </h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Join the leading venues that trust us to deliver exceptional digital experiences. 
              Let's discuss how we can elevate your establishment to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-accent hover:shadow-primary transition-smooth transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-smooth">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;