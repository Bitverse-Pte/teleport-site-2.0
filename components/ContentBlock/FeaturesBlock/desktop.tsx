import React from 'react'
import Image from 'components/Image'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import featureBlockBg from 'public/featureBlock-bg.svg'
import omniChainLogo from 'public/omni-chian.svg'
import alternativeCrossLogo from 'public/alternative-cross.svg'
import dappLogo from 'public/dapp.svg'

const FeatureBlock = styled(Box)`
	height: 260px;
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
    transition-delay: 0s;
		transition: transform 0.2s ease-in-out;
		transform-origin: 0% 50%;
	}
	& .main-title {
		transition: all 0.2s ease-in-out;
    transition-delay: 0s;
		transform-origin: left; 
	}
	&:hover .main-title {
    transform: scale(1.20);
  }
  @media screen and (max-width: 1300px) {
      & .main-title {
        transform: scale(0.85);
      }
      &:hover .main-title {
        transform: scale(1.0625);
      }
    }
	}
`

export default function FeaturesBlock() {
  return (
    <Flex flexDirection={'column'} alignItems="center" width={'100%'} margin="120px 0 60px 0">
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
      <Flex height="100%" justifyContent={'space-between'} padding="60px 0 40px 0">
        <Flex flexDirection={'column'}>
          <Flex
            justifyContent={'start'}
            alignItems="start"
            sx={{
              marginBottom: '54px',
              height: 'fit-content',
            }}
          >
            <Text
              className="main-title notranslate"
              sx={{
                whiteSpace: 'nowrap',
                fontFamily: 'Dela Gothic One',
                fontStyle: 'normal',
                color: 'white',
                fontWeight: 900,
                height: '60px',
                fontSize: '50px',
                lineHeight: '70px',
              }}
            >
              {MainTitle}
            </Text>
          </Flex>
          <Text
            className="notranslate"
            sx={{
              fontFamily: 'Dela Gothic One',
              fontStyle: 'normal',
              color: 'white',
              height: 'fit-content',
              fontWeight: 75000,
              fontSize: '32px',
              lineHeight: '32px',
            }}
          >
            {SecondTitle}
          </Text>
        </Flex>
        <Flex flexDirection={'column'} alignItems="end">
          <Flex width="200px" flex={1} justifyContent="end" alignItems={'start'}>
            <Flex height="60px" alignItems={'end'}>
              <Image src={logoSrc} alt="feature-logo"></Image>
            </Flex>
          </Flex>
          <Text
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 100,
              fontSize: '24px',
              lineHeight: '32px',
              textAlign: 'right',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              opacity: 0.7,
              width: 350,
            }}
          >
            {instruction}
          </Text>
        </Flex>
      </Flex>
    </FeatureBlock>
  )
}
