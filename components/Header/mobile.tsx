import React from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'

import mobileLogo from 'public/mobile-logo.svg'
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
        minHeight: '96px',
        width: '100%',
        alignItems: 'center',
        top: 0,
        zIndex: 999,
        position: 'fixed',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Banner />
    </Flex>
  )
}

function Banner() {
  return (
    <Flex
      sx={{
        height: '100%',
        alignItems: 'center',
        minWidth: '240px',
      }}
    >
      <Image src={mobileLogo} alt={'main-logo'} height="55px" width={'266px'} />
    </Flex>
  )
}
