const Stats = () => {
  const stats = [
    {
      number: "2+",
      label: "Premium Venues Transformed"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-muted/50 backdrop-blur-sm rounded-2xl p-8 shadow-subtle">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;