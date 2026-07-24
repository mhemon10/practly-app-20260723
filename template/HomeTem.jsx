import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Hero from '@/components/sections/HeroSection';
import HowItWorks from '@/components/sections/HowItWorks';
import React from 'react';

const HomeTem = () => {
    return (
        <div>
            <Hero />
            <FeaturesGrid />
            <HowItWorks/>
        </div>
    );
};

export default HomeTem;