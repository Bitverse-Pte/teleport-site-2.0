import React from 'react'
import Link from 'next/link'
import { Flex, Text } from 'rebass'

import { Heading, HeadingLink, LinkList, DropdownSection, Icon, DropdownEl } from './Components'
/* Faucet
Teleport Chain
BSC Testnet
Rinkeby

Explorer
EVM
Tendermint */
export default function DocsDropdown() {
  return (
    <DropdownEl minWidth="3rem" minHeight={'4rem'} display="flex" padding="0.5rem">
      {/* <DropdownSection data-first-dropdown-section> */}
      <Flex width={'100%'} minHeight="100%" flexDirection={'row'}>
        <Flex width={'50%'} minHeight="100%" flexDirection={'column'} alignItems="center" justifyContent="flex-start">
          <HeadingLink noMarginBottom color="white" style={{ fontSize: '18px', maxHeight: '15%', minHeight: '15%' }}>
            Faucet
          </HeadingLink>
          <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.82)', borderBottomWidth: '2px', width: '80%' }}></hr>
          <HeadingLink noMarginBottom color="white" style={{ margin: '0.36rem 0' }}>
            Teleport Chain
          </HeadingLink>
          <HeadingLink noMarginBottom color="white" style={{ margin: '0.36rem 0' }}>
            BSC Testnet
          </HeadingLink>
          <HeadingLink noMarginBottom color="white" style={{ margin: '0.36rem 0' }}>
            Rinkeby
          </HeadingLink>
        </Flex>
        <Flex width={'50%'} minHeight="100%" flexDirection={'column'} alignItems="center" justifyContent="flex-start">
          <HeadingLink noMarginBottom color="white" style={{ fontSize: '18px', maxHeight: '15%', minHeight: '15%' }}>
            Explorer
          </HeadingLink>
          <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.82)', borderBottomWidth: '2px', width: '80%' }}></hr>
          <HeadingLink noMarginBottom color="white" style={{ margin: '0.36rem 0' }}>
            EVM
          </HeadingLink>
          <HeadingLink noMarginBottom color="white" style={{ margin: '0.36rem 0' }}>
            Tendermint
          </HeadingLink>
        </Flex>
      </Flex>
      {/* </DropdownSection> */}
      {/*      <DropdownSection>
        <div>
          <Heading color="white">
            <Icon />
            From the Blog
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <Link href="/" passHref>
                Stripe Atlas &rsaquo;
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Stripe Home &rsaquo;
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Improved Fraud Detection &rsaquo;
              </Link>
            </li>
          </LinkList>
        </div>
      </DropdownSection> */}
    </DropdownEl>
  )
}
