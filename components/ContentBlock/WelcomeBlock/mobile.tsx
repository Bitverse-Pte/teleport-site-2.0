import { Box, Button, Flex, Text } from 'rebass'

import Image from 'components/Image'
import web3Svg from 'public/web3.svg'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import mobileWelcomeImg from 'public/mobile-welcome-img.svg'
import welcomeTeleport from 'public/welcome-teleport.svg'
import welcomeSubTitle from 'public/welcome-sub-title.svg'

export default function WelcomeBlock() {
  return (
    <Flex flexDirection={'column'} width="100%" minHeight={'fit-content'} justifyContent="space-between" alignItems={'center'} margin={"72px 0"}>
      <Flex marginBottom={12}>
        <Image src={welcomeTeleport} alt="welcome-main-title" objectFit="contain"></Image>
      </Flex>
      <Flex marginBottom={28.64}>
        <Image src={welcomeSubTitle} alt="welcome-sub-title" objectFit="contain"></Image>
      </Flex>
      <Flex marginBottom={30.15}>
        <Image src={mobileWelcomeImg} alt="welcome-main-img" objectFit="contain"></Image>
      </Flex>
      <Flex marginBottom={30}>
        <Box>
          <Image src={leftBottomArrow} alt="welcome-gif"></Image>
        </Box>
        <Box>
          <Image src={web3Svg} alt="welcome-gif"></Image>
        </Box>
      </Flex>
      <Flex width={'100%'} justifyContent="space-between" alignItems={'center'}>
        <Button
          sx={{
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '12px',
            lineHeight: '16px',
          }}
          padding={'15px 0'}
          height={'100%'}
          width={'45%'}
          backgroundColor="white"
          color="#161929"
        >
          Docs
        </Button>
        <Button
          sx={{
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '16px',
            border: 'solid 1px white',
            borderRadius: '12px',
          }}
          padding={'5px'}
          height={'100%'}
          width={'45%'}
          backgroundColor="transparent"
          color="white"
        >
          Whitepaper
        </Button>
      </Flex>
    </Flex>
  )
}
