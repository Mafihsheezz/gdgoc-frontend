import OverviewHeroSection from './sections/OverviewHeroSection'
import LearningTracksSection from './sections/LearningTracksSection'
import LearningFormatsSection from './sections/LearningFormatsSection'
import LearningJourneySection from './sections/LearningJourneySection'
import StartingPointSection from './sections/StartingPointSection'
import CTASection from '../Landing/sections/CTASection'

function Overview() {
  return (
    <>
      <OverviewHeroSection />
      <LearningTracksSection />
      <LearningFormatsSection />
      <LearningJourneySection />
      <StartingPointSection />
      <CTASection />
    </>
  )
}

export default Overview