import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bomb, Mountain, Truck, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
    {
        icon: Bomb,
        title: "Explosives & Blasting Services",
        desc: "The site clearances of major Railway projects, road & Infrastructure projects have been done by us.",
    },
    {
        icon: Mountain,
        title: "Stone Mining & Crushing",
        desc: "Mining Leases currently more than 100 Acres, granted by Department of Mines and Geology, Govt of Jharkhand.",
    },
    {
        icon: Truck,
        title: "Ready Mix Concrete",
        desc: "Ready mix concrete (RMC) from UltraTech Cement is manufactured under the brand name — UltraTech Concrete.",
    },
    {
        icon: HardHat,
        title: "Mining & Construction Equipments",
        desc: "L&T's Construction and Mining Equipment business manufactures, distributes and provides for construction.",
    },
];

const WhatMakesUsDifferent = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.diff-card');
        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1,
                stagger: 0.15,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-background transition-colors duration-400">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <div className="inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                        Our Edge
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground transition-colors">
                        What Makes Us <span className="text-primary">Different</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentiators.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="diff-card group text-center bg-secondary border border-border-theme rounded-3xl p-8 hover:border-primary/40 hover:bg-secondary/80 transition-all duration-300">
                                {/* Icon circle */}
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/80 to-amber-600 flex items-center justify-center shadow-lg shadow-primary/15 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight uppercase tracking-wide">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted text-sm leading-relaxed transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;
