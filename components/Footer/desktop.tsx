import React, { memo } from 'react'
import { FooterStyled } from './styled'
import Link, { LinkProps } from 'next/link'
import Image from 'components/Image'
import { Flex, Text } from 'rebass/styled-components'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'
import { presetSensors } from 'utils/presetSensors'
import { ambassador_link, discord_link, docs_link, github_link } from 'constants/url'

const StyledLink = (props: { text: string } & LinkProps) => {
    return (
        <Link {...props} passHref={true}>
            <Text
                sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '27px',
                    color: '#000000',
                    marginBottom: '16px',
                    cursor: 'pointer',
                    ':hover': {
                        color: '#59C3AA',
                        fontWeight: '800',
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
              <StyledLink href={ambassador_link} key={'ambassador'} text="Ambassador" onClick={presetSensors.footer.ambassador} />
            </Flex>
            <Flex flexDirection={'column'} className={'wrapColumn'}>
              <div className={'textTitle'}>Developer</div>
              <StyledLink href={docs_link} key={'doc'} text="Document" onClick={presetSensors.footer.doc} />
              <StyledLink href={github_link} key={'github'} text="Github" onClick={presetSensors.footer.github} />
              <StyledLink href={discord_link} key={'community'} text="Community (Discord)" onClick={presetSensors.footer.discord} />
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
