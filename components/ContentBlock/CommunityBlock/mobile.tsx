import React, { useMemo } from 'react'
import Link from 'next/link'
import { Box, Flex, Text } from 'rebass'

import iconSocialTwitter from 'public/mobile-community-twitter-logo.svg'
import iconSocialTelegram from 'public/mobile-community-telegram-logo.svg'
import iconSocialDiscord from 'public/mobile-community-discord-logo.svg'
import iconSocialMedium from 'public/mobile-community-medium-logo.svg'
import iconSocialLinkTree from 'public/mobile-community-linktree-logo.svg'
import Image from 'components/Image'
import { presetSensors } from 'utils/presetSensors'
import { twitter_link, telegram_link, discord_link, medium_link, linktree_link } from 'constants/url'
import { map } from 'lodash-es'
import image from 'next/image'

const Community = () => {
  const items = useMemo(() => {
    return [
      { title: 'Twitter', link: twitter_link, image: iconSocialTwitter, onClick: presetSensors.body.twitter },
      { title: 'Telegram', link: telegram_link, image: iconSocialTelegram, onClick: presetSensors.body.telegram },
      { title: 'Discord', link: discord_link, image: iconSocialDiscord, onClick: presetSensors.body.discord },
      { title: 'Medium', link: medium_link, image: iconSocialMedium, onClick: presetSensors.body.medium },
      { title: 'Linktree', link: linktree_link, image: iconSocialLinkTree, onClick: presetSensors.body.linktree },
    ].map((item) => {
      return (
        <Link href={item.link} key={item.link} onClick={item.onClick}>
          <a
            target={'_blank'}
            style={{
              fontFamily: 'Dela Gothic One',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '12px',
              color: '#05050E',
              maxWidth: '12%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box marginBottom={'22px'}>
              <Image src={item.image} alt={'community-item-icon'} />
            </Box>
            <Text
              textAlign={'center'}
              sx={{
                fontSize: '10px',
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transform: 'translateX(-50%)',
              }}
            >
              {item.title}
            </Text>
          </a>
        </Link>
      )
    })
  }, [])
  return (
    <Flex flexDirection={'column'} margin="60px 0" alignItems={'flex-start'} width="100%">
      <Text
        width={'100%'}
        sx={{
          fontFamily: 'Dela Gothic One',
          fontSize: '20px',
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          color: '#05050e',
          width: '100%',
          textAlign: 'left',
          marginBottom: '30px',
        }}
      >
        Owned by the community
      </Text>
      <Flex width={'100%'} justifyContent="space-between">
        {items}
      </Flex>
    </Flex>
  )
}

export default Community
