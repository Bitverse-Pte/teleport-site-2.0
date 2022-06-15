import styled from "styled-components"

export const MobileStyled = styled.div`
	.menuSpan {
		display: inline-block;
		width: 0.08rem;
		height: 0.08rem;
		border-radius: 50%;
		background-color: white;
		margin-right: 0.03rem;
	}
	.topMoveMobile:hover {
		position: relative;
		top: -2px;
	}
	.m_headView {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 0.72rem;
		line-height: 0.72rem;
		color: #ffffff;
		background-color: rgba(6, 6, 6, 1);
		.logoImg {
			width: 1rem;
			height: auto;
		}
		.rightNav {
			.dropdownView {
				font-weight: 500;
				color: #ffffff;
			}
			.dropdownButton {
				height: 100%;
				display: inline-block;
			}
			.launchApp {
				display: inline-block;
				text-align: center;
				width: 1.08rem;
				line-height: 0.32rem;
				background: #00c6a9;
				border-radius: 8px;
				color: #ffffff;
				font-weight: 600;
				font-size: 0.13rem;
			}
			.launchApp:hover {
				background: #00c6a9;
				color: #ffffff;
				cursor: pointer;
				font-weight: bold;
			}
		}
	}
	.bannerViewMobile {
		width: 100%;
		height: 3.3rem;
		background-image: url("/imgs/mobile/m1.png");
		background-size: 100% 100%;
		margin-top: 0.72rem;
		padding-top: 0.38rem;
		.title {
			font-weight: 600;
			font-size: 0.26rem;
			color: #ffffff;
		}
		.title2 {
			position: relative;
			top: -0.1rem;
			margin-bottom: 0.04rem;
		}
		.subTitle {
			font-size: 0.16rem;
			color: #ffffff;
			letter-spacing: 0.02em;
			opacity: 0.8;
		}
		.subTitle2 {
			margin-bottom: 0.32rem;
		}
		.bannerBtn1 {
			display: inline-block;
			width: 1.25rem;
			line-height: 0.35rem;
			background: #00c6a9;
			border-radius: 8px;
			text-align: center;
			font-size: 0.14rem;
			color: #ffffff;
			background-color: rgba(2, 5, 5, 1);
			border: 1px solid rgba(255, 255, 255, 1);
		}
		.bannerBtn1:hover {
			background: #00b197;
			box-shadow: 0px 0px 6px 1px #00c6a9;
		}
	}
	.aboutView {
		width: 100vw;
		.title {
			font-size: 0.26rem;
			font-weight: bold;
			line-height: 0.39rem;
			text-align: center;
			color: #ffffff;
			margin: 0.3rem 0 0.24rem 0;
		}
		.table {
			.cell {
				width: 100%;
				padding: 0.3rem;
				height: 2.22rem;
				background: rgba(123, 195, 200, 0.1);
				backdrop-filter: blur(4px);
				border-radius: 8px;
				border: 1px solid rgba(18, 26, 25, 1);
				margin-bottom: 0.2rem;
				.round {
					display: inline-block;
					width: 0.1rem;
					height: 0.1rem;
					border: 0.005rem solid #ffffff;
					box-sizing: border-box;
					border-radius: 50%;
					margin-bottom: 0.24rem;
				}
				.round2 {
					position: relative;
					left: -0.04rem;
				}
				.liTitle {
					font-weight: 600;
					font-size: 0.22rem;
					line-height: 0.27rem;
					margin-bottom: 0.16rem;
					letter-spacing: 0.08em;
					color: #ffffff;
				}
				.liSubtitle {
					font-weight: 300;
					font-size: 0.16rem;
					line-height: 0.26rem;
					letter-spacing: 0.06em;
					color: #ffffff;
					opacity: 0.7;
				}
			}
			.cell:hover {
				margin-top: -0.1rem;
				background: rgba(123, 195, 200, 0.1);
				border: 1px solid #00c6a9;
				box-sizing: border-box;
				box-shadow: 0px 41px 22px -16px rgba(0, 198, 169, 0.17),
					0px 0px 10px 1px rgba(0, 198, 169, 0.5);
				border-radius: 8px;
				.round2 {
					background: #00c6a9;
					border: 1px solid #00c6a9;
				}
			}
		}
	}
	.bridgeView {
		width: 100vw;
		height: 5.06rem;
		background-image: url("/imgs/mobile/m2.png");
		background-size: 100% 100%;
		padding-top: 0.61rem;
		.title {
			> div {
				line-height: 0.4rem;
				font-weight: bold;
				font-size: 0.26rem;
				color: #ffffff;
			}
		}
		.subtitle {
			margin-bottom: 0.25rem;
			font-size: 0.16rem;
			letter-spacing: 0.02em;
			color: #ffffff;
			opacity: 0.8;
			margin-left: 0.06rem;
		}
		.chainName {
			font-weight: 600;
			font-size: 0.14rem;
			line-height: 0.17rem;
			color: #ffffff;
		}
		.sendToView {
			.sendImg {
				display: inline-block;
				width: 0.44rem;
				height: 0.44rem;
			}
			.label {
				display: inline-block;
				width: 0.6rem;
				font-size: 0.22rem;
				letter-spacing: 0.08em;
				color: #ffffff;
				margin-right: 0.13rem;
			}
			.sendToArrowImg {
				width: 1rem;
				height: 0.5rem;
				margin: 0 0.1rem;
			}
			.toImg {
				display: inline-block;
				width: 0.44rem;
				height: 0.44rem;
			}
		}
	}
	.teleswap {
		width: 100vw;
		height: 4rem;
		background-image: url("/imgs/mobile/m3.png");
		background-size: 100% 100%;
		text-align: right;
		.title {
			font-weight: bold;
			font-size: 0.26rem;
			line-height: 0.39rem;
			color: #ffffff;
			margin-bottom: 0.25rem;
		}
		.title2 {
			font-size: 0.12rem;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
		}
		.title3 {
			font-size: 0.12rem;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
		}
	}
	.metaView {
		width: 100vw;
		height: 5.3rem;
		background-image: url("/imgs/mobile/m4.png");
		background-size: 100% 100%;
		.title {
			font-weight: bold;
			font-size: 0.26rem;
			line-height: 0.39rem;
			color: #ffffff;
			margin-bottom: 0.2rem;
		}
		.title2 {
			font-size: 0.14rem;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
		}
	}
	.roadmapView {
		text-align: center;
		background-image: url("/imgs/mobile/m5.png");
		background-size: 100% 100%;
		width: 100vw;
		height: 0.6rem;
		.roadmapTitle {
			font-weight: bold;
			font-size: 0.26rem;
			color: #ffffff;
		}
	}
	.roadmapLineView {
		width: 100vw;
		height: 7rem;
		background-image: url("/imgs/mobile/roadmap.svg");
		background-size: 40% 100%;
		background-repeat: no-repeat;
		.roadmapImg {
			display: inline-block;
		}
		.roadmapRound {
			display: inline-block;
			width: 0.05rem;
			height: 0.05rem;
			border-radius: 50%;
			margin-right: 0.08rem;
			background: #9b9b9b;
		}
		.roadmapRoundNo {
			display: inline-block;
			width: 0.05rem;
			height: 0.05rem;
			border-radius: 50%;
			margin-right: 0.08rem;
		}
		.rightRoadmap {
			display: inline-block;
			height: 7rem;
		}
		.roadItemCtt {
			.title {
				font-size: 0.16rem;
				color: #03c7ab;
				margin-bottom: 0.05rem;
				font-weight: bold;
			}
			.desc {
				color: rgba(255, 255, 255, 0.7);
				font-size: 0.12rem;
			}
		}
		.roadItemCtt:hover {
			position: relative;
			top: -4px;
			color: rgba(255, 255, 255, 1);
		}
		.roadItemCtt:hover .roadmapRound {
			background: #03c7ab;
			border-radius: 50%;
		}
		.roadItemCtt1 {
			margin-top: 0.7rem;
			position: relative;
			left: -0.2rem;
			margin-bottom: 0.4rem;
		}
		.roadItemCtt2 {
			position: relative;
			left: 0.2rem;
			margin-bottom: 0.3rem;
		}
		.roadItemCtt3 {
			position: relative;
			left: 0.05rem;
			margin-bottom: 0.1rem;
		}
		.roadItemCtt4 {
			position: relative;
			left: 0.3rem;
			margin-bottom: 0.3rem;
		}
		.roadItemCtt5 {
			position: relative;
			left: -0.2rem;
			margin-bottom: 0.3rem;
		}
	}
	.bottomView {
		width: 100vw;
		background-image: url("/imgs/mobile/m6.png");
		background-size: 100% 100%;
		color: #ffffff;
		margin-bottom: 0.2rem;
		display: inline-block;
		.centerViewMobile {
			height: 1rem;
			.text {
				opacity: 0.4;
				position: relative;
				bottom: -0.1rem;
				color: #ffffff;
			}
		}
		.contactItemMobile {
			display: inline-block;
			width: 0.4rem;
			height: 0.4rem;
			border: 1px solid #ffffff;
			border-radius: 50%;
			text-align: center;
			margin-right: 0.1rem;
		}
		.contactItemMobile svg {
			width: 0.21rem;
			height: 0.21rem;
			position: relative;
			top: 0.08rem;
			fill: white;
		}
		.contactItemMobile:hover {
			border: 1px solid #00c6a9;
			box-sizing: border-box;
			box-shadow: 0px 0px 6px 1px #00c6a9;
		}
		.contactItemMobile:hover svg {
			fill: #00c6a9;
		}
	}
`
