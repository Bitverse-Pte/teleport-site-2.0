import React from 'react'
import styled from 'styled-components'
import { Button, Flex } from 'rebass'
import Link from 'next/link'
import Image from 'components/Image'

import iconGraph1 from 'public/images/icon-graph-1.svg'
import iconGraph2 from 'public/images/icon-graph-2.svg'
import iconGraph3 from 'public/images/icon-graph-3.svg'
import iconGraph4 from 'public/images/icon-graph-4.svg'
import gifBridge from 'public/gif/bridge.gif'
import gifWallet from 'public/gif/wallet.gif'
import gifMetaverse from 'public/gif/metaverse.gif'
import imgBridge from 'public/images/img-bridge.png'
import imgWallet from 'public/images/img-wallet.png'
import imgMetaverse from 'public/images/img-metaverse.png'

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
          font-size: 72px;
          line-height: 72px;
        }
        .textSubTitle {
          max-width: 800px;
          margin-top: 32px;
          font-family: Poppins;
          font-size: 24px;
          line-height: 24px;
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
        text-align: center;
        line-height: 72px;
        
        &:hover {
          transition: all 0.2s ease 0s;
          box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px;
        }
      }
    }
  }
`

const graphArr = [iconGraph1, iconGraph2, iconGraph3, iconGraph4]

function SectionItem({ Index, Title, SubTitle, GifRes, ImageRes, ButtonTitle, Link }: { Index: number; Title: string; SubTitle: string; GifRes: any; ImageRes: any; ButtonTitle: string; Link: string }) {
    return (
        <SectionStyle>
            <div className="wrapSection centerView">
                <Image className="icon" src={graphArr[Index - 1]} alt={'section-icon'} />
                <div className="wrapRow">
                    <div className="wrapColumn">
                        <h1 className="textTitle">{Title}</h1>
                        <h6 className="textSubTitle">{SubTitle}</h6>
                    </div>
                    {RenderButton(ButtonTitle, Link)}
                </div>
                <Image className="gifFeature" src={ImageRes} alt={'section-icon'} />
            </div>
        </SectionStyle>
    )
}

function RenderButton(title: string, link: string) {
    if (title !== '') {
        return <Link href={link} key={link}><a className="buttonSection" target="_blank" >{title}</a></Link>
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
            ImageRes={imgBridge}
            GifRes={gifBridge}
            ButtonTitle="Launch App"
            Link="https://bridge.testnet.teleport.network"
        />
        <SectionItem
            Index={2}
            Title="Teleport Wallet"
            SubTitle="Multi-Chain & Multi-Identity supported Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction"
            GifRes={gifWallet}
            ImageRes={imgWallet}
            ButtonTitle="Download"
            Link="https://chrome.google.com/webstore/detail/teleport-wallet/gkeelndblnomfmjnophbhfhcjbcnemka"
        />
        <SectionItem
            Index={3}
            Title="Metaverse Hub"
            SubTitle="First EVM-compatible relay chain for DeFi, NFT, and game"
            ImageRes={imgMetaverse}
            GifRes={gifMetaverse}
            ButtonTitle=""
            Link=""
        />
      </Flex>
  )
}
