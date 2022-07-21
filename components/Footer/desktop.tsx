import React, { memo } from 'react'
import Link, { LinkProps } from 'next/link'
import Image from 'components/Image'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'
import { presetSensors } from 'utils/presetSensors'
import { ambassador_link, discord_link, docs_link, github_link } from 'constants/url'
import { CONTENT_BLOCK_WIDTH } from 'components/Desktop'

const FooterStyled = styled.div`
  background: #f8fafc;
  padding: 50px 0 25px;
  width: 100%;

  .wrapFooter {
    max-width: 1132px;
    margin: 0 auto;
    width: ${() => CONTENT_BLOCK_WIDTH};
    min-width: 802px;
    .imgLogoHorizontal {
      height: 7rem;
    }

    @media (max-width: 900px) {
      & {
        width: 80%;
        .flexTop {
          flex-direction: row;
        }
      }
    }

    @media (max-width: 600px) {
      & {
        width: 86%;
        text-align: center;
        .flexTop {
          flex-direction: column;
        }
      }

      .wrapLinks {
        display: none;
      }
    }

    .lineFooter {
      height: 0.5px;
      transform: scaleY(0.5);
      background-color: black;
      margin: 20px 0;
      opacity: 0.3;
    }

    .textCopyright {
      font-size: 12px;
      color: rgba(5, 5, 14, 0.5);
      font-family: Poppins;
      line-height: 2.4rem;
    }

    .wrapLinks {
      width: 60%;

      .wrapColumn {
        margin-left: 20%;
        margin-bottom: 10px;

        .textTitle {
          padding-top: 10px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          color: #05050e;
          margin-bottom: 24px;
        }

        a {
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 2.7rem;
          color: #000000;
          margin-bottom: 16px;

          &:hover {
            font-weight: 800;
          }
        }
      }
    }
  }
`

const StyledDivForLink = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  :hover {
    color: rgba(78, 215, 182, 1);
    font-weight: 400;
  }
`

const StyledLink = (props: { text: string; children?: React.ReactNode } & LinkProps) => {
  return (
    <Link {...props} passHref={true}>
      <StyledDivForLink>
        <Text>{props.text}</Text>
        {props.children}
      </StyledDivForLink>
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
              <StyledLink href={discord_link} key={'community'} text="Community" onClick={presetSensors.footer.discord}>
                <div className="notranslate">(Discord)</div>
              </StyledLink>
            </Flex>
          </Flex>
        </Flex>
        <div className="lineFooter"></div>
        <div className="textCopyright notranslate">©2022 Teleport. All rights reserved.</div>
      </div>
    </FooterStyled>
  )
}

export default memo(Footer)
