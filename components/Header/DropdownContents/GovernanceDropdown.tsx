import React from 'react'
import Link from 'next/link'
import { Flex, Text } from 'rebass'

import { Heading, HeadingLink, LinkList, DropdownSection, Icon, DropdownEl } from './Components'

export default function GovernanceDropdown() {
  return (
    <DropdownEl width="3rem" minHeight={'2rem'} display="flex" padding="0.125rem 0">
      {/* <DropdownSection data-first-dropdown-section> */}
      <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="center" justifyContent="space-around">
        <HeadingLink noMarginBottom color="white">
          Staking
        </HeadingLink>
        <HeadingLink noMarginBottom color="white">
          Governance
        </HeadingLink>
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
