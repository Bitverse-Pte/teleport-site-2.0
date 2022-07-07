import React, { memo } from 'react'
import { FooterStyled } from './styled'
import Link from 'next/link'
import Image from 'components/Image'
import { Flex } from 'rebass/styled-components'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'
import { ambassador_link, docs_link, github_link, discord_link } from 'constants/url'

const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapFooter">
        <Flex className={'flexTop'} flexDirection={'row'} justifyContent={'space-between'}>
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
              <Link href={ambassador_link} key={ambassador_link}>
                <a target={'_blank'}>Ambassador</a>
              </Link>
            </Flex>
            <Flex flexDirection={'column'} className={'wrapColumn'}>
              <div className={'textTitle'}>Developer</div>
              <Link href={docs_link} key={docs_link}>
                <a target={'_blank'}>Document</a>
              </Link>
              <Link href={github_link} key={github_link}>
                <a target={'_blank'}>Github</a>
              </Link>
              <Link href={discord_link} key={discord_link}>
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
