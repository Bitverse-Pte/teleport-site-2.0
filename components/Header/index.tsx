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
        minWidth: '802px',
        width: '70%',
        maxWidth: '1132px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        position: 'relative',
        justifyContent: 'center',
        marginBottom: '1rem',
      }}
    >
      <Flex
        sx={{
          width: '1132px',
          height: '100%',
        }}
      >
        <Banner />
        <Flex style={{ flex: 1, /* position: 'absolute',  */ height: '100%', /* left: '50%', transform: 'translateX(-50%)',  */ zIndex: 1, justifyContent: 'flex-end' }}>
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
      </Flex>
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
      <Image src={mainLogo} alt={'main-logo'} height="55px" />
    </Flex>
  )
}
