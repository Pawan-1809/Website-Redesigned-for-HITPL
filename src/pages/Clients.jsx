import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Clients() {
    useEffect(() => {
        gsap.fromTo(
            ".reveal-client",
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }
        );
    }, []);

    const clients = [
        "HINDALCO", "LARSEN & TOUBRO", "PATEL ENGINEERING", "AMBEY MINING",
        "R K MINING", "BKB TRANSPORT", "AMBUJA CEMENTS", "UCC", "E.B.SL", "DBL", "MONNET",
        "KCT", "NKAS", "S.N.M"
    ];

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen transition-colors duration-400">
            <div className="max-w-6xl mx-auto">
                <div className="mb-4 inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                    Our Partners
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-16 transition-colors">
                    Trusted By <span className="text-primary">Industry Leaders</span>
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clients.map((client, idx) => (
                        <div key={idx} className="reveal-client group relative aspect-video bg-secondary border border-border-theme rounded-2xl flex items-center justify-center p-6 overflow-hidden hover:border-primary transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h3 className="text-foreground font-bold text-center tracking-widest group-hover:scale-110 transition-transform relative z-10">{client}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
