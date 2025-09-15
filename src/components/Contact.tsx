import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Let's Create Something Extraordinary
        </h2>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Ready to revolutionize your venue's digital experience? We're here to help you 
          create mobile solutions that exceed your guests' expectations and drive your business forward.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-subtle border border-border">
            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Send Us a Message</h3>
            <p className="text-muted-foreground mb-6">
              Fill out our contact form for project inquiries and consultations.
            </p>
            <Button asChild variant="outline">
              <a href="/contact" className="text-accent font-semibold hover:text-accent-light transition-smooth">
                Contact Form
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-subtle border border-border">
            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Book a Call</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a consultation to discuss your vision and requirements.
            </p>
            <Button asChild variant="outline">
              <a 
                href="https://tidycal.com/olivierdestrebecq/hospitality-mobile-app-informational-call" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:text-accent-light transition-smooth"
              >
                Schedule Meeting
              </a>
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-semibold mb-6">
            Start Your Digital Transformation Today
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every exceptional venue deserves an exceptional mobile experience. 
            Let's discuss how we can bring your vision to life with cutting-edge technology 
            and premium design.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-12 py-4">
            Book Your Free Consultation
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-sm text-muted-foreground">
          <p>
            Trusted by premium venues worldwide • Specialized in luxury hospitality • 
            Award-winning design & development team
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;