import countryClubImage from "@/assets/country-club-dining.jpg";
import socialClubImage from "@/assets/social-club-lounge.jpg";

const Services = () => {
  const services = [
    {
      title: "Country Clubs & Golf Courses",
      description: "Tee time bookings, tournament management, member directories, and pro shop integration that enhances the exclusive club experience.",
      features: ["Tee Time Management", "Member Network", "Event Planning", "Pro Shop Integration"],
      image: countryClubImage
    },
    {
      title: "Luxury Hotels & Resorts", 
      description: "Concierge services, room service ordering, spa bookings, and guest communication platforms that redefine hospitality standards.",
      features: ["Digital Concierge", "Room Service", "Spa & Activities", "Guest Services"],
      image: socialClubImage
    },
    {
      title: "Fine Dining Establishments",
      description: "Reservation management, wine list access, chef's table bookings, and loyalty programs that create unforgettable dining experiences.", 
      features: ["Reservation System", "Wine & Menu", "Special Events", "Loyalty Program"],
      image: countryClubImage
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
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
                <h3 className="text-3xl font-serif font-semibold text-primary">
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
                <div className="relative rounded-2xl overflow-hidden shadow-luxury">
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