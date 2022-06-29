import React from 'react'
import Image from 'components/Image'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import featureBlockBg from 'public/featureBlock-bg.svg'
import omniChainLogo from 'public/omni-chian.svg'
import alternativeCrossLogo from 'public/alternative-cross.svg'
import dappLogo from 'public/dapp.svg'

const FeatureBlock = styled(Box)`
	height: 280px;
  z-index: 0;
	min-height: 280px;
	width: 100%;
	position: relative;
	.feature-block-bg-box {
		display: none;
	}
	&:hover .feature-block-bg-box {
		display: block;
	}
	&:hover:after {
		transform: scaleX(1);
	}
	&:after {
		display: block;
		content: "";
		border-bottom: solid white 2px;
		transform: scaleX(0);
		transition: transform 0.2s ease-in-out 0.2s;
		transform-origin: 0% 50%;
	}
	& .main-title {
		transition: all 0.3s ease-in-out 0.2s;
		transform-origin: left; 
	}
	&:hover .main-title {
    transform: scale(1.25);
  }
  @media screen and (max-width: 1300px) {
      & .main-title {
        transform: scale(0.7);
      }
      &:hover .main-title {
        transform: scale(0.95);
      }
    }
	}
`

export default function FeaturesBlock() {
  return (
    <Flex flexDirection={'column'} alignItems="center" width={'100%'} padding="60px 0">
      <Feature MainTitle="Omni-Chain" SecondTitle="Chain Integration" instruction="Support EVM & non-EVM chains via XIBC protocol" logoSrc={omniChainLogo} />
      <Feature MainTitle="Alternative Cross -" SecondTitle="Chain Approach" instruction="State Relay - Trustless Oracle TSS - Cost effective" logoSrc={alternativeCrossLogo} />
      <Feature MainTitle="Dapp -" SecondTitle="Interoperability" instruction="Non-invasive SDK for seamless dApp integration" logoSrc={dappLogo} />
    </Flex>
  )
}

function Feature({ MainTitle, SecondTitle, instruction, logoSrc }: { MainTitle: string; SecondTitle: string; instruction: string; logoSrc: any }) {
  return (
    <FeatureBlock>
      <Box
        className="feature-block-bg-box"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Image src={featureBlockBg} layout="fill" alt={'feature-block-bg'} objectFit="cover" objectPosition={'left bottom'} quality={100}></Image>
      </Box>
      <Flex height="100%" justifyContent={'space-between'} padding="60px 0">
        <Flex flexDirection={'column'}>
          <Flex justifyContent={'start'} alignItems="start" height={'80%'}>
            <Text
              className="main-title"
              sx={{
                whiteSpace: 'nowrap',
                fontFamily: 'DelGophicOne',
                fontStyle: 'normal',
                color: 'white',
                fontWeight: 900,
                height: '80%',
                fontSize: '64px',
                lineHeight: '80px',
              }}
            >
              {MainTitle}
            </Text>
          </Flex>
          <Text
            sx={{
              fontFamily: 'DelGophicOne',
              fontStyle: 'normal',
              color: 'white',
              maxHeight: '20%',
              fontWeight: 75000,
              fontSize: '32px',
              lineHeight: '32px',
            }}
          >
            {SecondTitle}
          </Text>
        </Flex>
        <Flex flexDirection={'column'} alignItems="end">
          <Flex width="200px" height="80%" flex={1} justifyContent="end" alignItems={'start'}>
            <Image src={logoSrc} alt="feature-logo"></Image>
          </Flex>
          <Text
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              maxHeight: '20%',
              maxWidth: '420px',
              textAlign: 'end',
              lineHeight: '32px',
              fontSize: '24px',
              fontWeight: 400,
            }}
          >
            {instruction}
          </Text>
        </Flex>
      </Flex>
    </FeatureBlock>
  )
}
