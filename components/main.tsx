import FeaturesBlock from './ContentBlock/FeaturesBlock'
import SectionsBlock from './ContentBlock/SectionBlock'
import Community from './ContentBlock/CommunityBlock'
import Footer from './Footer'
import Header from './Header'
import RoadmapBlock from './ContentBlock/RoadmapBlock'

export default function Main() {
  return (
    <>
      <Header />
      <FeaturesBlock />
      <SectionsBlock />
      <Community />
      <RoadmapBlock />
      <Footer />
    </>
  )
}
