import { Hero } from '../components/landing/Hero'
import { HowItWorksStepper } from '../components/landing/HowItWorksStepper'
import { ImportantInfoCallout } from '../components/landing/ImportantInfoCallout'
import { RecruitmentStats } from '../components/landing/RecruitmentStats'
import { VerticalPreviewGrid } from '../components/landing/VerticalPreviewGrid'

export function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <RecruitmentStats />
      <VerticalPreviewGrid />
      <HowItWorksStepper />
      <ImportantInfoCallout />
    </div>
  )
}