import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
    useEffect(() => {
        gsap.fromTo(
            ".reveal-product",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
        );
    }, []);

    const products = [
        {
            title: "Construction & Mining Equipment",
            desc: "Comprehensive range of heavy machinery including hydraulic excavators, wheel loaders, and dump trucks ensuring high productivity and low operating costs.",
            img: "/images/1441471_b73bd29.png"
        },
        {
            title: "Material Handling Solutions",
            desc: "Advanced conveyor systems, crushers, and screening equipment designed for the harshest mining environments.",
            img: "/images/3ad6748_ef3700e.png"
        },
        {
            title: "Concrete Equipment",
            desc: "High-capacity concrete batching plants, transit mixers, and pumps from leading manufacturers.",
            img: "/images/f452aac_aeb89f4.png"
        },
        {
            title: "Industrial Explosives",
            desc: "Safe and reliable explosive solutions for mining and tunneling applications.",
            img: "/images/3beb2aa_50242d5.png"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen transition-colors duration-400">
            <div className="max-w-6xl mx-auto">
                <div className="mb-4 inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                    What We Offer
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 transition-colors">
                    Our <span className="text-primary">Products & Services</span>
                </h1>
                <p className="text-muted text-xl max-w-2xl mb-16 transition-colors">
                    HITPL is proud to be a FOUR STAR dealer for L&T construction equipment and other industry majors.
                </p>

                <div className="space-y-12">
                    {products.map((prod, idx) => (
                        <div key={idx} className={`reveal-product flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-secondary border border-border-theme rounded-[40px] p-8 md:p-12 hover:border-primary/30 transition-all duration-300 shadow-xl`}>
                            <div className="w-full md:w-1/2 aspect-[4/3] bg-background border border-border-theme rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group transition-colors">
                                <img src={prod.img} alt={prod.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10" />
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold text-foreground mb-4 transition-colors">{prod.title}</h2>
                                <p className="text-muted text-lg leading-relaxed mb-8 transition-colors">{prod.desc}</p>
                                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-foreground transition-all duration-300">
                                    Enquire Now <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
