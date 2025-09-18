import peoplevineLogoImage from "@/assets/logos/peoplevine-logo.png";
import mewsLogoImage from "@/assets/logos/mews-logo.png";
import sevenroomsLogoImage from "@/assets/logos/sevenrooms-logo.png";
import saltoLogoImage from "@/assets/logos/salto-logo.png";
import stripeLogoImage from "@/assets/logos/stripe-logo.png";
import crispLogoImage from "@/assets/logos/crisp-logo.png";
import yousignLogoImage from "@/assets/logos/yousign-logo.png";

const Integrations = () => {
  const integrations = [
    {
      name: "PeopleVine",
      description: "Complete customer relationship management and loyalty platform for hospitality venues",
      category: "CRM & Loyalty",
      logo: peoplevineLogoImage
    },
    {
      name: "Mews",
      description: "Cloud-based property management system for hotels and hospitality businesses",
      category: "Property Management",
      logo: mewsLogoImage
    },
    {
      name: "SevenRooms",
      description: "Guest experience and retention platform for restaurants and venues",
      category: "Reservations",
      logo: sevenroomsLogoImage
    },
    {
      name: "Salto",
      description: "Smart access control and mobile key solutions for hotels and buildings",
      category: "Access Control",
      logo: saltoLogoImage
    },
    {
      name: "Stripe",
      description: "Secure payment processing and financial infrastructure for online businesses",
      category: "Payments",
      logo: stripeLogoImage
    },
    {
      name: "Crisp",
      description: "Customer messaging platform for support and engagement",
      category: "Customer Support",
      logo: crispLogoImage
    },
    {
      name: "Yousign",
      description: "Electronic signature solution for seamless document workflows",
      category: "Digital Signatures",
      logo: yousignLogoImage
    }
  ];

  return (
    <section className="py-24 bg-texture-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've already integrated with the industry's leading platforms to ensure 
            your app works perfectly with your existing systems from day one.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-subtle border border-border transition-smooth hover:shadow-primary group">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform p-2">
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Integration Details */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {integration.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-3">
                  {integration.category}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Don't see your preferred platform? We can integrate with virtually any system.
          </p>
          <div className="inline-flex items-center space-x-2 text-accent font-medium">
            <span>Custom integrations available</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;