const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4159c8bf-7cf4-4529-8646-aead76ba80dc.png" 
              alt="Company Logo"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-semibold text-primary">
              Venue Solutions
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-primary hover:text-accent transition-smooth">
              Services
            </a>
            <a href="#solutions" className="text-primary hover:text-accent transition-smooth">
              Solutions
            </a>
            <a href="#benefits" className="text-primary hover:text-accent transition-smooth">
              Benefits
            </a>
            <a href="#contact" className="text-primary hover:text-accent transition-smooth">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="gradient-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold shadow-accent hover:shadow-primary transition-smooth transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;