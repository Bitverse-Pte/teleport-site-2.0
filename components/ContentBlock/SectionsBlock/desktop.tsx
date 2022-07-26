import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex } from 'rebass'
import Image from 'components/Image'

import iconGraph1 from 'public/images/icon-graph-1.svg'
import iconGraph2 from 'public/images/icon-graph-2.svg'
import iconGraph3 from 'public/images/icon-graph-3.svg'
import iconGraph4 from 'public/images/icon-graph-4.svg'
import { presetSensors } from 'utils/presetSensors'

const SectionStyle = styled.div`
  width: 100%;
  .wrapSection {
    color: #05050e;
    padding: 150px 0 0;

    .icon {
      height: 88px;
    }
    .gifFeature {
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
        max-width: calc(100% - 272px);
        .textTitle {
          font-family: Dela Gothic One;
          font-size: 54px;
          line-height: 54px;
          white-space: nowrap;
        }
        .textSubTitle {
          max-width: 800px;
          margin-top: 32px;
          font-family: Poppins;
          font-size: 24px;
          line-height: 44px;
          letter-spacing: 0.06em;
          opacity: 0.8;
        }
      }
      .buttonSection {
        margin-left: 36px;
        cursor: pointer;
        width: 240px;
        max-width: 240px;
        min-width: 240px;
        height: 72px;
        background: rgba(57, 225, 186, 1);
        border-radius: 12px;
        color: #05050e;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        transition: all 0.2s ease 0s;
        opacity: 1;
        &:hover {
          transform: translateY(-4px);
          box-shadow: rgb(0 0 0 / 5%) -3px 3px 3px;
        }
        &:active {
          background: rgba(78, 215, 182, 1);
        }
      }
    }
  }
`

const FirstLetterSpan = styled.span`
  display: block;
  // white-space: nowrap;
  &:first-letter {
    font-weight: 900;
  }
  ::not(::first-line) {
    text-indent: 20px;
  }
`

const graphArr = [iconGraph1, iconGraph2, iconGraph3, iconGraph4]
function SectionItem({ Index, Title, descriptions, videoIndex, ButtonTitle }: { Index: number; Title: string; descriptions: string[]; videoIndex: string; ButtonTitle: string }) {
  const VideoElement = useMemo(() => {
    switch (videoIndex) {
      case 'swap':
        return <video src={require('../../../public/swap.mp4')} poster={'../../../public/first-frame-welcome.png'} autoPlay playsInline loop muted width={'100%'} height="100%" />
      case 'bridge':
        return <video src={require('../../../public/bridge.mp4')} poster={'../../../public/first-frame-bridge.png'} autoPlay playsInline loop muted width={'100%'} height="100%" />
      case 'wallet':
        return <video src={require('../../../public/wallet.mp4')} poster={'../../../public/first-frame-wallet.png'} autoPlay playsInline loop muted width={'100%'} height="100%" />
      case 'metaverse':
        return <video src={require('../../../public/metaverse.mp4')} poster={'../../../public/first-frame-wallet.png'} autoPlay playsInline loop muted width={'100%'} height="100%" />
    }
  }, [videoIndex])
  return (
    <SectionStyle>
      <div className="wrapSection centerView">
        <Image className="icon" src={graphArr[Index - 1]} alt={'section-icon'} />
        <div className="wrapRow" style={{ marginRight: '10px' }}>
          <div className="wrapColumn">
            <h1 className="textTitle notranslate">{Title}</h1>
            <h6 className="textSubTitle">
              {descriptions.map((e) => {
                return <FirstLetterSpan key={e.substring(0, 2)}>{e}</FirstLetterSpan>
              })}
            </h6>
          </div>
          {RenderButton(ButtonTitle)}
        </div>
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box style={{ maxWidth: 900 }}>
            {/* <Image className="gifFeature" src={ImageRes} alt={'section-icon'} placeholder="blur" blurDataURL={'data:image/png;base64,' + placeHolderSrc} /> */}
            {VideoElement}
          </Box>
        </Box>
      </div>
    </SectionStyle>
  )
}

function RenderButton(title: string) {
  if (title !== '') {
    if (title === 'Swap') {
      return (
        <Button className="buttonSection" onClick={presetSensors.body.goToSwap}>
          {title}
        </Button>
      )
    }
    if (title === 'Launch App') {
      return (
        <Button className="buttonSection" onClick={presetSensors.body.launchBridge}>
          {title}
        </Button>
      )
    }
    if (title === 'Download') {
      return (
        <Button className="buttonSection" onClick={presetSensors.body.downloadWallet}>
          {title}
        </Button>
      )
    }
  }
  return ''
}

export default function SectionsBlock() {
  return (
    <Flex flexDirection="column" width={'100%'}>
      <SectionItem Index={1} Title="Teleswap" descriptions={['Cross-chain liquidity aggregator', 'Support token swap between any two chains']} videoIndex="swap" ButtonTitle="Swap" />
      <SectionItem Index={2} Title="Teleport Bridge" descriptions={['Empower cross-chain token transfer']} videoIndex="bridge" ButtonTitle="Launch App" />
      <SectionItem Index={3} Title="Teleport Wallet" descriptions={['Multi-Chain & Multi-Identity supported', 'Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction']} videoIndex="wallet" ButtonTitle="Download" />
      <SectionItem Index={4} Title="Metaverse Hub" descriptions={['First EVM-compatible relay chain for', 'DeFi, NFT, and game']} videoIndex="metaverse" ButtonTitle="" />
    </Flex>
  )
}
