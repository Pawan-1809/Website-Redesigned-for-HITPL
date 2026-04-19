import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const listRef = useRef(null);
    const parallaxRef = useRef(null);

    useEffect(() => {
        gsap.to(parallaxRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        const items = listRef.current.children;
        gsap.fromTo(items,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    const ServiceItem = ({ title, desc, img }) => (
        <div className="flex bg-secondary/40 border border-border-theme rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 backdrop-blur-md mb-4 p-4 items-center">
            <div className="w-16 h-16 mr-6 overflow-hidden flex-shrink-0 relative rounded aspect-square border border-border-theme">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
                <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-sm text-muted">{desc}</p>
            </div>
        </div>
    );

    return (
        <section className="py-24 relative overflow-hidden bg-background transition-colors duration-400">
            {/* Background Image with parallax */}
            <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none">
                <div ref={parallaxRef} className="w-full h-[130%] -mt-[15%]">
                    <img src="/images/d788f67_14d9279.png" alt="Engineering pattern" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-6 transition-colors">Dependable Engineering Solutions <br /> For Your Project</h2>
                    <p className="text-muted transition-colors">
                        At HITPL, we have grown from a humble beginning to a FOUR STAR dealership of L&T, representing the best.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2" ref={listRef}>
                        <ServiceItem
                            title="Construction Equipments"
                            desc="KOMATSU PC300, PC200, PC130 & L&T Wheel Loaders."
                            img="/images/3b267aa_db675e5.png"
                        />
                        <ServiceItem
                            title="Mining Equipments"
                            desc="Surface Top Hammer Drills and heavy rock breakers."
                            img="/images/db22f50_436cc94.png"
                        />
                        <ServiceItem
                            title="Crushing and Screening"
                            desc="Comprehensive solutions with Puzzolona representation."
                            img="/images/39f70c5_b975f7d.png"
                        />
                        <ServiceItem
                            title="Explosives & Blasting"
                            desc="Site clearances for major railway & road projects."
                            img="/images/74be2b2_2621dc4.png"
                        />
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 transition-transform duration-500 hover:scale-[1.02]">
                            <img src="/images/tab-1.png" alt="Working together" className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-2xl font-bold text-foreground mb-2 transition-colors">Over 60+ Core Team Employees</h3>
                                <p className="text-primary font-bold uppercase tracking-widest text-sm">Dedicated to assist you 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;
