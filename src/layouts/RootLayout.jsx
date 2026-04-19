import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-400">
            <Header />
            <main className="w-full relative z-10 pt-[104px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
