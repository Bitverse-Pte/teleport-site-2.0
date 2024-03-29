import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Flex, Box, SxStyleProp, Text, FlexProps, TextProps } from 'rebass/styled-components'
import Image from 'components/Image'
import throttle from 'lodash-es/throttle'
import { css } from 'styled-components'

import mobileLogo from 'public/mobile-logo.svg'
import mobileLogoBlackText from 'public/mobile-logo-black-text.svg'
import mobileMenuIcon from 'public/mobile-menu-icon.svg'
import mobileMenuCloseIcon from 'public/mobile-menu-close-icon.svg'
import arrow from 'public/mobile-menu-arrow.svg'
import ambassadorFire from 'public/ambassador.svg'
import { Base64SvgHolder } from 'components/Image/Base64SvgHolder'
import { SCROLL_ROOT_ID } from 'components/Mobile'
import { presetSensors } from 'utils/presetSensors'
import { mobileMenuDiscordIcon, mobileMenuLinktreeIcon, mobileMenuMediumIcon, mobileMenuTelegramIcon, mobileMenuTwitterIcon } from 'components/Image/mobileBase64Images'

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
      opacity: 1,
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
  }, [scroll])

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
        height: '72px',
        width: '100%',
        alignItems: 'center',
        top: 0,
        zIndex: 999,
        position: 'fixed',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Flex sx={{ backdropFilter: 'blur(5px)', alignItems: 'center', width: '100%', minHeight: '72px', position: 'fixed', justifyContent: 'center', ...headerBackground, transition: 'all 0.2 ease-in-out' }}>
        <Banner
          sx={{
            ...(atTop
              ? {}
              : {
                  left: '6%',
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
            marginRight: '6vw',
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
          opacity: 0,
          padding: '0 6%',
          // boxShadow: '0px 5px 10px 0px rgba(128,128,128,0.5)',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(15px)',
          background: 'rgba(255,255,255, 1)',
          ...(menuSpread || {}),
        }}
      >
        <Flex
          flexDirection={'column'}
          width="40%"
          sx={{
            boxShadow: '5px 1px 5px 0px rgba(128,128,128,0.05)',
            paddingTop: '20px',
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
          <MobileMenuAmbassadorItem title="Ambassador" onClick={presetSensors.header.ambassador} />
        </Flex>
        <Flex sx={{ flex: 1, height: '100%', minHeight: 'fit-content', position: 'relative' }}>
          <Flex sx={{ width: '100%', height: 'calc(100vh - 73px)', minHeight: 'fit-content', position: 'absolute', overflowY: 'auto' }}>
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
        transition: 'all 0.2s ease-in-out, opacity 1s ease-in-out',
        height: '100%',
        alignItems: 'center',
        minWidth: '133px',
        maxWidth: '133px',
        /*  '& > span': {
          position: 'absolute',
        }, */
        '.mobile-logo': {
          transition: 'all 0.2s ease-in-out, opacity 0.2s ease-in-out',
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
      <Box className="mobile-logo white-text" style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={mobileLogo} alt={'main-logo'} height="55px" width={'133px'} />
      </Box>
      <Box className="mobile-logo black-text" style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={mobileLogoBlackText} alt={'main-logo'} height="55px" width={'133px'} />
      </Box>
    </Flex>
  )
}

function MobileMenuAmbassadorItem({ title, onClick }: { title: string; showArrow?: boolean } & FlexProps) {
  return (
    <Flex
      sx={{
        transition: 'all 0.2s ease-in-out',
      }}
      height="60px"
      alignItems="center"
      width={'100%'}
      paddingRight="10px"
      justifyContent={'flex-start'}
      onClick={onClick}
    >
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '14px',
          color: `rgba(5,5,14,0.5)`,
          width: 'fit-content',
          marginRight: '6px',
          ':active,:hover': {
            color: `rgba(5,5,14,1)`,
          },
        }}
      >
        {title}
      </Text>
      <Image src={ambassadorFire} width={14} height={14} alt={'mobile-menu-icon'} />
    </Flex>
  )
}

function MobileMenuItem({ title, showArrow = true, opacityOrNot = true, imageSrc = arrow, onClick }: { imageSrc?: string; title: string; showArrow?: boolean; opacityOrNot?: boolean } & FlexProps) {
  return (
    <Flex
      sx={{
        transition: 'all 0.2s ease-in-out',
      }}
      height="60px"
      alignItems="center"
      width={'100%'}
      paddingRight="10px"
      justifyContent={'space-between'}
      onClick={onClick}
    >
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '14px',
          color: `rgba(5,5,14,${opacityOrNot ? 1 : 0.5})`,
          minWidth: '70%',
        }}
      >
        {title}
      </Text>
      <Flex
        sx={{
          transition: 'all 0.2s ease-in-out',
          opacity: opacityOrNot ? 1 : 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={imageSrc} width={14} height={14} alt={'mobile-menu-icon'} />
      </Flex>
    </Flex>
  )
}

function DocsMenuItem({ itemText, showBottomBorder, onClick, className }: { itemText: string; showBottomBorder?: boolean; onClick?: React.MouseEventHandler<HTMLDivElement>; className?: string }) {
  return (
    <Text
      onClick={onClick}
      sx={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '60px',
        width: '100%',
        color: '#05050E',
        '::after': {
          display: 'block',
          content: '',
          borderBottom: 'solid rgba(0,0,0, 0.05) 1px',
        },
      }}
      className={className}
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
      paddingTop="20px"
      paddingLeft="20px"
      color="black"
      sx={{
        position: 'absolute',
        transition: 'all 0.2s ease-in-out',
        opacity: opacityOrNot ? 1 : 0,
        zIndex: opacityOrNot ? 1 : -1,
      }}
    >
      <DocsMenuItem itemText="White Paper" showBottomBorder={true} onClick={presetSensors.header.whitepaper} />
      <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(0,0,0, 0.05)', borderBottomWidth: '1px', width: '100%', margin: '30px 0' }}></hr>
      {/* <DocsMenuItem className="notranslate" itemText=" Teleport Network" onClick={presetSensors.header.network} />
      <DocsMenuItem className="notranslate" itemText=" XIBC" onClick={presetSensors.header.xibc} /> */}
      <DocsMenuItem className="notranslate" itemText=" Developer" onClick={presetSensors.header.developer} />
      {/* <DocsMenuItem itemText=" Validator" showBottomBorder onClick={presetSensors.header.validator} /> */}
      <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(0,0,0, 0.05)', borderBottomWidth: '1px', width: '100%', margin: '30px 0' }}></hr>
      <DocsMenuItem itemText=" Wallet" onClick={presetSensors.header.walletDoc} />
    </Flex>
  )
}

function CommunityMenuItem({ base64String, itemText, onClick }: { base64String: string; itemText: string; onClick?: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <Flex width={'100%'} justifyContent="flex-start" alignItems={'center'} onClick={onClick}>
      <Base64SvgHolder base64String={base64String} width="28px" height="28px" />
      &nbsp; &nbsp;
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '60px',
          color: '#05050E',
        }}
      >
        {itemText}
      </Text>
    </Flex>
  )
}

function CommunityMenu({ opacityOrNot = true, onClick }: { opacityOrNot?: boolean } & FlexProps) {
  return (
    <Flex
      className="notranslate"
      width={'100%'}
      minHeight="100%"
      flexDirection={'column'}
      alignItems="flex-start"
      paddingTop="20px"
      paddingLeft="20px"
      sx={{
        position: 'absolute',
        transition: 'all 0.2s ease-in-out',
        opacity: opacityOrNot ? 1 : 0,
        zIndex: opacityOrNot ? 1 : 0,
      }}
    >
      <CommunityMenuItem onClick={presetSensors.header.twitter} base64String={mobileMenuTwitterIcon} itemText="Twitter" />
      <CommunityMenuItem onClick={presetSensors.header.telegram} base64String={mobileMenuTelegramIcon} itemText="Telegram" />
      <CommunityMenuItem onClick={presetSensors.header.discord} base64String={mobileMenuDiscordIcon} itemText="Discord" />
      <CommunityMenuItem onClick={presetSensors.header.medium} base64String={mobileMenuMediumIcon} itemText="Medium" />
      <CommunityMenuItem onClick={presetSensors.header.linktree} base64String={mobileMenuLinktreeIcon} itemText="Linktree" />
    </Flex>
  )
}

function ToolMenuBlock({ title, children }: { title: string } & FlexProps) {
  return (
    <Flex width={'100%'} margin="15px 0" flexDirection={'column'}>
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '14px',
          color: '#05050E',
          opacity: 0.5,
          marginBottom: '15px',
        }}
      >
        {title}
      </Text>
      <hr
        style={{
          marginTop: '7px',
          marginBottom: '15px',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'rgba(0,0,0, 0.05)',
          borderBottomWidth: '1px',
          width: '100%',
        }}
      ></hr>
      {children}
    </Flex>
  )
}

function ToolMenuSubBlock({ title, children }: { title?: string } & FlexProps) {
  return (
    <Flex width={'100%'} margin={title ? '15px 0' : '0'} flexDirection={'column'}>
      {title && (
        <Text
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '12px',
            color: '#05050E',
            opacity: 0.5,
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Text>
      )}
      <Flex flexDirection={'column'} alignItems="flex-start" justifyContent={'space-between'} padding={title ? '15px' : '0 15px'}>
        {children}
      </Flex>
    </Flex>
  )
}

function ToolMenuItem({ itemText, onClick }: { itemText: string; onClick?: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <Text
      onClick={onClick}
      sx={{
        whiteSpace: 'nowrap',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '14px',
        color: '#05050E',
        margin: '23px 0',
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
      className="notranslate"
      sx={{
        position: 'absolute',
        transition: 'all 0.2s ease-in-out',
        opacity: opacityOrNot ? 1 : 0,
        zIndex: opacityOrNot ? 1 : 0,
      }}
      paddingTop="20px"
      paddingLeft="20px"
      flexDirection={'column'}
      width={'100%'}
    >
      <ToolMenuBlock title="Faucet">
        <ToolMenuSubBlock title="Faucet (TELE)">
          <ToolMenuItem itemText="Discord" onClick={presetSensors.header.discord} />
        </ToolMenuSubBlock>
        <ToolMenuSubBlock title=" Faucet (TUSDT)">
          {/* <ToolMenuItem itemText="Teleport Testnet" /> */}
          <ToolMenuItem itemText="BNB Testnet" onClick={presetSensors.header.bscFaucet} />
          <ToolMenuItem itemText="Rinkeby" onClick={presetSensors.header.rinkebyFaucet} />
        </ToolMenuSubBlock>
      </ToolMenuBlock>
      {/*  <ToolMenuBlock title="Explorer">
        <ToolMenuSubBlock>
          <ToolMenuItem itemText="EVM" onClick={presetSensors.header.evmExplorer} />
          <ToolMenuItem itemText="Tendermint" onClick={presetSensors.header.tendermintExplorer} />
        </ToolMenuSubBlock>
      </ToolMenuBlock> */}
    </Flex>
  )
}
