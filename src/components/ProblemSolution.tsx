const ProblemSolution = () => {
  const problems = [
    {
      title: "Outdated Service Experience",
      description: "Guests struggle with slow, traditional service methods that don't match modern expectations"
    },
    {
      title: "Limited Community Connection", 
      description: "Members lack platforms to connect, share experiences, and build lasting relationships"
    },
    {
      title: "Operational Inefficiencies",
      description: "Staff overwhelmed with routine tasks, reducing focus on personalized service delivery"
    }
  ];

  const solutions = [
    {
      title: "Seamless Self-Service",
      description: "Intuitive mobile apps that empower guests to order, book, and customize their experience instantly"
    },
    {
      title: "Vibrant Community Features",
      description: "Connect members through events, messaging, and shared experiences that build lasting relationships"
    },
    {
      title: "Streamlined Operations", 
      description: "Automated workflows that free your staff to focus on what matters most - exceptional hospitality"
    }
  ];

  return (
    <section className="py-24 gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Challenge & Our Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-end venues face unique challenges that require sophisticated solutions. 
            We bridge the gap between luxury expectations and modern technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-primary mb-8">
              Current Challenges
            </h3>
            {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-subtle border border-border transition-smooth hover:shadow-primary">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-destructive"></div>
                </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{problem.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-primary mb-8">
              Our Solutions
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-subtle border border-border transition-smooth hover:shadow-accent">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{solution.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;