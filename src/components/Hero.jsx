import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const heroImages = [
    "/images/eaac6fb_cb71f2b.png", // Correct base image
    "/images/185cf9f_27e77e5.png",
    "/images/3b267aa_db675e5.png"
];

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Crossfade every 4 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Stagger text reveal
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 })
      .fromTo(subtitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, "-=0.8");
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-104px)] flex flex-col items-center justify-start overflow-hidden bg-transparent pt-8 pb-12 transition-colors duration-400">
      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full mt-4 md:mt-12">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
          <h1 ref={titleRef} className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight transition-colors">
            Comprehensive <span className="text-primary block mt-2">Construction</span> Solutions for All
          </h1>

          <div ref={subtitleRef} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
            <Link to="/products" className="bg-primary hover:bg-white text-black px-8 py-4 text-base font-bold transition-all hover:-translate-y-1 rounded shadow-[0_0_20px_rgba(255,183,3,0.3)] shrink-0 uppercase tracking-widest text-center">
              Our Products
            </Link>
            <p className="text-muted text-lg leading-relaxed max-w-md transition-colors">
              Part of Hiralal Group having Head Quarters in Ranchi Jharkhand. Providing Mining, Explosives, and Industrial Equipment Solutions since 2009.
            </p>
          </div>

          {/* Stats quick view */}
          <div className="mt-12 flex items-center gap-8 border-t border-border-theme pt-8 w-full transition-colors">
            <div>
              <p className="text-3xl font-bold text-foreground mb-1 transition-colors">32<span className="text-primary">+</span></p>
              <p className="text-sm text-muted uppercase tracking-widest transition-colors">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-1 transition-colors">135<span className="text-primary">+</span></p>
              <p className="text-sm text-muted uppercase tracking-widest transition-colors">Core Team</p>
            </div>
          </div>
        </div>

        {/* Right Side: Elegant modern container for Image Slider */}
        <div 
            className="w-[calc(100%+10px)] lg:w-[calc(41.666667%+10px)] aspect-square max-h-[300px] lg:max-h-[420px] relative mt-12 lg:mt-0 group perspective-1000 ml-auto mr-auto lg:mr-0 z-20"
        >
          <div className="w-full h-full relative rounded-t-[100px] rounded-b-3xl md:rounded-[40px] overflow-hidden transform transition-transform duration-1000 lg:group-hover:scale-[1.02] isolation-auto shadow-2xl border border-border-theme bg-secondary transition-colors">
            
            {/* Automatic Image Slider crossfade */}
            {heroImages.map((img, idx) => (
                <img
                    key={img}
                    src={img}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    alt="HITPL Hero Slider"
                />
            ))}

            {/* Subtle inner gradient to frame the image beautifully */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none mix-blend-overlay z-20"></div>
          </div>

          {/* Elegant geometric accents */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-primary/50 rounded-bl-3xl pointer-events-none transition-all duration-700 group-hover:-translate-x-4 group-hover:translate-y-4"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-primary/50 rounded-tr-[100px] md:rounded-tr-[40px] pointer-events-none transition-all duration-700 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
