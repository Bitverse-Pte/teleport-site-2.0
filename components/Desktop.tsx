import { Box, Flex } from 'rebass'

import FeaturesBlock from 'components/ContentBlock/FeaturesBlock/desktop'
import SectionsBlock from 'components/ContentBlock/SectionsBlock/desktop'
import Footer from './Footer/desktop'
import Header from './Header/desktop'
import RoadmapBlock from './ContentBlock/RoadmapBlock/desktop'
import bg from 'public/new-background.svg'
import colorfulDownArrow from 'public/colorful-down-arrow.svg'
import Image from 'components/Image'
import WelcomeBlock from 'components/ContentBlock/WelcomeBlock/desktop'
import CommunityBlock from './ContentBlock/CommunityBlock/desktop'
import { useCallback, useEffect } from 'react'

export const SCROLL_ROOT_ID = 'scroll_root'
export const CONTENT_BLOCK_WIDTH = '50%'

function Desktop() {
  const mouseOutJumper = useCallback(() => {
    const jumper = document.getElementById('jumper')
    if (jumper) {
      jumper.classList.remove('animate__animated')
      jumper.classList.remove('animate__shakeY')
      // jumper.classList.remove('animate__slow')
    }
  }, [])
  const mouseInJumper = useCallback(() => {
    const jumper = document.getElementById('jumper')
    if (jumper) {
      jumper.classList.add('animate__animated')
      jumper.classList.add('animate__shakeY')
      // jumper.classList.add('animate__slow')
    }
  }, [])
  return (
    <Box height={'100vh'} width={'100vw'} overflowY="auto" id="scroll_root" sx={{ position: 'relative' }}>
      <Box height={'100vh'} width={'100vw'} overflowY="auto" sx={{ position: 'absolute', top: 0 }}>
        <Image src={bg} alt={'background-image'} layout="fill" objectFit="contain" objectPosition={'left top'} quality={100}></Image>
      </Box>
      <Flex minHeight={'fit-content'} width={'100%'} justifyContent="center" flexDirection={'column'} alignItems="center">
        <Flex
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
          <Header />
          <Flex marginTop={'22.5vh'} minWidth={802} width={CONTENT_BLOCK_WIDTH} maxWidth="1132px" minHeight={1280} flexDirection="column" justifyContent={'space-between'} alignItems="center" paddingBottom={48}>
            <WelcomeBlock />
            <Box
              id={'jumper'}
              marginTop={84}
              width={120}
              height={120}
              sx={{
                '--animate-repeat': 1,
                '--animate-duration': '1350ms',
              }}
            >
              <Image src={colorfulDownArrow} alt="colorful-down-arrow" onMouseOver={mouseInJumper} onMouseOut={mouseOutJumper} />
            </Box>
            <FeaturesBlock />
          </Flex>
        </Flex>
        <Flex width={'100%'} justifyContent="center" flexDirection={'column'} alignItems="center" backgroundColor="white">
          <Flex minWidth={802} width={CONTENT_BLOCK_WIDTH} maxWidth="1132px" flexDirection="column" justifyContent={'flex-start'} alignItems="center">
            <SectionsBlock />
            <RoadmapBlock />
            <CommunityBlock />
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </Box>
  )
}
export default Desktop
