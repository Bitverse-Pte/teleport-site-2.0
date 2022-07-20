import React, { useCallback, useEffect, useState } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'

import mainLogo from 'public/main_logo.svg'
import AnimatedNavbar from 'components/StripeMenu'
import ambassadorLogo from 'public/ambassador.svg'
import { presetSensors } from 'utils/presetSensors'
import { SCROLL_ROOT_ID } from 'components/Desktop'
import { throttle } from 'lodash-es'
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
  const [atTop, setAtTop] = useState(true)

  const scroll = useCallback(() => {
    const scrollTop = document.getElementById(SCROLL_ROOT_ID)!.scrollTop
    if (scrollTop === 0) {
      setAtTop(true)
    } else {
      setAtTop(false)
    }
  }, [])
  useEffect(() => {
    const throttledScroll = throttle(scroll, 16)
    const scrollRoot = document.getElementById(SCROLL_ROOT_ID)
    scroll()
    scrollRoot && scrollRoot!.addEventListener('scroll', throttledScroll)
    return () => {
      scrollRoot && scrollRoot!.removeEventListener('scroll', throttledScroll)
    }
  }, [scroll])
  return (
    <Flex
      sx={{
        height: '72px',
        width: '100%',
        display: 'flex',
        top: 0,
        zIndex: 999,
        position: 'fixed',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '5%',
        ...(atTop ? { background: 'transparent', backdropFilter: 'unset' } : { background: 'rgba(5, 5, 14, 0.7)', backdropFilter: 'blur(79px)' }),
        // ...headerLogoStyle,
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
        width: '200px',
      }}
    >
      <Image src={mainLogo} alt={'main-logo'} height="55px" />
    </Flex>
  )
}
