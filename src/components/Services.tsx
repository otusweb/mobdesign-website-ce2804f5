import countryClubImage from "@/assets/country-club-dining.jpg";
import socialClubImage from "@/assets/social-club-lounge.jpg";

const Services = () => {
  const services = [
    {
      title: "Coworking spaces services",
      description: "Conference room booking, desk booking and event booking that enhances the exclusive coworking space experience.",
      features: ["Tee Time Management", "Member Network", "Event Planning", "Pro Shop Integration"],
      image: countryClubImage
    },
    {
      title: "Luxury Hotels services", 
      description: "Concierge services, room service ordering, room booking, and guest communication platforms that redefine hospitality standards.",
      features: ["Digital Concierge", "Room Service", "Room Booking", "Guest Services"],
      image: socialClubImage
    },
    {
      title: "Fine Dining services",
      description: "Reservation management, menu list access and payment from the app to create unforgettable dining experiences.", 
      features: ["Reservation System", "Menus", "Payment"],
      image: countryClubImage
    },
    {
      title: "Fitness & Wellness Services",
      description: "Personal training sessions, group fitness classes and payment from the app  to elevate you fitness room experience.", 
      features: ["Private sessions", "Group class", "Payment"],
      image: countryClubImage
    },
    {
      title: "Exclusive Spa services",
      description: "Reservation management, and payment from the app to create unforgettable dining experiences.", 
      features: ["Reservation System", "Menus", "Payment"],
      image: countryClubImage
    }

  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Tailored Solutions for Premium Venues
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each venue type has unique needs. Our specialized mobile applications are crafted 
            to enhance the specific experiences that make your establishment exceptional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full gradient-accent"></div>
                      <span className="text-sm font-medium text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-primary">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;