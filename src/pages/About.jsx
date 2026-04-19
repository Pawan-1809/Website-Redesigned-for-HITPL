import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function About() {
    const pageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ".reveal-item",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
        );
    }, []);

    return (
        <div ref={pageRef} className="container mx-auto px-6 py-24 min-h-screen transition-colors duration-400">
            <div className="max-w-4xl mx-auto">
                <div className="reveal-item mb-4 inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                    About Us
                </div>
                <h1 className="reveal-item text-4xl md:text-6xl font-black text-foreground mb-8 transition-colors">
                    Hiralal Industrial Technologies Private Limited
                </h1>
                
                <div className="reveal-item text-xl text-muted leading-relaxed space-y-6 mb-16 transition-colors">
                    <p>
                        Part of Hiralal Group having Head Quarters in Ranchi Jharkhand. Hiralal Group has its Presence in Industrial Explosives, Transportation, Aggregate Mining & Mining Equipment.
                    </p>
                    <p>
                        We have also been awarded a Maruti Suzuki dealership for the state of Jharkhand area Ranchi. HITPL, as Hiralal Industrial Technologies is commonly known, represents Construction Equipment majors like Larsen & Toubro, Ajax Fiori & Puzzolona in Jharkhand.
                    </p>
                    <p>
                        Founded in the year 2009 HITPL has gradually grown from its humble beginning to FOUR STAR dealership (L&T) in 2017-2018. We have emerged as a one point solution for Customers seeking Mining & Industrial Equipment Solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        { title: "Leadership", desc: "With Integrity" },
                        { title: "Innovative", desc: "Engineering" },
                        { title: "Focus", desc: "On Our Clients" },
                        { title: "High Quality", desc: "Professionals" },
                        { title: "End to End", desc: "Solutions" },
                        { title: "Core Team", desc: "135+ Employees" }
                    ].map((feature, idx) => (
                        <div key={idx} className="reveal-item bg-secondary border border-border-theme p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted mt-2 transition-colors">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
