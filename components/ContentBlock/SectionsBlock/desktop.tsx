import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex } from 'rebass'
import Link from 'next/link'
import Image from 'components/Image'

import iconGraph1 from 'public/images/icon-graph-1.svg'
import iconGraph2 from 'public/images/icon-graph-2.svg'
import iconGraph3 from 'public/images/icon-graph-3.svg'
import iconGraph4 from 'public/images/icon-graph-4.svg'
import { presetSensors } from 'utils/presetSensors'

const SectionStyle = styled.div`
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
        background: #59c3aa;
        border-radius: 12px;
        color: #05050e;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        &:hover {
          transition: all 0.2s ease 0s;
          box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px;
        }
      }
    }
  }
`

const graphArr = [iconGraph1, iconGraph2, iconGraph3, iconGraph4]
function SectionItem({ Index, Title, SubTitle, videoIndex, ButtonTitle }: { Index: number; Title: string; SubTitle: string; videoIndex: string; ButtonTitle: string }) {
  const VideoElement = useMemo(() => {
    switch (videoIndex) {
      case 'bridge':
        return <video src={require('../../../public/bridge.mp4')} autoPlay loop muted width={'100%'} />
      case 'wallet':
        return <video src={require('../../../public/wallet.mp4')} autoPlay loop muted width={'100%'} />
      case 'metaverse':
        return <video src={require('../../../public/metaverse.mp4')} autoPlay loop muted width={'100%'} />
    }
  }, [videoIndex])
  return (
    <SectionStyle>
      <div className="wrapSection centerView">
        <Image className="icon" src={graphArr[Index - 1]} alt={'section-icon'} />
        <div className="wrapRow" style={{ marginRight: '10px' }}>
          <div className="wrapColumn">
            <h1 className="textTitle notranslate">{Title}</h1>
            <h6 className="textSubTitle">{SubTitle}</h6>
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
    <Flex flexDirection="column">
      <SectionItem Index={1} Title="Teleport Bridge" SubTitle="Empower cross-chain token transfer" videoIndex="bridge" ButtonTitle="Launch App" />
      <SectionItem Index={2} Title="Teleport Wallet" SubTitle="Multi-Chain & Multi-Identity supported Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction" videoIndex="wallet" ButtonTitle="Download" />
      <SectionItem Index={3} Title="Metaverse Hub" SubTitle="First EVM-compatible relay chain for DeFi, NFT, and game" videoIndex="metaverse" ButtonTitle="" />
    </Flex>
  )
}
