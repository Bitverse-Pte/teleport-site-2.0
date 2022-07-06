import React, { memo } from 'react'
import { FooterStyled } from './styled'
import Link from 'next/link'
import Image from 'components/Image'
import { Flex } from 'rebass/styled-components'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapFooter">
        <Flex className={"flexTop"} flexDirection={'row'} justifyContent={'space-between'}>
          <div>
            <Link href="/">
              <a>
                <Image className="imgLogoHorizontal" src={teleportHorizontal} alt={'footer-horizontal-line'} />
              </a>
            </Link>
          </div>
          <Flex flexDirection={'row'} justifyContent={'flex-end'} className={'wrapLinks'}>
            <Flex flexDirection={'column'} className={'wrapColumn'}>
              <div className={'textTitle'}>Apply</div>
              <Link href={'https://ambassador.teleport.network/'} key={'https://ambassador.teleport.network/'}>
                <a target={'_blank'}>Ambassador</a>
              </Link>
            </Flex>
            <Flex flexDirection={'column'} className={'wrapColumn'}>
              <div className={'textTitle'}>Developer</div>
              <Link href={'https://docs.teleport.network/'} key={'https://docs.teleport.network/'}>
                <a target={'_blank'}>Document</a>
              </Link>
              <Link href={'https://github.com/teleport-network'} key={'https://github.com/teleport-network'}>
                <a target={'_blank'}>Github</a>
              </Link>
              <Link href={'https://discord.gg/5YQtRDF4Rh'} key={'https://discord.gg/5YQtRDF4Rh'}>
                <a target={'_blank'}>Community (Discord)</a>
              </Link>
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
