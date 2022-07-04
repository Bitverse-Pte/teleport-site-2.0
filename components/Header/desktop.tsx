import React from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'

import mainLogo from 'public/main_logo.svg'
import AnimatedNavbar from 'components/StripeMenu'
import ambassadorLogo from 'public/ambassador.svg'
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
        height: '120px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'flex-end',
        marginRight: '5%',
      }}
    >
      <Banner />
      <AnimatedNavbar duration={300} />
      <Flex
        alignItems={'center'}
        width="fit-content"
        minWidth={168}
        sx={{
          fontFamily: 'IBM Plex Sans',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '24px',
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
