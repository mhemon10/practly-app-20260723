import DemoSection from '@/components/sections/DemoSection';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Hero from '@/components/sections/HeroSection';
import HowItWorks from '@/components/sections/HowItWorks';
import WhoItsFor from '@/components/sections/WhoItsFor';
import React from 'react';

const HomeTem = () => {
    return (
        <div>
            <Hero />
            <FeaturesGrid />
            <HowItWorks />
            <WhoItsFor />
            <DemoSection/>
        </div>
    );
};

export default HomeTem;