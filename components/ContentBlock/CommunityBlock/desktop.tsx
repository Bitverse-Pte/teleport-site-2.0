import React, { memo, useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import iconSocialTwitter from 'public/images/icon-social-twitter.svg'
import iconSocialTelegram from 'public/images/icon-social-telegram.svg'
import iconSocialDiscord from 'public/images/icon-social-discord.svg'
import iconSocialMedium from 'public/images/icon-social-medium.svg'
import iconSocialLinkTree from 'public/images/icon-social-linktree.svg'
import Image from 'components/Image'
import { presetSensors } from 'utils/presetSensors'
import { discord_link, linktree_link, medium_link, telegram_link, twitter_link } from 'constants/url'

const CommunityBlock = styled.div`
  width: 100%;
  .wrapCommunity {
    text-align: center;
    padding-bottom: 250px;
    margin: 0 auto;

    .textHeader {
      font-family: Dela Gothic One;
      font-size: 6.4rem;
      line-height: 123.76%;
      color: #05050e;
    }

    .boxCommunity {
      margin-top: 108px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      row-gap: 5rem;
      border: 1px solid #000000;
      border-radius: 48px;
      padding: 84px 0px;
      transition-duration: all 0.2s ease-in-out;
      transform-origin: 0 50%;
      .itemCommunity {
        width: 160px;
        position: relative;
        height: 172px;

        .imgCommunity {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          transition: all 0.2s ease-in-out;
          height: 124px;
        }
        .textCommunity {
          display: inline-block;
          margin-top: 148px;
          font-family: Dela Gothic One;
          color: #05050e;
          font-size: 24px;
          line-height: 100%;
        }
        .lineCommunity {
          width: 0px;
          height: 2px;
          margin-top: 6px;
          transition-duration: 0.3s;
          color: black;
          background-color: black;
          display: block;
        }

        &:hover {
          .imgCommunity {
            transform: scale(1.2);
            height: 130px;
          }
          .lineCommunity {
            background-color: black;
            width: 100%;
          }
        }
      }
    }
  }
`

const Community = () => {
  const items = useMemo(() => {
    return [
      {
        title: 'Twitter',
        link: twitter_link,
        image: iconSocialTwitter,
        onClick: presetSensors.body.twitter,
      },
      {
        title: 'Telegram',
        link: telegram_link,
        image: iconSocialTelegram,
        onClick: presetSensors.body.telegram,
      },
      {
        title: 'Discord',
        link: discord_link,
        image: iconSocialDiscord,
        onClick: presetSensors.body.discord,
      },
      {
        title: 'Medium',
        link: medium_link,
        image: iconSocialMedium,
        onClick: presetSensors.body.medium,
      },
      {
        title: 'Linktree',
        link: linktree_link,
        image: iconSocialLinkTree,
        onClick: presetSensors.body.linktree,
      },
    ].map((item) => {
      return (
        <Link href={item.link} key={item.link} onClick={item.onClick}>
          <a target="_blank">
            <div className="itemCommunity">
              <div className={'imgCommunity'}>
                <Image src={item.image} alt={'community-item-icon'} />
              </div>
              <div className="textCommunity">
                {item.title}
                <span className="lineCommunity"></span>
              </div>
            </div>
          </a>
        </Link>
      )
    })
  }, [])
  return (
    <CommunityBlock>
      <div className="wrapCommunity">
        <h1 className="textHeader">Owned by the community</h1>
        <div className="boxCommunity">{items}</div>
      </div>
    </CommunityBlock>
  )
}

export default memo(Community)
