import React, { useCallback } from 'react'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'

import { twitterLogoBase64String, telegramLogoBase64String, discordLogoBase64String, mediumLogoBase64String, linktreeLogoBase64String } from 'components/Image/base64Images'
import { Base64SvgHolder } from 'components/Image/Base64SvgHolder'

import { Heading, HeadingLink, LinkList, DropdownSection, Icon, DropdownEl } from './Components'
import { presetSensors } from 'utils/presetSensors'

export default function CommunityDropdown() {
  return (
    <DropdownEl maxWidth="200px" width="200px" minHeight={'240px'} display="flex" padding="0.125rem 0">
      <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="flex-start" justifyContent="space-around" padding="20px 24px">
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.twitter}>
          <Base64SvgHolder base64String={twitterLogoBase64String} />
          &nbsp;Twitter
        </HeadingLink>
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.telegram}>
          <Base64SvgHolder base64String={telegramLogoBase64String} />
          &nbsp;Telegram
        </HeadingLink>
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.discord}>
          <Base64SvgHolder base64String={discordLogoBase64String} />
          &nbsp;Discord
        </HeadingLink>
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.medium}>
          <Base64SvgHolder base64String={mediumLogoBase64String} />
          &nbsp;Medium
        </HeadingLink>
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.linktree}>
          <Base64SvgHolder base64String={linktreeLogoBase64String} />
          &nbsp;Linktree
        </HeadingLink>
      </Flex>
    </DropdownEl>
  )
}
