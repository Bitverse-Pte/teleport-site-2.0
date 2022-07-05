import React from 'react'
import styled from 'styled-components'
import { Button, Flex } from 'rebass'
import Image from 'components/Image'

import iconGraph1 from 'public/images/icon-graph-1.svg'
import iconGraph2 from 'public/images/icon-graph-2.svg'
import iconGraph3 from 'public/images/icon-graph-3.svg'
import iconGraph4 from 'public/images/icon-graph-4.svg'
import gifBridge from 'public/gif/bridge.gif'
import gifWallet from 'public/gif/wallet.gif'
import gifMetaverse from 'public/gif/metaverse.gif'

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
          font-family: DelGophicOne;
          font-size: 72px;
          line-height: 72px;
        }
        .textSubTitle {
          margin-top: 32px;
          font-family: Poppins;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.06em;
          opacity: 0.8;
        }
      }
      .buttonSection {
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

function SectionItem({ Index, Title, SubTitle, ImageRes, ButtonTitle }: { Index: number; Title: string; SubTitle: string; ImageRes: any; ButtonTitle: string }) {
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
        <Image className="gifFeature" src={ImageRes} alt={'section-icon'} />
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
      <Flex flexDirection="column">
        <SectionItem
            Index={1}
            Title="Teleport Bridge"
            SubTitle="Empower cross-chain token transfer"
            ImageRes={gifBridge}
            ButtonTitle="Launch App"
        />
        <SectionItem
            Index={2}
            Title="Teleport Wallet"
            SubTitle="Multi-Chain & Multi-Identity supported Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction"
            ImageRes={gifWallet}
            ButtonTitle="Download"
        />
        <SectionItem
            Index={3}
            Title="Metaverse Hub"
            SubTitle="First EVM-compatible relay chain for DeFi, NFT, and game"
            ImageRes={gifMetaverse}
            ButtonTitle=""
        />
      </Flex>
  )
}
