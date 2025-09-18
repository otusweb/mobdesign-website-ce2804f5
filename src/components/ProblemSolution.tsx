const ProblemSolution = () => {
  const problems = [
    {
      title: "Fragmented user experience", 
      description: "Do your members have to use one app to open doors, one website to book their rooms and another app to order food?"
    },
    {
      title: "Your brand is lost",
      description: "You spent months designing your property experience, only to have a mobile experience that doesn't reflect your brand?"
    },
    {
      title: "Outdated Service Experience",
      description: "Are your digital tools still a dated-looking website that doesn't match modern expectations?"
    },
  ];

  const solutions = [
    {
      title: "Only your mobile app",
      description: "Your members can book their spa treatment, conference room, fitness class, or dinner reservation all from your app."
    },
    {
      title: "Your app, your story", 
      description: "Your app is an extension of your property, your vision. Not a third party company."
    },
    {
      title: "A modern iOS and Android app",
      description: "An app that is as refined as your property using the latest mobile technology and design."
    },
  ];

  return (
    <section className="py-24 bg-texture-subtle">
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
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-primary mb-8">
              Current Challenges
            </h3>
            <div className="flex flex-col space-y-8 flex-1">
              {problems.map((problem, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-subtle border border-border transition-smooth hover:shadow-primary flex-1">
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-destructive"></div>
                  </div>
                    <div className="flex flex-col">
                      <h4 className="text-xl font-semibold text-primary mb-3">{problem.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-primary mb-8">
              Our Solutions
            </h3>
            <div className="flex flex-col space-y-8 flex-1">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-subtle border border-border transition-smooth hover:shadow-accent flex-1">
                  <div className="flex items-start space-x-4 h-full">
                    <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xl font-semibold text-primary mb-3">{solution.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;