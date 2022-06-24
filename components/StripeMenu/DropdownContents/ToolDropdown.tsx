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
    <DropdownEl width="426px" minWidth={'fit-content'} minHeight={'fit-content'} display="flex" padding="0.5rem">
      {/* <DropdownSection data-first-dropdown-section> */}
      <Flex width={'100%'} minHeight="100%" flexDirection={'row'} minWidth="fit-content">
        <Flex flexDirection={'column'} flex={2} minWidth="fit-content">
          <Flex
            justifyContent={'flex-start'}
            sx={{
              fontFamily: 'IBM Plex Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '20px',
              opacity: 0.5,
            }}
          >
            Faucet
          </Flex>
          <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
          <Flex width={'100%'} flexDirection={'row'} minWidth="fit-content">
            <Flex flexDirection={'column'} width="fit-content" alignItems={'flex-start'}>
              <Flex
                sx={{
                  whiteSpace: 'nowrap',
                  fontFamily: 'IBM Plex Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  opacity: 0.5,
                  lineHeight: '18px',
                }}
              >
                {'Faucet (TELE)'}
              </Flex>
              <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
              <HeadingLink noMarginBottom color="white">
                Discord
              </HeadingLink>
            </Flex>
            <Flex flexDirection={'column'} width="fit-content" marginLeft={'15px'} alignItems={'flex-start'}>
              <Flex
                sx={{
                  whiteSpace: 'nowrap',
                  fontFamily: 'IBM Plex Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  opacity: 0.5,
                  lineHeight: '18px',
                }}
              >
                {'Faucet (TUSDT)'}
              </Flex>
              <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
              <HeadingLink noMarginBottom color="white">
                Teleport Testnet
              </HeadingLink>
              <HeadingLink noMarginBottom color="white">
                BNB Testnet
              </HeadingLink>
              <HeadingLink noMarginBottom color="white">
                Rinkeby
              </HeadingLink>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} flex={1} marginLeft="15px" alignItems={'flex-start'}>
          <Flex
            justifyContent={'flex-start'}
            sx={{
              fontFamily: 'IBM Plex Sans',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '20px',
              opacity: 0.5,
            }}
          >
            Explorer
          </Flex>
          <hr style={{ borderWidth: 0, borderStyle: 'solid', borderColor: 'rgba(255,255,255, 0.26)', borderBottomWidth: '1px', width: '100%' }}></hr>
          <HeadingLink noMarginBottom color="white">
            EVM
          </HeadingLink>
          <HeadingLink noMarginBottom color="white">
            Tendermint
          </HeadingLink>
        </Flex>
        {/*  <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="flex-start" justifyContent="space-around" padding="20px 24px">
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
        <Flex width={'100%'} minHeight="100%" flexDirection={'column'} alignItems="flex-start" justifyContent="space-around" padding="20px 24px">
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
        </Flex> */}
      </Flex>
    </DropdownEl>
  )
}
