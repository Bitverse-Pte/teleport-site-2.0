import React, { useEffect } from 'react'
import Link from 'next/link'
import { Flex, Text } from 'rebass'

import { Heading, HeadingLink, LinkList, DropdownSection, Icon, DropdownEl } from './Components'
import { presetSensors } from 'utils/presetSensors'

export default function DocsDropdown() {
  return (
    <DropdownEl maxWidth="200px" width="200px" minHeight={'240px'} display="flex" padding="0.125rem 0" textAlign={'left'}>
      <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="flex-start" justifyContent="space-around" padding="20px 24px">
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.whitepaper}>
          White Paper
        </HeadingLink>
        <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
        {/*  <HeadingLink className="notranslate" noMarginBottom color="white" onClick={presetSensors.header.network}>
          Teleport Network
        </HeadingLink>
        <HeadingLink className="notranslate" noMarginBottom color="white" onClick={presetSensors.header.xibc}>
          XIBC
        </HeadingLink> */}
        <HeadingLink className="notranslate" noMarginBottom color="white" onClick={presetSensors.header.developer}>
          Developer
        </HeadingLink>
        {/*     <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.validator}>
          Validator
        </HeadingLink> */}
        <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
        <HeadingLink noMarginBottom color="white" onClick={presetSensors.header.walletDoc}>
          Wallet
        </HeadingLink>
      </Flex>
    </DropdownEl>
  )
}
