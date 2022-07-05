import React, { memo } from 'react'
import { FooterStyled } from './styled'
import Link, { LinkProps } from 'next/link'
import Image from 'components/Image'
import { Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'

const StyledLink = (props: { text: string } & LinkProps) => {
  return (
    <Link {...props} passHref={true}>
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '27px',
          color: '#000000',
          marginBottom: '16px',
          cursor: 'pointer',
          ':hover': {
            color: '#59C3AA',
          },
        }}
      >
        {props.text}
      </Text>
    </Link>
  )
}

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapFooter centerView">
        <Flex
          flexDirection={'row'}
          justifyContent={'space-between'}
          sx={{
            transition: 'all 0.2s ease-in-out',
            'a:hover': {
              color: '#59c3aa',
            },
          }}
        >
          <Link href="/">
            <a>
              <Image className="imgLogoHorizontal" src={teleportHorizontal} alt={'footer-horizontal-line'} />
            </a>
          </Link>
          <Flex flexDirection={'row'} justifyContent={'flex-end'} className={'wrapLinks'}>
            <Flex flexDirection={'column'} className={'wrapColumn'}>
              <div className={'textTitle'}>Apply</div>
              <StyledLink href={'https://ambassador.teleport.network/'} key={'https://ambassador.teleport.network/'} text="Ambassador" />
            </Flex>
            <Flex flexDirection={'column'} className={'wrapColumn'}>
              <div className={'textTitle'}>Developer</div>
              <StyledLink href={'https://ambassador.teleport.network/'} key={'https://ambassador.teleport.network/'} text="Document" />
              <StyledLink href={'https://ambassador.teleport.network/'} key={'https://ambassador.teleport.network/'} text="Github" />
              <StyledLink href={'https://ambassador.teleport.network/'} key={'https://ambassador.teleport.network/'} text="Community (Discord)" />
            </Flex>
          </Flex>
        </Flex>
        <div className="lineFooter"></div>
        <div className="textCopyright">©2022 Teleport. All rights reserved.</div>
      </div>
    </FooterStyled>
  )
}

export default memo(Footer)
