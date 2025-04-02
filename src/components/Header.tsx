
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-gray-600 hover:text-woof-purple transition-colors">
            <h1 className="text-2xl font-bold text-woof-purple">
              <span className="text-woof-blue">W</span>oof
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-gray-600 hover:text-woof-purple transition-colors">Benefits</a>
          <a href="#features" className="text-gray-600 hover:text-woof-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-woof-purple transition-colors">Testimonials</a>
          <a href="#CTA" className="text-gray-600 hover:text-woof-purple transition-colors">
            <Button className="bg-woof-blue hover:bg-woof-purple transition-colors">
              Get Started
            </Button>
          </a>


        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            <a
              href="#benefits"
              className="text-gray-600 hover:text-woof-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-woof-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-woof-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="bg-woof-blue hover:bg-woof-purple transition-colors w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
