import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Phone, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Reveal animation for static header
    gsap.fromTo(headerRef.current,
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0 }
    );
  }, []);

  // Handle location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/clients', label: 'Clients' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/branches', label: 'Branches' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 glass-dark py-4 transition-all duration-300">
        <div className="w-full px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <img src="/images/logo.png" alt="HITPL Logo" className="h-20 w-auto transition-all duration-300" />
            <span className="font-bold text-2xl tracking-wider text-foreground hidden sm:block font-logo">HITPL</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest font-semibold text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${isActive(link.path) ? 'text-primary' : 'hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact info & actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">+91 77648 84001</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>

            <button className="bg-primary hover:bg-yellow-500 text-black px-4 py-2 rounded-sm text-sm font-bold uppercase transition-transform hover:scale-105 active:scale-95 cursor-pointer">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Section */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-foreground"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6 text-primary" /> : <Moon className="w-6 h-6 text-primary" />}
            </button>
            <button
              className="text-foreground hover:text-primary transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown (Compact) */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-[88px] right-6 z-[45] bg-background/95 backdrop-blur-xl border border-border-theme p-6 rounded-3xl shadow-2xl md:hidden w-[280px] origin-top-right transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold tracking-wide transition-all duration-200 py-2 border-b border-border-theme last:border-0 ${isActive(link.path) ? 'text-primary pl-2' : 'text-foreground hover:text-primary hover:pl-2'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 pt-4 border-t border-primary/20 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm font-medium text-muted">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 77648 84001</span>
            </div>
            <button className="w-full bg-primary hover:bg-yellow-500 text-black py-3 rounded-xl text-xs font-black uppercase transition-all active:scale-95">
              Get Quote
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
