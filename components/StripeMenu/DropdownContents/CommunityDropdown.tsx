import React from 'react'
import Link from 'next/link'
import { Flex, Text } from 'rebass'

import { Heading, HeadingLink, LinkList, DropdownSection, Icon, DropdownEl } from './Components'
import Image from 'components/Image'

import twitterLogo from 'public/twitter.svg'
import telegramLogo from 'public/telegram.svg'
import discordLogo from 'public/discord.svg'
import mediumLogo from 'public/medium.svg'
import linktreeLogo from 'public/linktree.svg'

export default function CommunityDropdown() {
  return (
    <DropdownEl width="3rem" minHeight={'4rem'} display="flex" padding="0.125rem 0">
      {/* <DropdownSection data-first-dropdown-section> */}
      <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="flex-start" justifyContent="space-around" padding="20px 24px">
        <HeadingLink noMarginBottom color="white">
          <Image alt="community-navbar-item-logo" src={twitterLogo}></Image>
          &nbsp;Twitter
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          <Image alt="community-navbar-item-logo" src={telegramLogo}></Image>
          &nbsp;Telegram
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          <Image alt="community-navbar-item-logo" src={discordLogo}></Image>
          &nbsp;Discord
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          <Image alt="community-navbar-item-logo" src={mediumLogo}></Image>
          &nbsp;Medium
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          <Image alt="community-navbar-item-logo" src={linktreeLogo}></Image>
          &nbsp;Linktree
        </HeadingLink>
      </Flex>
    </DropdownEl>
  )
}
