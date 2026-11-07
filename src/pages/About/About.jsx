import AboutHeroSection from './sections/AboutHeroSection'
import WhyWeComeTogetherSection from './sections/WhyWeComeTogetherSection'
import WhatGuidesUsSection from './sections/WhatGuidesUsSection'
import PeopleNotLabelsSection from './sections/PeopleNotLabelsSection'
import ResponsibilityBannerSection from './sections/ResponsibilityBannerSection'
import CTASection from '../Landing/sections/CTASection'

function About() {
  return (
    <div>
      <AboutHeroSection />
      <WhyWeComeTogetherSection />
      <WhatGuidesUsSection />
      <PeopleNotLabelsSection />
      <ResponsibilityBannerSection />
      <CTASection />
    </div>
  )
}

export default About