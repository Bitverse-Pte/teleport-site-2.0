import React, { useCallback, useEffect, useState } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import Image from 'components/Image'
import { ReactStripMenu } from 'react-strip-menu'
import styled from 'styled-components'

import mainLogo from 'public/main_logo.svg'
import ambassadorLogo from 'public/ambassador.svg'
import { presetSensors } from 'utils/presetSensors'
import { SCROLL_ROOT_ID } from 'components/Desktop'
import { throttle } from 'lodash-es'
import CommunityDropdown from 'components/Header/DropdownContents/CommunityDropdown'
import DocsDropdown from 'components/Header/DropdownContents/DocsDropdown'
import ToolDropdown from 'components/Header/DropdownContents/ToolDropdown'

export const NavbarItemTitle = styled.button`
  background: transparent;
  cursor: auto;
  border: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: white;
  display: flex;
  justify-content: center;
  transition: transform 250ms ease-in-out;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  margin: 0 42px;
  @media screen and (max-width: 1300px) {
    margin: 0 21px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0 12px;
  }
  @media screen and (max-width: 840px) {
    margin: 0 6px;
  }
  &:hover,
  &:focus {
    outline: none;
    .nav-menu-title:after {
      transform: scaleX(1);
    }
  }
  & .nav-menu-title:after {
    display: block;
    content: '';
    border-bottom: solid white 2px;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
`

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
        <NavbarItemTitle>
          <Box className="nav-menu-title">Docs</Box>
        </NavbarItemTitle>
        <NavbarItemTitle>
          <Box className="nav-menu-title">Tool</Box>
        </NavbarItemTitle>
        <NavbarItemTitle>
          <Box className="nav-menu-title">Community</Box>
        </NavbarItemTitle>
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
