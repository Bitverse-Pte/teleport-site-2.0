import { memo } from "react"
import Link from "next/link"
import styled from "styled-components"

const CommunityBlock = styled.div`
	@keyframes scaleDraw {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.2);
		}
	}
	.wrapCommunity {
		text-align: center;

		.textHeader {
			font-family: DelGophicOne;
			font-size: 64px;
			line-height: 123.76%;
			color: #05050e;
		}

		.boxCommunity {
			margin-top: 108px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			border: 1px solid #000000;
			border-radius: 48px;
			padding: 84px 0px;

			.itemCommunity {
				width: 160px;
				position: relative;
				height: 172px;

				.imgCommunity {
					position: absolute;
					left: 0;
					right: 0;
					margin: auto;
					transition-duration: 0.3s;
					height: 124px;
				}
				.textCommunity {
					display: inline-block;
					margin-top: 148px;
					font-family: DelGophicOne;
					color: #05050e;
					font-size: 24px;
					line-height: 100%;
				}
				.lineCommunity {
					width: 0px;
					height: 2px;
					margin-top: 6px;
					transition-duration: 0.3s;
					color: black;
					background-color: black;
					display: block;
				}
			}

			.itemCommunity:hover {
				.imgCommunity {
					height: 130px;
				}
				.lineCommunity {
					background-color: black;
					width: 100%;
				}
			}
		}
	}
`

const Community = () => {
	const communities = [
		{ title: "Twitter", link: "", image: "/images/icon-social-twitter.svg" },
		{ title: "Telegram", link: "", image: "/images/icon-social-telegram.svg" },
		{ title: "Discord", link: "", image: "/images/icon-social-discord.svg" },
		{ title: "Medium", link: "", image: "/images/icon-social-medium.svg" },
		{ title: "Email", link: "", image: "/images/icon-social-mail.svg" },
	]
	const items = communities.map((item) => {
		return (
			<Link href={item.link} key={item.link}>
				<a>
					<div className="itemCommunity">
						<img className="imgCommunity" src={item.image} />
						<div className="textCommunity">
							{item.title}
							<span className="lineCommunity"></span>
						</div>
					</div>
				</a>
			</Link>
		)
	})
	return (
		<CommunityBlock>
			<div className="wrapCommunity centerView">
				<h1 className="textHeader">Owned by the community</h1>
				<div className="boxCommunity">{items}</div>
			</div>
		</CommunityBlock>
	)
}

export default memo(Community)
