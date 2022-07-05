import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Flex, Box, SxStyleProp, Text, FlexProps } from 'rebass/styled-components'
import Image from 'components/Image'
import throttle from 'lodash-es/throttle'
import { css } from 'styled-components'

import mobileLogo from 'public/mobile-logo.svg'
import mobileLogoBlackText from 'public/mobile-logo-black-text.svg'
import mobileMenuIcon from 'public/mobile-menu-icon.svg'
import mobileMenuCloseIcon from 'public/mobile-menu-close-icon.svg'
import arrow from 'public/mobile-menu-arrow.svg'
import ambassador from 'public/ambassador.svg'
import { Base64SvgHolder } from 'components/Image/Base64SvgHolder'
import { mobileMenuDiscordIcon, mobileMenuLinktreeIcon, mobileMenuMediumIcon, mobileMenuTelegramIcon, mobileMenuTwitterIcon } from 'components/Image/base64Images'
import { SCROLL_ROOT_ID } from 'components/Mobile'

export default function Header() {
  const [menuSpread, setMenuSpread] = useState<SxStyleProp | undefined>(undefined)
  const [headerBackground, setHeaderBackground] = useState<SxStyleProp | undefined>(undefined)
  const [headerLogoStyle, setHeaderLogoStyle] = useState<SxStyleProp | undefined>(undefined)
  const [menuIconOpacity, setMenuIconOpacity] = useState(1)
  /* {
    '.white-text': {
      opacity: 0,
    },
    '.black-text': {
      opacity: 1,
    },
  } */
  const spreadMenu = useCallback(() => {
    setMenuSpread({
      transform: 'scaleY(1)',
      height: '100vh',
    })
  }, [])

  const [selectedMenu, setSelectedMenu] = useState('Docs')
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
    scrollRoot && scrollRoot!.addEventListener('scroll', throttledScroll)
    return () => {
      scrollRoot && scrollRoot!.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  const menuButtonClick = useCallback(() => {
    if (menuSpread) {
      setMenuIconOpacity(1)
      setMenuSpread(undefined)
      setHeaderBackground(undefined)
      setHeaderLogoStyle({
        '.white-text': {
          opacity: 1,
        },
        '.black-text': {
          opacity: 0,
        },
      })
      scroll()
    } else {
      setAtTop(false)
      setHeaderLogoStyle({
        '.white-text': {
          opacity: 0,
        },
        '.black-text': {
          opacity: 1,
        },
      })
      setHeaderBackground({ backgroundColor: 'white' })
      setMenuIconOpacity(0)
      spreadMenu()
    }
  }, [menuSpread, scroll, spreadMenu])

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
      }}
    >
      <Flex sx={{ backdropFilter: 'blur(5px)', alignItems: 'center', width: '100%', minHeight: '96px', position: 'fixed', justifyContent: 'center', ...headerBackground, transition: 'all 0.2 ease-in-out' }}>
        <Banner
          sx={{
            ...(atTop
              ? {}
              : {
                  left: '5%',
                  transform: 'translateX(0)',
                }),
            ...headerLogoStyle,
          }}
        />
        <Box
          onClick={menuButtonClick}
          sx={{
            position: 'absolute',
            right: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            maxWidth: ' 36px',
            minWidth: ' 36px',
            marginRight: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: menuIconOpacity,
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Image src={mobileMenuIcon} alt={'mobile-menu-icon'} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: 1 - menuIconOpacity,
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Image src={mobileMenuCloseIcon} alt={'mobile-menu-close-icon'} />
          </Box>
        </Box>
      </Flex>

      <Flex
        sx={{
          position: 'absolute',
          width: '100%',
          transition: 'all 0.2s ease-in-out',
          transformOrigin: '50% 0',
          height: 0,
          transform: 'scaleY(0)',
          color: 'black',
          top: '100%',
          // boxShadow: '0px 5px 10px 0px rgba(128,128,128,0.5)',
          borderTop: '1px solid rgba(0, 0, 0, 0.26)',
          backdropFilter: 'blur(15px)',
          background: 'rgba(255,255,255, 1)',
          ...(menuSpread || {}),
        }}
      >
        <Flex
          flexDirection={'column'}
          maxWidth="45%"
          minWidth="45%"
          sx={{
            boxShadow: '5px 1px 5px 0px rgba(128,128,128,0.5)',
            padding: '24px 0',
          }}
        >
          <MobileMenuItem
            title="Docs"
            onClick={() => {
              setSelectedMenu('Docs')
              spreadMenu()
            }}
            opacityOrNot={selectedMenu === 'Docs'}
          />
          <MobileMenuItem
            title="Tool"
            onClick={() => {
              setSelectedMenu('Tool')
              spreadMenu()
            }}
            opacityOrNot={selectedMenu === 'Tool'}
          />
          <MobileMenuItem
            title="Community"
            onClick={() => {
              setSelectedMenu('Community')
              spreadMenu()
            }}
            opacityOrNot={selectedMenu === 'Community'}
          />
          <MobileMenuItem title="Ambassador" opacityOrNot={true} imageSrc={ambassador} />
        </Flex>
        <Flex sx={{ width: '55%', height: '100%', minHeight: 'fit-content', position: 'relative' }}>
          <Flex sx={{ width: '100%', height: '100%', minHeight: 'fit-content', position: 'absolute' }}>
            <DocsMenu opacityOrNot={selectedMenu === 'Docs'} />
            <ToolMenu opacityOrNot={selectedMenu === 'Tool'} />
            <CommunityMenu opacityOrNot={selectedMenu === 'Community'} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

function Banner({ sx }: FlexProps) {
  return (
    <Flex
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        transition: 'all 0.2s ease-in-out',
        height: '100%',
        alignItems: 'center',
        minWidth: '240px',
        maxWidth: '240px',
        /*  '& > span': {
          position: 'absolute',
        }, */
        '.mobile-logo': {
          transition: 'all 0.2s ease-in-out',
        },
        '.white-text': {
          opacity: 1,
        },
        '.black-text': {
          opacity: 0,
        },
        ...sx,
      }}
    >
      <Box className="mobile-logo white-text" style={{ position: 'absolute' }}>
        <Image src={mobileLogo} alt={'main-logo'} height="55px" width={'266px'} />
      </Box>
      <Box className="mobile-logo black-text" style={{ position: 'absolute' }}>
        <Image src={mobileLogoBlackText} alt={'main-logo'} height="55px" width={'266px'} />
      </Box>
    </Flex>
  )
}

function MobileMenuItem({ title, showArrow = true, opacityOrNot = true, imageSrc, onClick }: { imageSrc?: string; title: string; showArrow?: boolean; opacityOrNot?: boolean } & FlexProps) {
  return (
    <Flex
      sx={{
        transition: 'all 0.2s ease-in-out',
      }}
      height="60px"
      alignItems="center"
      width={'100%'}
      padding="0 18px"
      justifyContent={'space-between'}
      onClick={onClick}
    >
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '18px',
          color: `rgba(5,5,14,${opacityOrNot ? 1 : 0.5})`,
          minWidth: '70%',
        }}
      >
        {title}
      </Text>
      <Box
        sx={{
          transition: 'all 0.2s ease-in-out',
          opacity: opacityOrNot || imageSrc ? 1 : 0,
        }}
      >
        <Image src={imageSrc || arrow} width={20} height={20} alt={'mobile-menu-arrow'} />
      </Box>
    </Flex>
  )
}

function DocsMenuItem({ itemText, showBottomBorder }: { itemText: string; showBottomBorder?: boolean }) {
  return (
    <Text
      sx={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '60px',
        width: '100%',
        color: '#05050E',
        // margin: '24px 0',
        // ...(showBottomBorder && {
        '::after': {
          display: 'block',
          content: '',
          borderBottom: 'solid rgba(0,0,0, 0.26) 1px',
        },
        // }),
      }}
      {...(showBottomBorder
        ? {
            css: css`
              &:after {
                display: block;
                content: '';
                border-bottom: solid rgba(0, 0, 0, 0.26) 1px;
              }
            `,
          }
        : {})}
    >
      {itemText}
    </Text>
  )
}

function DocsMenu({ opacityOrNot = true, onClick }: { opacityOrNot?: boolean } & FlexProps) {
  return (
    <Flex
      width={'100%'}
      minHeight="100%"
      flexDirection={'column'}
      alignItems="flex-start"
      justifyContent="flex-start"
      padding="24px"
      color="black"
      sx={{
        position: 'absolute',
        transition: 'all 0.2s ease-in-out',
        opacity: opacityOrNot ? 1 : 0,
      }}
    >
      <DocsMenuItem itemText="White Paper" showBottomBorder={true} />
      {/* <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(0,0,0, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr> */}
      <DocsMenuItem itemText=" Teleport Chain" />
      <DocsMenuItem itemText=" XIBC" />
      <DocsMenuItem itemText=" Developer" />
      <DocsMenuItem itemText=" Validator" showBottomBorder />
      {/* <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(0,0,0, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr> */}
      <DocsMenuItem itemText=" Wallet" />
    </Flex>
  )
}

function CommunityMenuItem({ base64String, itemText }: { base64String: string; itemText: string }) {
  return (
    <Flex width={'100%'} justifyContent="flex-start" alignItems={'center'}>
      &nbsp;
      <Base64SvgHolder base64String={base64String} width="28px" height="28px" />
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '60px',
          color: '#05050E',
        }}
      >
        &nbsp;{itemText}
      </Text>
    </Flex>
  )
}

function CommunityMenu({ opacityOrNot = true, onClick }: { opacityOrNot?: boolean } & FlexProps) {
  return (
    <Flex
      width={'100%'}
      minHeight="100%"
      flexDirection={'column'}
      alignItems="flex-start"
      padding="24px"
      sx={{
        position: 'absolute',
        transition: 'all 0.2s ease-in-out',
        opacity: opacityOrNot ? 1 : 0,
      }}
    >
      <CommunityMenuItem base64String={mobileMenuTwitterIcon} itemText="Twitter" />
      <CommunityMenuItem base64String={mobileMenuTelegramIcon} itemText="Telegram" />
      <CommunityMenuItem base64String={mobileMenuDiscordIcon} itemText="Discord" />
      <CommunityMenuItem base64String={mobileMenuMediumIcon} itemText="Medium" />
      <CommunityMenuItem base64String={mobileMenuLinktreeIcon} itemText="Linktree" />
    </Flex>
  )
}

function ToolMenuBlock({ title, children }: { title: string } & FlexProps) {
  return (
    <Flex width={'100%'} margin="12px 0" flexDirection={'column'}>
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '24px',
          color: '#05050E',
          opacity: 0.5,
          marginBottom: '12px',
        }}
      >
        {title}
      </Text>
      <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(0,0,0, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
      {children}
    </Flex>
  )
}

function ToolMenuSubBlock({ title, children }: { title?: string } & FlexProps) {
  return (
    <Flex width={'100%'} margin="12px 0" flexDirection={'column'}>
      {title && (
        <Text
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: '22px',
            color: '#05050E',
            opacity: 0.5,
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Text>
      )}
      <Flex flexDirection={'column'} alignItems="flex-start" justifyContent={'space-between'} padding="12px">
        {children}
      </Flex>
    </Flex>
  )
}

function ToolMenuItem({ itemText }: { itemText: string }) {
  return (
    <Text
      sx={{
        whiteSpace: 'nowrap',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '20px',
        color: '#05050E',
        margin: '12px 0',
      }}
    >
      {itemText}
    </Text>
  )
}

function ToolMenu({ opacityOrNot = true, onClick }: { opacityOrNot?: boolean } & FlexProps) {
  return (
    <Flex
      color="black"
      sx={{
        position: 'absolute',
        transition: 'all 0.2s ease-in-out',
        opacity: opacityOrNot ? 1 : 0,
      }}
      padding="32px"
      flexDirection={'column'}
      width={'100%'}
    >
      <ToolMenuBlock title="Faucet">
        <ToolMenuSubBlock title="Faucet (TELE)">
          <ToolMenuItem itemText="Discord" />
        </ToolMenuSubBlock>
        <ToolMenuSubBlock title=" Faucet (TUSDT)">
          <ToolMenuItem itemText="Teleport Testnet" />
          <ToolMenuItem itemText="BNB Testnet" />
          <ToolMenuItem itemText="Rinkeby" />
        </ToolMenuSubBlock>
      </ToolMenuBlock>
      <ToolMenuBlock title="Explorer">
        <ToolMenuSubBlock>
          <ToolMenuItem itemText="EVM" />
          <ToolMenuItem itemText="Tendermint" />
        </ToolMenuSubBlock>
      </ToolMenuBlock>
    </Flex>
  )
}
