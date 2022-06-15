import styled from "styled-components"

export const HomeStyled = styled.div`
	.walletBtn {
		color: #FFFFFF;
		font-weight: 400;
		font-size: .22rem;
		margin-right: .5rem;
	}
	.mainTitle {
		color: transparent;
		display: inline-block;
	}
	.topMove:hover {
		position: relative;
		top: -4px;
	}
	.headViewMove {
		background: rgba(18, 22, 21, 0.69) !important;
		box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.08) !important;
		backdrop-filter: blur(20px) !important;
	}
	.headerNavView {
		height: 60px;
		a { 
			color: black;
		}
	}
	.headView {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		/* height: 1rem;
		line-height: 1rem; */
		background-image: url("/imgs/home_bg1.png");
		background-size: 100% 100%;
		color: #ffffff;
		.centerView {
			width: 100% !important;
			height: 60px;
			padding: 0 37px 0 44px;
		}
		/* .logoImg1 {
			width: 0.6rem;
			height: auto;
			margin-right: 0.1rem;
		} */
		.logoImg {
			width: 2.66rem;
			height: auto;
		}
		.rightNav {
			font-size: 0.22rem;
			.dropdown {
				margin-right: 0.5rem;
				font-weight: 500;
				text-align: right;
				color: #ffffff;
			}
			.doc {
				margin-right: 0.9rem;
				font-weight: 500;
			}
		}
		.AmbassadorBtn {
				font-size: 0.22rem;
                margin-right: .4rem;
                >img {
                    width: .3rem;
                    height: .3rem;
                    margin-right: .1rem;
                }
                >span {
                    font-weight: 500;
                    line-height: .24rem;
                    text-align: center;
                    text-transform: capitalize;
                    color: #0ACBE4;
                    border-radius: 2px;
                }
              
            }
		.launchApp {
			display: inline-block;
			text-align: center;
			padding: 0 0.3rem;
			height: 0.4rem;
			line-height: 0.4rem;
			/* background: #00c6a9; */
			background: #0ACBE4;
			border-radius: 5px;
			color: #1D1D1D;
			font-weight: bold;
			font-size: 0.2rem;
		}
		.launchApp:hover {
			opacity: 0.9;
			background: #0ACBE4;
		}
	}
	.bannerView {
		width: 100vw;
		height: 8.4rem;
		background-image: url("/imgs/home_bg2.png");
		background-size: 100% 100%;
		/* padding-top: 1.67rem; */
		.title {
			font-weight: 600;
			font-size: 0.6rem;
			color: #ffffff;
		}
		.title1 {
			padding-top: 2.14rem;
		}
		.title2 {
			margin-top: -0.25rem;
		}
		.title3 {
			margin-top: -0.25rem;
			margin-bottom: 0.23rem;
		}
		.subTitle {
			width: 7.23rem;
			font-weight: 300;
			font-size: 0.3rem;
			line-height: 0.4rem;
			color: #ffffff;
			letter-spacing: 0.02em;
			opacity: 0.7;
			margin-bottom: 0.81rem;
		}
		.bannerBtn1 {
			display: inline-block;
			width: 1.77rem;
			line-height: 0.47rem;
			background: #00c6a9;
			border-radius: 8px;
			text-align: center;
			font-size: 0.26rem;
			color: #ffffff;
			margin-right: 0.2rem;
		}
		.bannerBtn1:hover {
			background: #00b197;
			box-shadow: 0px 0px 6px 1px #00c6a9;
		}
		.bannerBtn2 {
			display: inline-block;
			width: 1.77rem;
			line-height: 0.47rem;
			border-radius: 8px;
			text-align: center;
			font-size: 0.26rem;
			color: #ffffff;
			margin-bottom: 0.97rem;
			background-color: rgba(2, 5, 5, 1);
			border: 1px solid rgba(255, 255, 255, 1);
		}
		.bannerBtn2:hover {
			color: #00c6a9;
			border: 1px solid #00c6a9;
		}
		.contactView {
		}
	}

	.aboutView {
		width: 100vw;
		height: 7.8rem;
		background-image: url("/imgs/home_bg3.png");
		background-size: 100% 100%;
		padding-top: 2rem;
		.title {
			font-size: 0.66rem;
			margin-bottom: 0.8rem;
			height: 0.99rem;
			font-weight: bold;
			line-height: 0.99rem;
			text-align: center;
			text-transform: capitalize;
			color: #ffffff;
		}
		.table {
			.cell {
				margin-right: 0.28rem;
				padding: 0.3rem;
				height: 2.74rem;
				background: rgba(123, 195, 200, 0.1);
				backdrop-filter: blur(4px);
				border-radius: 8px;
				border: 1px solid rgba(18, 26, 25, 1);
				.round {
					display: inline-block;
					width: 0.1rem;
					height: 0.1rem;
					border: 0.05rem solid #ffffff;
					box-sizing: border-box;
					border-radius: 50%;
					margin-bottom: 0.38rem;
				}
				.round2 {
					position: relative;
					left: -0.04rem;
				}
				.liTitle {
					font-weight: 600;
					font-size: 0.28rem;
					line-height: 0.27rem;
					margin-bottom: 0.24rem;
					letter-spacing: 0.08em;
					color: #ffffff;
				}
				.liSubtitle {
					font-weight: 300;
					font-size: 0.22rem;
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
			.cell2 {
				position: relative;
				top: 0.52rem;
			}
		}
	}

	.bridgeView {
		width: 100vw;
		height: 8.26rem;
		background-image: url("/imgs/home_bg4.png");
		background-size: 100% 100%;
		padding-top: 2.1rem;
		.title {
			margin-bottom: 0.2rem;
			line-height: 0.7rem;
			font-weight: bold;
			font-size: 0.66rem;
			color: #ffffff;
		}
		.subtitle {
			margin-bottom: 0.55rem;
			height: 0.27rem;
			font-size: 0.26rem;
			line-height: 0.27rem;
			letter-spacing: 0.02em;
			color: #ffffff;
			opacity: 0.8;
			margin-left: 0.06rem;
		}
		.chainName {
			font-weight: 600;
			font-size: 0.24rem;
			line-height: 0.27rem;
			color: #ffffff;
		}
		.sendToView {
			.sendToImg {
				display: inline-block;
				width: 1.6rem;
				height: 0.52rem;
				margin: 0 0.25rem 0 0.1rem;
			}
			.label {
				display: inline-block;
				width: 0.6rem;
				font-size: 0.22rem;
				letter-spacing: 0.08em;
				color: #ffffff;
				margin-right: 0.13rem;
			}
			.sendImg {
				width: 0.5rem;
				height: 0.5rem;
			}

			.toImg {
				width: 0.56rem;
				height: 0.56rem;
			}
		}
	}

	.teleswap {
		width: 100vw;
		height: 8.6rem;
		background-image: url("/imgs/home_bg5.png");
		background-size: 100% 100%;
		padding-top: 3.2rem;
		text-align: right;
		.teleswapIcon {
			width: 15.5rem;
			height: 17.8rem;
		}
		.title {
			line-height: 1rem;
			font-weight: bold;
			font-size: 0.66rem;
			line-height: 0.99rem;
			text-align: right;
			color: #ffffff;
			margin-bottom: 0.1rem;
		}
		.subtitle {
			font-size: 0.26rem;
			line-height: 0.27rem;
			text-align: right;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
		}
		.subtitle1 {
			margin-bottom: 0.18rem;
		}
	}
	.walletView {
		width: 100vw;
		height: 11.19rem;
		background-image: url("/imgs/home_bg5_wallet.png");
		background-size: 100% 100%;
		padding-top: 4.2rem;
		text-align: left;
		.leftView {
			margin-left: 1rem;
		}
		.teleswapIcon {
			width: 15.5rem;
			height: 17.8rem;
		}
		.title {
			font-weight: bold;
			font-weight: 700;
			font-size: 0.66rem;
			color: #ffffff;
			margin-bottom: 0.1rem;
		}
		.subtitle {
			font-size: 0.26rem;
			line-height: 0.36rem;
			text-align: right;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
		}
		.subtitle1 {
			margin-bottom: 0.18rem;
		}
		.walletDownloadBtn {
			margin: .3rem 0 0 .3rem;
			display: inline-block;
			width: 1.77rem;
			line-height: .47rem;
			text-align: center;
			background: #00C6A9;
			border-radius: .08rem;
			color: #FFFFFF;
			font-weight: 400;
			font-size: .22rem;
		}
	}
	.metaView {
		width: 100vw;
		height: 9.44rem;
		background-image: url("/imgs/home_bg5-1.png");
		background-size: 100% 100%;
		padding-top: 3.5rem;
		.title {
			font-weight: bold;
			font-size: 0.66rem;
			line-height: 0.99rem;
			text-transform: capitalize;
			color: #ffffff;
			margin-bottom: 0.16rem;
		}
		.desc {
			line-height: .36rem;
			font-weight: 400;
			font-size: 0.26rem;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
			margin: 0;
		}
		.subtitle {
			font-size: 0.26rem;
			line-height: 0.27rem;
			text-align: right;
			letter-spacing: 0.06em;
			color: #ffffff;
			opacity: 0.8;
		}
		.subtitle1 {
			margin-bottom: 0.18rem;
		}
	}
	.roadmapView {
		text-align: center;
		background-image: url("/imgs/home_bg6.png");
		background-size: 100% 100%;
		line-height: 2.75rem;
		.roadmapTitle {
			font-weight: bold;
			font-size: 0.66rem;
			text-transform: capitalize;
			color: #ffffff;
		}
	}

	.roadmapLineView {
		width: 100vw;
		/* height: 73.3rem; */
		background-image: url("/imgs/home_bg8.png");
		background-size: 100% 100%;
		.roadmapRound {
			display: inline-block;
			width: 0.05rem;
			height: 0.05rem;
			border-radius: 50%;
			margin-right: 0.1rem;
			background: #9b9b9b;
		}
		.roadmapRoundNo {
			display: inline-block;
			width: 0.05rem;
			height: 0.05rem;
			border-radius: 50%;
			margin-right: 0.1rem;
		}
		.roadItem {
			height: 3.6rem;
			font-weight: normal;
			color: #ffffff;
			color: rgba(255, 255, 255, 0.8);
			.roadItemCtt {
				.title {
					font-size: 0.28rem;
					color: #03c7ab;
					margin-bottom: 0.1rem;
					font-weight: bold;
					margin-left: .18rem;
				}
				.desc {
					font-size: 0.18rem;
					opacity: 0.7;
					font-size: .18rem;
					color: #FFFFFF;

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
		}
		.roadItem1 {
			padding-top: 1rem;
		}
		.roadItem2 {
			padding-bottom: 0.8rem;
		}
		.roadItem3 {
			padding-top: 0.4rem;
		}
		.roadItem4 {
			padding-bottom: 1rem;
		}
		.roadItem5 {
			padding-top: 1.1rem;
		}
	}
	.bottomView {
		width: 100vw;
		background-image: url("/imgs/home_bg9.png");
		background-size: 100% 100%;
		color: #ffffff;
		.centerView {
			height: 2.2rem;
			.right {
				opacity: 0.7;
				position: relative;
				bottom: -0.1rem;
			}
		}
	}
`
