import HeroSection from './sections/HeroSection'
import ValueStrip from './sections/ValueStrip'
import AboutSection from './sections/AboutSection'
import TracksSection from './sections/TracksSection'
import LearningExperienceSection from './sections/LearningExperienceSection'
import ProjectBasedLearningSection from './sections/ProjectBasedLearningSection'
import JourneySection from './sections/JourneySection'
import FinalBannerSection from './sections/FinalBannerSection'
import FAQSection from './sections/FAQSection'
import CTASection from './sections/CTASection'

function Landing() {
  return (
    <section>
      <HeroSection />
      <ValueStrip />
      <AboutSection />
      <TracksSection />
      <LearningExperienceSection />
      <ProjectBasedLearningSection />
      <JourneySection />
      <FinalBannerSection />
      <FAQSection />
      <CTASection />
    </section>
  )
}

export default Landing