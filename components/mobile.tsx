import { Box, Flex } from 'rebass'

import Image from 'components/Image'
import bg from 'public/background.svg'
import Header from './Header/mobile'
import WelcomeBlock from 'components/ContentBlock/WelcomeBlock/mobile'
import FeaturesBlock from 'components/ContentBlock/FeaturesBlock/mobile'

export default function Mobile() {
  return (
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
          paddingBottom={'48px'}
          minHeight="fit-content"
          sx={{
            borderBottomLeftRadius: '48px',
            borderBottomRightRadius: '48px',
            paddingTop: '144px',
          }}
        >
          <Flex width={'80%'} height={'100%'} flexDirection="column" justifyContent={'space-between'} alignItems="center">
            <WelcomeBlock />
            <FeaturesBlock />
          </Flex>
        </Flex>
        <Flex width={'100%'} minHeight={900} justifyContent="center" flexDirection={'column'} alignItems="center" backgroundColor="white">
          <Flex width={'80%'} height={'100%'} flexDirection="column" justifyContent={'space-between'} alignItems="center">
            {/* <SectionsBlock /> */}
            {/* <RoadmapBlock /> */}
            {/* <Community /> */}
          </Flex>
          {/* <Footer /> */}
        </Flex>
      </Box>
    </Flex>
  )
}