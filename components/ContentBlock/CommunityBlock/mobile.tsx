import React, { useMemo } from 'react'
import Link from 'next/link'
import { Box, Flex, Text } from 'rebass'

import iconSocialTwitter from 'public/mobile-community-twitter-logo.svg'
import iconSocialTelegram from 'public/mobile-community-telegram-logo.svg'
import iconSocialDiscord from 'public/mobile-community-discord-logo.svg'
import iconSocialMedium from 'public/mobile-community-medium-logo.svg'
import iconSocialLinkTree from 'public/mobile-community-linktree-logo.svg'
import Image from 'components/Image'

const Community = () => {
  const items = useMemo(() => {
    return [
      { title: 'Twitter', link: 'https://twitter.com/TeleportChain', image: iconSocialTwitter },
      { title: 'Telegram', link: 'https://t.me/TeleportNetwork', image: iconSocialTelegram },
      { title: 'Discord', link: 'https://discord.gg/5YQtRDF4Rh', image: iconSocialDiscord },
      { title: 'Medium', link: 'https://medium.com/@TeleportNetwork', image: iconSocialMedium },
      { title: 'Linktree', link: 'https://linktr.ee/teleportnetwork', image: iconSocialLinkTree },
    ].map((item) => {
      return (
        <Link href={item.link} key={item.link}>
          <a target={'_blank'}
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
