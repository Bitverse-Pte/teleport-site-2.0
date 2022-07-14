import { Box, Flex } from 'rebass'

import FeaturesBlock from 'components/ContentBlock/FeaturesBlock/desktop'
import SectionsBlock from 'components/ContentBlock/SectionsBlock/desktop'
import Footer from './Footer/desktop'
import Header from './Header/desktop'
import RoadmapBlock from './ContentBlock/RoadmapBlock/desktop'
import bg from 'public/background.svg'
import colorfulDownArrow from 'public/colorful-down-arrow.svg'
import Image from 'components/Image'
import WelcomeBlock from 'components/ContentBlock/WelcomeBlock/desktop'
import { WithLoading } from './WithLoading'
import CommunityBlock from './ContentBlock/CommunityBlock/desktop'

function Desktop() {
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
        <Flex marginTop={'200px'} minWidth={802} width={'55%'} maxWidth="1132px" minHeight={1280} flexDirection="column" justifyContent={'space-between'} alignItems="center" paddingBottom={48}>
          <WelcomeBlock />
          <Box marginTop={84} width={120} height={120}>
            <Image src={colorfulDownArrow} alt="colorful-down-arrow" />
          </Box>
          <FeaturesBlock />
        </Flex>
      </Flex>
      <Flex height={'100%'} width={'100%'} justifyContent="center" flexDirection={'column'} alignItems="center" backgroundColor="white">
        <Flex minWidth={802} width={'55%'} maxWidth="1132px" flexDirection="column" justifyContent={'flex-start'} alignItems="center">
          <SectionsBlock />
          <RoadmapBlock />
          <CommunityBlock />
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}
// export default WithLoading(Desktop)
export default Desktop
