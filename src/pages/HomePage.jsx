import React, { useState } from 'react'
import IntroSection from '../component/IntroSection'
import AboutSection from '../component/AboutSection'
import ServicesSection from '../component/ServicesSection'
import WhyChooseUs from '../component/WhyChooseUs'
import CallToAction from '../component/CallToAction'
import Features from '../component/Features'
import Portfolio from '../component/Portfolio'
import Pricing from '../component/Pricing'
import FAQ from '../component/FAQ'
import ContactUsModal from '../component/ContactUsModal'

function HomePage() {
    
    return (
        <>
            <IntroSection />
            <AboutSection />
            <ServicesSection />
            {/* <WhyChooseUs /> */}
            <CallToAction  />
            <Portfolio />
            <Pricing />
            <FAQ />

        </>
    )
}

export default HomePage