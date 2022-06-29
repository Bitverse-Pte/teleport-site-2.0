import { Flex } from 'rebass'

import FeaturesBlock from './ContentBlock/FeaturesBlock'
import SectionsBlock from './ContentBlock/SectionBlock'
import Community from './ContentBlock/CommunityBlock'
import Footer from './Footer'
import Header from './Header'
import RoadmapBlock from './ContentBlock/RoadmapBlock'

import bg from 'public/background.svg'
import Image from 'components/Image'
import WelcomeBlock from './ContentBlock/WelcomeBlock'

export default function Main() {
  return (
    <>
      <Flex
        height={'100%'}
        width={'100%'}
        justifyContent="center"
        flexDirection={'column'}
        alignItems="center"
        backgroundColor="#05050E"
        sx={{
          borderBottomLeftRadius: '48px',
          borderBottomRightRadius: '48px',
        }}
      >
        <Image src={bg} alt={'background-image'} layout="fill" objectFit="contain" objectPosition={'left top'} quality={100}></Image>
        <Header />
        <Flex minWidth={802} width={'70%'} maxWidth="1132px" flexDirection="column" justifyContent={'flex-start'} alignItems="center">
          <WelcomeBlock />
          <FeaturesBlock />
        </Flex>
      </Flex>
      <Flex height={'100%'} width={'100%'} justifyContent="center" flexDirection={'column'} alignItems="center" backgroundColor="white">
        <Flex minWidth={802} width={'70%'} maxWidth="1132px" flexDirection="column" justifyContent={'flex-start'} alignItems="center">
          <SectionsBlock />
          <RoadmapBlock />
          <Community />
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}
