import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, subtitle, image, icon }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: 'elastic.out(1, 0.3)',
      duration: 1
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group bg-secondary rounded-xl overflow-hidden cursor-pointer shadow-2xl transition-shadow hover:shadow-primary/20 p-1 min-h-[300px]"
    >
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div className="text-primary mb-4 w-12 h-12 bg-background/50 backdrop-blur-md rounded-lg flex items-center justify-center text-3xl shadow-lg border border-border-theme">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2 transition-colors">{title}</h3>
        <p className="text-muted text-sm transition-colors">{subtitle}</p>
      </div>
    </div>
  );
}

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".feature-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary relative z-20 transition-colors duration-400" style={{ marginTop: '-40px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground transition-colors">We Assist in Choosing the Perfect <span className="text-primary">Materials</span> for Your Project</h2>
          </div>
          <div className="w-full md:w-1/2 text-muted text-lg transition-colors">
            Over 32 years of experience providing end to end solutions in mining, construction, and infrastructure projects. Honest, dependable, and focus on safety.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <FeatureCard
              icon="🏢"
              title="End to End Solutions"
              subtitle="From blasting services, stone crushing, to heavy machinery dealership. We handle infrastructure needs robustly."
              image="/images/185cf9f_27e77e5.png"
            />
          </div>
          <div className="feature-card">
            <FeatureCard
              icon="🤝"
              title="Honest & Dependable"
              subtitle="We deliver quality. Maruti Suzuki dealership holder and Four Star Dealership in L&T machinery."
              image="/images/3ad6748_ef3700e.png"
            />
          </div>
          <div className="feature-card">
            <FeatureCard
              icon="🛡️"
              title="Safety & Compliance"
              subtitle="Complying with all government regulations for mining and providing utmost safety standards on sites."
              image="/images/55e7430_643a605.png"
            />
          </div>
        </div>
      </div>
      {/* Background decoration watermark */}
      <div className="absolute top-10 right-0 lg:-right-[5%] xl:right-[2%] transform pointer-events-none opacity-[0.05] z-0 hidden md:flex flex-col select-none leading-[0.8] overflow-hidden">
        <h2 className="text-[80px] xl:text-[120px] font-bold text-primary tracking-widest m-0">
          WHY
        </h2>
        <h2 className="text-[80px] xl:text-[120px] font-bold text-primary tracking-widest m-0">
          &nbsp;&nbsp;&nbsp;&nbsp;CHOOSE
        </h2>
        <h2 className="text-[80px] xl:text-[120px] font-bold text-primary tracking-widest m-0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;US
        </h2>
      </div>
    </section>
  );
};

export default Features;
