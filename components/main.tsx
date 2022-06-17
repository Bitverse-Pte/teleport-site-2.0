import React from 'react'
import FeaturesBlock from './ContentBlock/FeaturesBlock'
import Community from './ContentBlock/CommunityBlock'
import Footer from './Footer'
import Header from './Header'
import RoadmapBlock from './ContentBlock/RoadmapBlock'

export default function Main() {
  return (
    <>
      <Header />
      <FeaturesBlock />
      <Community />
      <RoadmapBlock />
      <Footer />
    </>
  )
}
