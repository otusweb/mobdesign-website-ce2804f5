import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Services />
      <Stats />
      <Benefits />
      <Contact />
    </main>
  );
};

export default Index;