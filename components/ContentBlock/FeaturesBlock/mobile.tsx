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
      <Flex marginBottom={24}>
        <Image src={logoSrc} width={48} height={48} alt="feature-logo"></Image>
      </Flex>
      <Flex marginBottom={12}>
        <Text
          className="main-title"
          sx={{
            fontFamily: 'DelGophicOne',
            fontStyle: 'normal',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
            whiteSpace: 'nowrap',
            color: 'white',
          }}
        >
          {MainTitle}
        </Text>
      </Flex>
      <Flex marginBottom={36}>
        <Text
          sx={{
            fontFamily: 'DelGophicOne',
            fontStyle: 'normal',
            color: 'white',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '20px',
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
            fontSize: '18px',
            lineHeight: '18px',
            textAlign: 'left',
          }}
        >
          {instruction}
        </Text>
      </Flex>
    </Flex>
  )
}
