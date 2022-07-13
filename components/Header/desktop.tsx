import React from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'

import mainLogo from 'public/main_logo.svg'
import AnimatedNavbar from 'components/StripeMenu'
import ambassadorLogo from 'public/ambassador.svg'
import { presetSensors } from 'utils/presetSensors'
/* 
const Container = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: row;
	align-items: start;
`

const BannerContainer = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: row;
	align-items: start;
` */

export default function Header() {
  return (
    <Flex
      sx={{
        height: '96px',
        width: '100%',
        display: 'flex',
        top: 0,
        zIndex: 999,
        position: 'fixed',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        background: 'rgba(5, 5, 14, 0.7)',
        backdropFilter: 'blur(79px)',
      }}
    >
      <Banner />
      <AnimatedNavbar duration={300} />
      <Flex
        alignItems={'center'}
        width="fit-content"
        minWidth={168}
        onClick={presetSensors.header.ambassador}
        sx={{
          fontFamily: 'IBM Plex Sans',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '18px',
          color: '#0ACBE4',
          cursor: 'pointer',
        }}
      >
        <Image src={ambassadorLogo} alt="ambassador-logo"></Image>
        {'Ambassador'}
      </Flex>
    </Flex>
  )
}

function Banner() {
  return (
    <Flex
      sx={{
        position: 'absolute',
        left: '5%',
        height: '100%',
        alignItems: 'center',
        minWidth: '180px',
      }}
    >
      <Image src={mainLogo} alt={'main-logo'} height="55px" />
    </Flex>
  )
}
