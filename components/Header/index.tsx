import React from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'

import mainLogo from 'public/main_logo.svg'
import AnimatedNavbar from 'components/StripeMenu'
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
        width: '100%',
        height: '200px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        position: 'relative',
        padding: '40px',
        backgroundColor: '#05050E',
      }}
    >
      <Banner />
      <Box style={{ position: 'absolute', height: 'calc(100% - 80px)', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <AnimatedNavbar duration={300} />
      </Box>
    </Flex>
  )
}

function Banner() {
  return (
    <Flex
      sx={{
        height: '100%',
        alignItems: 'center',
        width: '240px',
      }}
    >
      <Image src={mainLogo} alt={'main-logo'} height="55px" />
    </Flex>
  )
}
