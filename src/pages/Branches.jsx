import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Branches() {
    useEffect(() => {
        gsap.fromTo(
            ".reveal-branch",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
    }, []);

    const branches = [
        { 
            city: "Dhanbad", 
            title: "1st Floor Room No.12, NALANDA ENCLAVE, Saraidhela - 828127", 
            phone: "+91 9771485411, 9771485405",
            email: "hiralalindustechdhn@gmail.com" 
        },
        { 
            city: "Koderma", 
            title: "1st Floor, Maharana Pratap Chowk, Near Shiv Vatika, Telaiya", 
            phone: "+91 9771485410, 9771485419",
            email: "praveenkhalkho2015@gmail.com" 
        },
        { 
            city: "Jamshedpur", 
            title: "2nd Floor, SunShine Complex, NH-33, Dimna - 831018", 
            phone: "+91 9771486915, 9771486918",
            email: "hiralalindustechjsr@gmail.com" 
        },
        { 
            city: "Patna", 
            title: "B-21, Luvkush Tower, Exhibition Road, Patna - 800001", 
            phone: "+91 9771486925, 9771485418",
            email: "kamal.ku2222@gmail.com" 
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen transition-colors duration-400">
            <div className="max-w-6xl mx-auto">
                <div className="reveal-branch mb-4 inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                    Regional Network
                </div>
                <h1 className="reveal-branch text-4xl md:text-6xl font-black text-foreground mb-16 transition-colors">
                    Our <span className="text-primary">Branches</span>
                </h1>

                {/* Headquarters Map */}
                <div className="reveal-branch bg-secondary border border-border-theme rounded-[40px] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-primary/50 transition-all duration-300 shadow-xl">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-4 transition-colors">Headquarters</h2>
                        <div className="flex items-start gap-4 mb-3">
                            <MapPin className="text-primary shrink-0 mt-1" />
                            <p className="text-muted text-lg transition-colors">4th Floor, Karni Heights, Niral Enem Horo Marg,<br/>New Garden, Kanka, Ranchi, Jharkhand 834001</p>
                        </div>
                    </div>
                </div>

                {/* Branch Grid expanded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {branches.map((branch, idx) => (
                        <div key={idx} className="reveal-branch bg-secondary border border-border-theme p-8 rounded-3xl hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 group shadow-lg">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{branch.city}</h3>
                                <div className="h-[2px] w-12 bg-primary/30 group-hover:bg-primary transition-colors mt-4"></div>
                            </div>
                            <p className="text-muted font-medium text-lg mb-8 leading-relaxed transition-colors">{branch.title}</p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-background p-4 rounded-2xl border border-border-theme transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-xl"><Phone className="text-primary w-5 h-5" /></div>
                                    <p className="text-foreground font-medium transition-colors">{branch.phone}</p>
                                </div>
                                <div className="flex items-center gap-4 bg-background p-4 rounded-2xl border border-border-theme overflow-hidden transition-colors">
                                    <div className="bg-primary/10 p-3 rounded-xl"><Mail className="text-primary w-5 h-5" /></div>
                                    <p className="text-foreground font-medium truncate transition-colors">{branch.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
