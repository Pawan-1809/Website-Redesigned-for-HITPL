import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const awards = [
    { year: "2016", title: "3 Star Dealer", stars: 3 },
    { year: "2017", title: "4 Star Dealer", stars: 4 },
    { year: "2018", title: "4 Star Dealer", stars: 4 },
];

const Awards = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.award-card');
        gsap.fromTo(cards,
            { y: 60, opacity: 0, scale: 0.9 },
            {
                y: 0, opacity: 1, scale: 1,
                stagger: 0.2,
                duration: 0.8,
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
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <div className="inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">
                        Recognition
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground transition-colors">
                        Our <span className="text-primary">Awards</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {awards.map((award, idx) => (
                        <div key={idx} className="award-card group text-center">
                            {/* Trophy circle */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/80 to-amber-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-500">
                                <Trophy className="w-14 h-14 text-white drop-shadow-md" strokeWidth={1.5} />
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-3">
                                {Array.from({ length: award.stars }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Year + Title */}
                            <p className="text-primary text-2xl font-bold mb-1 group-hover:scale-105 transition-transform">{award.year}</p>
                            <p className="text-muted text-sm font-semibold uppercase tracking-widest transition-colors">({award.title})</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
