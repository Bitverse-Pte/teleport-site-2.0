import React from 'react'
import styled from 'styled-components'
import { Button } from 'rebass'
import Image from 'components/Image'

import iconGraph1 from 'public/images/icon-graph-1.svg'
import iconGraph2 from 'public/images/icon-graph-2.svg'
import iconGraph3 from 'public/images/icon-graph-3.svg'
import iconGraph4 from 'public/images/icon-graph-4.svg'

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
    <>
      <SectionItem Index={1} Title="Teleport Bridge" SubTitle="Empower cross-chain token transfer" ImageUrl="" ButtonTitle="Launch App" />
      <SectionItem Index={2} Title="Teleport Wallet" SubTitle="Multi-Chain & Multi-Identity supported<br>Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction" ImageUrl="" ButtonTitle="Download" />
      <SectionItem Index={3} Title="Metaverse Hub" SubTitle="First EVM-compatible relay chain for DeFi, NFT, and game" ImageUrl="" ButtonTitle="" />
    </>
  )
}
