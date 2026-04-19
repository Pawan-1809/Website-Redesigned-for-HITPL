import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Gallery() {
    useEffect(() => {
        gsap.fromTo(
            ".reveal-gallery",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
    }, []);

    const galleryImages = [
        "/images/1034a63_67abd5b.png",
        "/images/1441471_b73bd29.png",
        "/images/37a86a4_b577703.png",
        "/images/39f70c5_b975f7d.png",
        "/images/3ad6748_ef3700e.png",
        "/images/3beb2aa_50242d5.png",
        "/images/b04ac54_5c9cf32.png",
        "/images/d788f67_14d9279.png",
        "/images/db22f50_436cc94.png",
        "/images/df845c5_172eee8.png"
    ];

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen transition-colors duration-400">
            <div className="max-w-6xl mx-auto">
                <div className="mb-4 inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                    Visual Media
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-16 transition-colors">
                    Equipment <span className="text-primary">Gallery</span>
                </h1>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((src, idx) => (
                        <div key={idx} className="reveal-gallery break-inside-avoid relative group aspect-square bg-secondary rounded-3xl overflow-hidden border border-border-theme hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                            <img 
                                src={src} 
                                alt={`Equipment ${idx}`}
                                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-primary font-bold tracking-widest">VIEW DETAILS</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
