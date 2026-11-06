import HeroSection from './sections/HeroSection'
import ValueStrip from './sections/ValueStrip'
import AboutSection from './sections/AboutSection'
import TracksSection from './sections/TracksSection'

function Landing() {
  return (
    <section>
      <HeroSection />
      <ValueStrip />
      <AboutSection />
      <TracksSection />
    </section>
  )
}

export default Landing