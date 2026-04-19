import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background text-foreground pt-20 pb-10 relative overflow-hidden border-t border-border-theme transition-colors duration-400">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-4 mb-6 cursor-pointer">
                            <img src="/images/logo.png" alt="HITPL Logo" className="h-20 w-auto" />
                            <span className="font-bold text-2xl tracking-wider text-foreground font-logo">HITPL</span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Part of Hiralal Group having Head Quarters in Ranchi Jharkhand. We have emerged as a one point solution for Customers seeking Mining & Industrial Equipment Solution.
                        </p>
                        <div className="text-primary font-bold text-xl mb-1">90+</div>
                        <p className="text-muted text-xs uppercase tracking-widest">Happy Clients</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-foreground uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><a href="/products" className="hover:text-primary transition-colors">Our Products</a></li>
                            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-foreground uppercase tracking-widest">Head Office</h4>
                        <p className="text-sm text-muted mb-4 leading-relaxed">
                            4th Floor, Karni Heights, Niral Enem Horo Marg, New Garden, Kanka, Ranchi, Jharkhand 834001
                        </p>
                        <h4 className="text-lg font-bold mt-8 mb-4 text-foreground uppercase tracking-widest">Contact Info</h4>
                        <ul className="space-y-3 text-sm text-muted">
                            <li><a href="mailto:hiralalindustech@hiralagroupranchi.co.in" className="hover:text-primary transition-colors hover:cursor-pointer break-all">hiralalindustech@hiralagroupranchi.co.in</a></li>
                            <li><a href="tel:06512332886" className="hover:text-primary transition-colors">0651-2332886</a></li>
                            <li><a href="tel:7764884001" className="hover:text-primary transition-colors">7764884001</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border-theme pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
                    <p>&copy; {new Date().getFullYear()} HITPL. All rights reserved.</p>
                </div>
            </div>

            {/* Giant Background Text */}
            <h1 className="absolute -bottom-10 md:-bottom-20 left-4 text-[100px] md:text-[200px] font-black text-foreground opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
                HITPL GROUP
            </h1>
        </footer>
    );
};

export default Footer;
