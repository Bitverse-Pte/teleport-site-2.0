import { Box, Flex } from 'rebass'

import Image from 'components/Image'
import bg from 'public/background.svg'
import Header from './Header/mobile'
import WelcomeBlock from 'components/ContentBlock/WelcomeBlock/mobile'
import FeaturesBlock from 'components/ContentBlock/FeaturesBlock/mobile'
import SectionsBlock from 'components/ContentBlock/SectionsBlock/mobile'
import RoadmapBlock from 'components/ContentBlock/RoadmapBlock/mobile'
import CommunityBlock from 'components/ContentBlock/CommunityBlock/mobile'
import Footer from 'components/Footer/mobile'

export const SCROLL_ROOT_ID = 'scroll_root'

function Mobile() {
  return (
    <>
      <Flex
        height={'100vh'}
        width="100%"
        flexDirection="column"
        sx={{
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          id={SCROLL_ROOT_ID}
          width={'100%'}
          sx={{
            overflowX: 'hidden',
            position: 'relative',
          }}
        >
          <Image src={bg} alt={'background-image'} layout="fill" objectFit="cover" objectPosition={'left top'} quality={100}></Image>
          <Header />
          <Flex
            width={'100%'}
            justifyContent="center"
            flexDirection={'column'}
            alignItems="center"
            backgroundColor="#05050E"
            paddingBottom={'36px'}
            minHeight="fit-content"
            sx={{
              borderBottomLeftRadius: '36px',
              borderBottomRightRadius: '36px',
              paddingTop: '60px',
            }}
          >
            <Flex width={'88%'} height={'100%'} flexDirection="column" justifyContent={'space-between'} alignItems="center">
              <WelcomeBlock />
              <FeaturesBlock />
            </Flex>
          </Flex>
          <Flex width={'100%'} minHeight={900} justifyContent="center" flexDirection={'column'} alignItems="center" backgroundColor="white">
            <Flex width={'88%'} height={'100%'} flexDirection="column" justifyContent={'space-between'} alignItems="center">
              <SectionsBlock />
              <RoadmapBlock />
              <CommunityBlock />
            </Flex>
            <Footer />
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

// export default WithLoading(Mobile)
export default Mobile
