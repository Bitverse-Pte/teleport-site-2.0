import React from 'react'
import Link from 'next/link'
import { Flex, Text } from 'rebass'

import { Heading, HeadingLink, LinkList, DropdownSection, Icon, DropdownEl } from './Components'

export default function DocsDropdown() {
  return (
    <DropdownEl width="3rem" minHeight={'4rem'} display="flex" padding="0.125rem 0" textAlign={'left'}>
      <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="flex-start" justifyContent="space-around" padding="20px 24px">
        <HeadingLink noMarginBottom color="white">
          White Paper
        </HeadingLink>
        <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
        <HeadingLink noMarginBottom color="white">
          Teleport Chain
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          XIBC
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          Developer
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          Validator
        </HeadingLink>
        <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
        <HeadingLink noMarginBottom color="white">
          Wallet
        </HeadingLink>
      </Flex>
    </DropdownEl>
  )
}
