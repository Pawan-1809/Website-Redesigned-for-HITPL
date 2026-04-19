import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    useEffect(() => {
        gsap.fromTo(
            ".reveal-contact",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
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
                <div className="reveal-contact mb-4 inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
                    Get in Touch
                </div>
                <h1 className="reveal-contact text-4xl md:text-6xl font-black text-foreground mb-16 transition-colors">
                    Contact <span className="text-primary">HITPL</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="reveal-contact bg-secondary border border-border-theme backdrop-blur-md p-8 md:p-12 rounded-[40px] h-fit transition-all duration-300 shadow-xl">
                        <h2 className="text-2xl font-bold text-foreground mb-8 transition-colors">Send a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2 uppercase tracking-wider transition-colors">Name</label>
                                <input type="text" className="w-full bg-background border border-border-theme rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all" placeholder="Your full name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2 uppercase tracking-wider transition-colors">Email</label>
                                <input type="email" className="w-full bg-background border border-border-theme rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2 uppercase tracking-wider transition-colors">Phone</label>
                                <input type="tel" className="w-full bg-background border border-border-theme rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all" placeholder="Contact number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2 uppercase tracking-wider transition-colors">Message</label>
                                <textarea rows="4" className="w-full bg-background border border-border-theme rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all resize-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20">
                                Submit Request
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="reveal-contact bg-primary/10 border border-primary/20 backdrop-blur-md p-8 rounded-[40px] transition-colors shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6 transition-colors">Headquarters</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-primary shrink-0 mt-1" />
                                    <p className="text-muted transition-colors">4th Floor, Karni Heights, Niral Enem Horo Marg,<br/>New Garden, Kanka, Ranchi, Jharkhand 834001</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-primary shrink-0" />
                                    <p className="text-muted transition-colors">0651-2332886 / 7764884001 (Customer Care)</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-primary shrink-0" />
                                    <p className="text-muted break-all transition-colors">hiralalindustech@hiralagroupranchi.co.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Branch Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {branches.map((branch, idx) => (
                                <div key={idx} className="reveal-contact bg-secondary border border-border-theme p-6 rounded-3xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-md">
                                    <div>
                                        <p className="text-primary font-bold text-lg mb-2 border-b border-border-theme pb-2 inline-block">{branch.city}</p>
                                        <p className="text-muted font-medium text-xs mb-4 leading-relaxed transition-colors">{branch.title}</p>
                                    </div>
                                    <div className="space-y-2 mt-auto">
                                        <div className="flex items-start gap-2">
                                            <Phone className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                                            <p className="text-muted text-xs transition-colors">{branch.phone}</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Mail className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                                            <p className="text-muted text-xs break-all transition-colors">{branch.email}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
