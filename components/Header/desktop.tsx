import React, { useCallback, useEffect, useState } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'
import { ReactStripMenu } from 'react-strip-menu'

import mainLogo from 'public/main_logo.svg'
import AnimatedNavbar from 'components/StripeMenu'
import ambassadorLogo from 'public/ambassador.svg'
import { presetSensors } from 'utils/presetSensors'
import { SCROLL_ROOT_ID } from 'components/Desktop'
import { throttle } from 'lodash-es'
import CommunityDropdown from 'components/StripeMenu/DropdownContents/CommunityDropdown'
import DocsDropdown from 'components/StripeMenu/DropdownContents/DocsDropdown'
import ToolDropdown from 'components/StripeMenu/DropdownContents/ToolDropdown'
import { NavbarItemEl, NavbarItemTitle } from 'components/StripeMenu/Navbar/NavbarItem'
import { DropdownBackground } from 'components/StripeMenu/DropdownContainer/Components'
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

/* 
 { title: 'Docs', dropdown: DocsDropdown },
  { title: 'Tool', dropdown: ToolDropdown },
  // { title: 'Governance', dropdown: GovernanceDrop },
  // { title: 'Ecosystem', dropdown: EcoSystemDrop },
  { title: 'Community', dropdown: CommunityDropdown },
  // {
*/

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
      {/* <AnimatedNavbar duration={300} /> */}
      <ReactStripMenu
        wrapperStyle={{
          transformOrigin: '0 0',
          background: 'rgba(10, 10, 10, 1)',
          mixBlendMode: 'normal',
          top: '50px',
          color: '#ffffff',
          border: 'solid rgba(255, 255, 255, 0.2) 0.5px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 50px 100px rgba(50, 50, 93, 0.1)',
        }}
        fadeInMode="fade"
        dropdowns={[<DocsDropdown key="docs-dropdown" />, <ToolDropdown key="tool-dropdown" />, <CommunityDropdown key="community-dropdown" />]}
      >
        <NavbarItemEl>
          <NavbarItemTitle>Docs</NavbarItemTitle>
        </NavbarItemEl>
        <NavbarItemEl>
          <NavbarItemTitle>Tool</NavbarItemTitle>
        </NavbarItemEl>
        <NavbarItemEl>
          <NavbarItemTitle>Community</NavbarItemTitle>
        </NavbarItemEl>
      </ReactStripMenu>
      <Flex
        alignItems={'center'}
        width="fit-content"
        minWidth={168}
        onClick={presetSensors.header.ambassador}
        sx={{
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '18px',
          color: 'rgba(57, 225, 186, 1)',
          cursor: 'pointer',
          marginLeft: '37px',
          '@media screen and (max-width: 1300px)': {
            marginLeft: '16px',
          },
          '@media screen and (max-width: 1000px)': {
            marginLeft: '7px',
          },
          '@media screen and (max-width: 840px)': {
            marginLeft: '1px',
          },
        }}
      >
        <Image src={ambassadorLogo} alt="ambassador-logo"></Image>
        &nbsp;{'Ambassador'}
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
