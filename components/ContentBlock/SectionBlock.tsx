import styled from "styled-components";
import {Button} from "rebass";

const SectionStyle = styled.div`
    .wrapSection {
      color: #05050E;
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
          background: #59C3AA;
          border-radius: 12px;

          color: #05050E;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
        }
      }
    }
`

function SectionItem(
    {
        Index,
        Title,
        SubTitle,
        ImageUrl,
        ButtonTitle,
    }:{
        Index: number
        Title: string
        SubTitle: string
        ImageUrl: string
        ButtonTitle: string
}) {
    return (
        <SectionStyle>
            <div className="wrapSection centerView">
                <img className="icon" src={`/images/icon-graph-${Index}.svg`}/>
                <div className="wrapRow">
                    <div className="wrapColumn">
                        <h1 className="textTitle">{Title}</h1>
                        <h6 className="textSubTitle">{SubTitle}</h6>
                    </div>
                    {RenderButton(ButtonTitle)}
                </div>
                <img className="gifFeature" src={ImageUrl}/>
            </div>
        </SectionStyle>
    )
}

function RenderButton (title: string) {
    if (title !== "") {
        if (title === "Launch App") {
            return (
                <Button className="buttonSection">
                    {title}
                </Button>
            )
        }
        if (title === "Download") {
            return (
                <Button className="buttonSection">
                    {title}
                </Button>
            )
        }
    }
    return ''
}

export default function SectionsBlock() {
    return (
        <>
            <SectionItem
                Index={1}
                Title="Teleport Bridge"
                SubTitle="Empower cross-chain token transfer"
                ImageUrl=""
                ButtonTitle="Launch App"
            />
            <SectionItem
                Index={2}
                Title="Teleport Wallet"
                SubTitle="Multi-Chain & Multi-Identity supported<br>Ethereum, Cosmos, Polkadot, Solana token transfers and dApp interaction"
                ImageUrl=""
                ButtonTitle="Download"
            />
            <SectionItem
                Index={3}
                Title="Metaverse Hub"
                SubTitle="First EVM-compatible relay chain for DeFi, NFT, and game"
                ImageUrl=""
                ButtonTitle=""
            />
        </>
    )
}
