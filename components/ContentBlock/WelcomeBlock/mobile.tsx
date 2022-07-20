import { Box, Button, Flex, Text } from 'rebass'

import Image from 'components/Image'
import web3Svg from 'public/web3.svg'
import leftBottomArrow from 'public/leftBottomArrow.svg'
import welcomeTeleport from 'public/welcome-teleport.svg'
import welcomeSubTitle from 'public/welcome-sub-title.svg'
import { presetSensors } from 'utils/presetSensors'

export default function WelcomeBlock() {
  return (
    <Flex flexDirection={'column'} width="100%" sx={{ zIndex: 1 }} minHeight={'fit-content'} justifyContent="space-between" alignItems={'center'} margin={'57px 0'}>
      <Flex marginBottom={12} width={264}>
        <Image src={welcomeTeleport} alt="welcome-main-title" objectFit="contain"></Image>
      </Flex>
      <Flex marginBottom={20} width={264}>
        <Image src={welcomeSubTitle} alt="welcome-sub-title" objectFit="contain"></Image>
      </Flex>
      <Flex marginBottom={20}>
        <video src={require('../../../public/welcome.mp4')} autoPlay loop muted width={'100%'} />
      </Flex>
      <Flex marginBottom={20} width={220}>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <Image src={leftBottomArrow} alt="welcome-gif"></Image>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <Image src={web3Svg} alt="welcome-gif"></Image>
        </Box>
      </Flex>
      <Flex width={'100%'} justifyContent="space-between" alignItems={'center'}>
        <Button
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            transition: 'all 0.2s ease-in-out',
            borderRadius: '8px',
            lineHeight: '16px',
            ':active': {
              backgroundColor: 'rgba(80, 175, 153,1)',
            },
          }}
          onClick={presetSensors.body.doc}
          padding={'15px 0'}
          height={'48px'}
          width={'48%'}
          backgroundColor="white"
          color="#161929"
        >
          Docs
        </Button>
        <Button
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '8px',
            lineHeight: '16px',
            transition: 'all 0.2s ease-in-out',
            border: 'solid 1px white',
            ':active': {
              color: 'rgba(80, 175, 153,1)',
              borderColor: 'rgba(80, 175, 153,1)',
            },
          }}
          onClick={presetSensors.body.downloadWallet}
          padding={'15px 0'}
          height={'48px'}
          width={'48%'}
          backgroundColor="transparent"
          color="white"
        >
          Whitepaper
        </Button>
      </Flex>
    </Flex>
  )
}
