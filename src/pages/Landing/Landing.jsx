import HeroSection from './sections/HeroSection'
import ValueStrip from './sections/ValueStrip'
import AboutSection from './sections/AboutSection'
import TracksSection from './sections/TracksSection'
import LearningExperienceSection from './sections/LearningExperienceSection'

function Landing() {
  return (
    <section>
      <HeroSection />
      <ValueStrip />
      <AboutSection />
      <TracksSection />
      <LearningExperienceSection />
    </section>
  )
}

export default Landing