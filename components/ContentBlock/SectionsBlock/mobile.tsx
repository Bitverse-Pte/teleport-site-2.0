import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Text } from 'rebass'
import Image from 'components/Image'

import iconGraph1 from 'public/images/icon-graph-1.svg'
import iconGraph2 from 'public/images/icon-graph-2.svg'
import iconGraph3 from 'public/images/icon-graph-3.svg'
import iconGraph4 from 'public/images/icon-graph-4.svg'

import image1 from 'public/mobile-section-image-1.svg'
import image2 from 'public/mobile-section-image-2.svg'
import image3 from 'public/mobile-section-image-3.svg'
import { presetSensors } from 'utils/presetSensors'

const SectionStyle = styled.div`
  .wrapSection {
    color: #05050e;
    padding: 150px 0;

    .icon {
      height: 88px;
    }
    .gifFeature {
      background-color: lightgray;
      width: 100%;
      height: 30vw;
      margin: 0 auto;
    }
    .wrapRow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 60px 0;

      .wrapColumn {
        .textTitle {
          font-family: Dela Gothic One;
          font-size: 72px;
          line-height: 72px;
        }
        .textSubTitle {
          margin-top: 12px;
          font-family: Poppins;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.06em;
          opacity: 0.8;
        }
      }
      .buttonSection {
        cursor: pointer;
        width: 316px;
        height: 72px;
        background: #59c3aa;
        border-radius: 12px;

        color: #05050e;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
`

const graphArr = [iconGraph1, iconGraph2, iconGraph3, iconGraph4]

function SectionItem({ Index, Title, SubTitle, ImageUrl, ButtonTitle }: { Index: number; Title: string; SubTitle: string; ImageUrl: string; ButtonTitle: string }) {
  return (
    <SectionStyle>
      <div className="wrapSection centerView">
        <Image className="icon" src={graphArr[Index - 1]} alt={'section-icon'} />
        <div className="wrapRow">
          <div className="wrapColumn">
            <h1 className="textTitle">{Title}</h1>
            <h6 className="textSubTitle">{SubTitle}</h6>
          </div>
          {RenderButton(ButtonTitle)}
        </div>
        {ImageUrl && <Image className="gifFeature" src={ImageUrl} alt={'section-icon'} />}
      </div>
    </SectionStyle>
  )
}

function RenderButton(title: string) {
  if (title !== '') {
    if (title === 'Launch App') {
      return <Button className="buttonSection">{title}</Button>
    }
    if (title === 'Download') {
      return <Button className="buttonSection">{title}</Button>
    }
  }
  return ''
}

export default function SectionsBlock() {
  return (
    <Flex flexDirection="column" width={'100%'}>
      <Section mainTitle="Teleport Bridge" instruction="Empower cross-chain token transfer" iconSrc={iconGraph1} imageSrc={image1} buttonValue={'Launch App'} buttonOnClick={presetSensors.body.launchBridge} />
      <Section mainTitle="Teleport Wallet" instruction="Multi-Chain & Multi-Identity supported Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction" iconSrc={iconGraph2} imageSrc={image2} buttonValue={'Download'} buttonOnClick={presetSensors.body.downloadWallet} />
      <Section mainTitle="Metaverse Hub" instruction="Multi-Chain & Multi-Identity supported Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction" iconSrc={iconGraph3} imageSrc={image3} />
    </Flex>
  )
}

function Section({ iconSrc, imageSrc, mainTitle, instruction, buttonValue }: { imageSrc: string; iconSrc: string; mainTitle: string; instruction: string; buttonValue?: string; buttonOnClick?: React.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <Flex flexDirection={'column'} margin="36px 0" alignItems="flex-start">
      <Box width={30} height={30}>
        <Image src={iconSrc} width={30} height={30} alt="section-icon" quality={100}></Image>
      </Box>
      <Text
        sx={{
          width: '100%',
          fontFamily: 'Dela Gothic One',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '100%',
          color: '#05050E',
          margin: '24px 0 12px',
        }}
      >
        {mainTitle}
      </Text>
      <Text
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          width: '100%',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0.02em',
          color: '#05050E',
          opacity: 0.8,
        }}
      >
        {instruction}
      </Text>
      <Box margin={'30px 0'} width="100%">
        <Image src={imageSrc} layout="responsive" alt={'section-image'} />
      </Box>
      {buttonValue && (
        <Flex width="100%" justifyContent={'center'} alignItems="center">
          <Button
            sx={{
              background: '#59C3AA',
              borderRadius: '8px',
              width: '200px',
              height: '48px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '16px',
              color: '#161929',
            }}
          >
            {buttonValue}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}
