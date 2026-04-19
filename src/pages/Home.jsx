import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Awards from '../components/Awards';
import WhatMakesUsDifferent from '../components/WhatMakesUsDifferent';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <Services />
            <WhatMakesUsDifferent />
            <Awards />
        </div>
    );
}
