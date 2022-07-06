import React from 'react'
import Image from 'components/Image'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import featureBlockBg from 'public/featureBlock-bg.svg'
import omniChainLogo from 'public/omni-chian.svg'
import alternativeCrossLogo from 'public/alternative-cross.svg'
import dappLogo from 'public/dapp.svg'

export default function FeaturesBlock() {
  return (
    <Flex flexDirection={'column'} alignItems="center" width={'100%'}>
      <Feature showLine={true} MainTitle="Omni-Chain" SecondTitle="Chain Integration" instruction="Support EVM & non-EVM chains via XIBC protocol" logoSrc={omniChainLogo} />
      <Feature showLine={true} MainTitle="Alternative Cross -" SecondTitle="Chain Approach" instruction="State Relay - Trustless Oracle TSS - Cost effective" logoSrc={alternativeCrossLogo} />
      <Feature MainTitle="Dapp -" SecondTitle="Interoperability" instruction="Non-invasive SDK for seamless dApp integration" logoSrc={dappLogo} />
    </Flex>
  )
}

function Feature({ MainTitle, SecondTitle, instruction, logoSrc, showLine = false }: { MainTitle: string; SecondTitle: string; instruction: string; logoSrc: any; showLine?: boolean }) {
  return (
    <Flex
      flexDirection={'column'}
      width="100%"
      minHeight={'fit-content'}
      marginBottom={showLine ? 24 : 0}
      paddingBottom={showLine ? 24 : 0}
      sx={
        showLine
          ? {
              borderBottom: 'solid 1px gray',
            }
          : {}
      }
    >
      <Flex marginBottom={'20px'}>
        <Image src={logoSrc} width={30} height={30} alt="feature-logo"></Image>
      </Flex>
      <Flex marginBottom={'6px'}>
        <Text
          className="main-title"
          sx={{
            fontFamily: 'Dela Gothic One',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '20px',
            whiteSpace: 'nowrap',
            color: 'white',
          }}
        >
          {MainTitle}
        </Text>
      </Flex>
      <Flex marginBottom={'18px'}>
        <Text
          sx={{
            fontFamily: 'Dela Gothic One',
            fontStyle: 'normal',
            color: 'white',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '14px',
          }}
        >
          {SecondTitle}
        </Text>
      </Flex>
      <Flex width={'100%'}>
        <Text
          width={'100%'}
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
            textAlign: 'left',
          }}
        >
          {instruction}
        </Text>
      </Flex>
    </Flex>
  )
}
