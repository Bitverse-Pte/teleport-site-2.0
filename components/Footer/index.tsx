import React, { memo } from 'react'
import Link from 'next/link'
import Image from 'components/Image'
import { Flex } from 'rebass/styled-components'

import teleportHorizontal from 'public/images/teleport-horizontal.svg'
import { ambassador_link, docs_link, github_link, discord_link } from 'constants/url'

import styled from 'styled-components'

export const FooterStyled = styled.div`
  background: #f8fafc;
  padding: 50px 0 25px;
  width: 100%;

  .wrapFooter {
    max-width: 1132px;
    margin: 0 auto;
    width: 55%;
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
