import React, { memo, useEffect, useState } from "react"
import { MobileStyled } from "./styled"
import { Dropdown } from "antd"
import { useInterval } from "hooks/timer"

const Mobile = () => {
	let sensorsClient: any
	let swap_hub_roadMap = [0, 0, 0]
	const [bridgeViewAnimate, setBridgeViewAnimate] = useState("")
	const [teleswapAnimate, setTeleswapAnimate] = useState("")
	const [metaAnimate, setMetaAnimate] = useState("")
	const [roadmapLineViewAnimate, setRoadmapLineViewAnimate] = useState("")
	const [sendAnimate, setSendAnimate] = useState("")
	const [toAnimate, setToAnimate] = useState("")
	const bridgeSends = ["BTC", "ETH", "USDT", "USDC", "DAI"]
	const sendIcons = [
		"/imgs/token/BTC.png",
		"/imgs/token/ETH.png",
		"/imgs/token/USDT.png",
		"/imgs/token/USDC.png",
		"/imgs/token/DAI.png",
	]
	const bridgeTos = [
		"Ethereum",
		"BSC",
		"Polygon",
		"Avalanche",
		"Cosmos",
		"Solana",
		"Terra",
	]
	const toIcons = [
		"/imgs/token/ETH.png",
		"/imgs/chain/BSC.png",
		"/imgs/chain/POLYGON.png",
		"/imgs/chain/AVALANCHE.png",
		"/imgs/chain/COSMOS.png",
		"/imgs/chain/SOLANA.png",
		"/imgs/chain/TERRA.png",
	]
	let [sendLoopIndex, setSendLoopIndex] = useState(0)
	let [toLoopIndex, setToLoopIndex] = useState(0)
	let pageEnds = [1, 1, 1, 1, 1, 1]
	useEffect(() => {
		const skynet = require("utils/skynet")
		sensorsClient = skynet.default.sensors

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	})

	useInterval(3000, () => {
		if (sendLoopIndex >= bridgeSends.length - 1) {
			setSendLoopIndex(0)
		} else {
			setSendLoopIndex((sendLoopIndex) => sendLoopIndex + 1)
		}
		setSendAnimate("animate__animated animate__fadeInUp")
		setTimeout(() => {
			setSendAnimate("")
		}, 1000)
		if (toLoopIndex >= bridgeTos.length - 1) {
			setToLoopIndex(0)
		} else {
			setToLoopIndex((toLoopIndex) => toLoopIndex + 1)
			setToAnimate("")
		}
		setToAnimate("animate__animated animate__fadeInUp")
		setTimeout(() => {
			setToAnimate("")
		}, 1000)
	})
	const handleScroll = (e: any) => {
		let scrollTop = document.documentElement.scrollTop

		const bridgeView: any = document.getElementsByClassName("bridgeView")[0]
		if (
			pageEnds[1] &&
			bridgeView &&
			bridgeView.offsetTop &&
			scrollTop >= bridgeView.offsetTop - 800
		) {
			setBridgeViewAnimate("animate__animated animate__fadeInUp")
			pageEnds[1] = 0
		}
		const teleswap: any = document.getElementsByClassName("teleswap")[0]
		if (
			pageEnds[2] &&
			teleswap &&
			teleswap.offsetTop &&
			scrollTop >= teleswap.offsetTop - 800
		) {
			setTeleswapAnimate("animate__animated animate__fadeInUp")
			pageEnds[2] = 0
		}
		if (!swap_hub_roadMap[0] && scrollTop >= teleswap.offsetTop - 800) {
			sensorsClient.track("Teleswap_view", {
				page: "home",
			})
			swap_hub_roadMap[0] = 1
		}
		const metaView: any = document.getElementsByClassName("metaView")[0]
		if (
			pageEnds[3] &&
			metaView &&
			metaView.offsetTop &&
			scrollTop >= metaView.offsetTop - 800
		) {
			setMetaAnimate("animate__animated animate__fadeInUp")
			pageEnds[3] = 0
		}
		if (!swap_hub_roadMap[1] && scrollTop >= metaView.offsetTop - 800) {
			sensorsClient.track("MetaverseHub_view", {
				page: "home",
			})
			swap_hub_roadMap[1] = 1
		}

		const roadmapLineView: any =
			document.getElementsByClassName("roadmapLineView")[0]
		if (
			pageEnds[4] &&
			roadmapLineView &&
			roadmapLineView.offsetTop &&
			scrollTop >= roadmapLineView.offsetTop - 800
		) {
			setRoadmapLineViewAnimate("animate__animated animate__fadeInUp")
			pageEnds[4] = 0
		}
		if (!swap_hub_roadMap[2] && scrollTop >= roadmapLineView.offsetTop - 800) {
			sensorsClient.track("Roadmap_view", {
				page: "home",
			})
			swap_hub_roadMap[2] = 1
		}
		const bottomView: any = document.getElementsByClassName("bottomView")[0]
		if (
			bottomView &&
			bottomView.offsetTop &&
			scrollTop >= bottomView.offsetTop
		) {
			setBridgeViewAnimate("")
			setTeleswapAnimate("")
			setMetaAnimate("")
			setRoadmapLineViewAnimate("")
			window.removeEventListener("scroll", handleScroll)
		}
	}
	const clickCommunityGithub = () => {
		sensorsClient.track("community_github_click", {
			page: "home",
		})
		window.open("https://github.com/teleport-network", "_blank")
	}
	const clickAmbassador = () => {
		window.open("https://ambassador.teleport.network/", "_blank")
	}
	const clickCommunityTwitter = () => {
		sensorsClient.track("community_Twitter_click", {
			page: "home",
		})
		window.open("https://twitter.com/TeleportChain", "_blank")
	}
	const clickCommunityTelegram = () => {
		sensorsClient.track("community_Telegram_click", {
			page: "home",
		})
		window.open("https://t.me/TeleportNetwork", "_blank")
	}
	const clickCommunityDiscord = () => {
		sensorsClient.track("community_Discord_click", {
			page: "home",
		})
		window.open("https://discord.gg/5YQtRDF4Rh", "_blank")
	}
	const clickCommunityMedium = () => {
		sensorsClient.track("community_Medium_click", {
			page: "home",
		})
		window.open("https://medium.com/@TeleportNetwork", "_blank")
	}
	const clickDocTeleport = () => {
		sensorsClient.track("doc_teleport_click", {
			page: "home",
		})
		window.open("https://docs.teleport.network", "_blank")
	}
	const clickWhitePageTeleport = () => {
		sensorsClient.track("whitepaper_click", {
			page: "home",
		})
	}
	
	const clickWalletTo = () => {
		window.open("https://chrome.google.com/webstore/detail/teleport-wallet/gkeelndblnomfmjnophbhfhcjbcnemka", "_blank")
	}
	const clickExploreEvm = () => {
		sensorsClient.track("explore_evm_click", {
			page: "home",
		})
		window.open("https://evm-explorer.testnet.teleport.network", "_blank")
	}
	const clickLaunchApp = () => {
		sensorsClient.track("launchApp_click", {
			page: "home",
		})
		window.open("https://bridge.testnet.teleport.network", "_blank")
	}
	const menu = (
		<div className="communityViewMobile">
			<div className="dflexRowEndCenter dmr20">
				<img className="arrow" src={"/imgs/top_arrow.png"} alt="" />
			</div>
			<div className="communityViewItem" key="11111">
				<img className="ambassadorImg" src={"/imgs/hot.png"} alt="" />
				<a className="media" onClick={() => clickAmbassador()}>
					Ambassador
				</a>
			</div>
			<div className="communityViewItem" key="0">
				<img src={"/imgs/nav_twitter.png"} alt="" />
				<a className="media" onClick={() => clickCommunityTwitter()}>
					Twitter
				</a>
			</div>
			<div className="communityViewItem" key="1">
				<img src={"/imgs/nav_telegram.png"} alt="" />
				<a className="media" onClick={() => clickCommunityTelegram()}>
					Telegram
				</a>
			</div>
			<div className="communityViewItem" key="2">
				<img src={"/imgs/nav_discord.png"} alt="" />
				<a className="media" onClick={() => clickCommunityDiscord()}>
					Discord
				</a>
			</div>
			<div className="communityViewItem" key="3">
				<img src={"/imgs/nav_medium.png"} alt="" />
				<a className="media" onClick={() => clickCommunityMedium()}>
					Medium
				</a>
			</div>
			<div className="communityViewItem" key="3">
				<img src={"/imgs/mobile/nav_doc.png"} alt="" />
				<a className="media" onClick={() => clickDocTeleport()}>
					Doc
				</a>
			</div>
			<div className="communityViewItem" key="3">
				<img src={"/imgs/mobile/nav_doc.png"} alt="" />
				<a className="media" onClick={() => clickExploreEvm()}>
					Explorer
				</a>
			</div>
			<div className="communityViewItem" key="3">
				<img src={"/imgs/mobile/nav_wallllet.png"} alt="" />
				<a className="media" onClick={() => clickWalletTo()}>
					Wallet
				</a>
			</div>
		</div>
	)
	return (
		<MobileStyled>
			<div className={["m_headView"].join(" ")}>
				<div className="centerViewMobile   dflexRowBetweenCenter">
					<div className="logo">
						<img className="logoImg" src={"/imgs/logo.jpg"} alt="" />
					</div>
					<div className="rightNav">
						<a className="launchApp dmr15" onClick={() => clickLaunchApp()}>
							Launch App
						</a>
						<Dropdown
							className="dropdownView dflexRowCenterCenter"
							overlay={menu}
							// @ts-ignore
							getPopupContainer={(trigger) => trigger.parentElement}
							trigger={["click"]}
						>
							<a
								className="ant-dropdown-link dropdownButton"
								onClick={(e) => e.preventDefault()}
							>
								<span className="menuSpan"></span>
								<span className="menuSpan"></span>
								<span className="menuSpan"></span>
							</a>
						</Dropdown>
					</div>
				</div>
			</div>
			<div className="bannerViewMobile">
				<div className="centerViewMobile ">
					<div className="title">Interoperability Platform</div>
					<div className="title title2">for Web3.0</div>
					<div className="subTitle">Accelerate crypto assets &</div>
					<div className="subTitle subTitle2">dApps to multi-chain</div>
					<div>
						{/* <span className="bannerBtn1 topMoveMobile">Docs</span> */}
						<a
							className="bannerBtn1 topMoveMobile dmr20"
							onClick={() => clickDocTeleport()}
						>
							Docs
						</a>
						<a
							href="https://static-files.teleport.network/whitepaper/Teleport_Whitepaper_v1.0.pdf"
							rel="noreferrer" target="_blank"
							className="bannerBtn1 topMove"
							onClick={() => clickWhitePageTeleport()}
						>
							Whitepaper
						</a>
					</div>
				</div>
			</div>
			<div className={["aboutView"].join(" ")}>
				<div className="centerViewMobile">
					<div className="title ">Teleport Features</div>
					<div className="table dflexColumnStartStart">
						<div className="cell dflex1 topMoveMobile">
							<div>
								<span className="round"></span>
								<span className="round round2"></span>
							</div>
							<div className="liTitle">Omni-chain Integration</div>
							<div className="liSubtitle dmb10">
								Support EVM & non-EVM <br></br> chains via XIBC protocol
							</div>
							{/* <div className="liSubtitle2">*Extensible Inter-Blockchain Communication</div> */}
						</div>
						<div className="cell dflex1 topMoveMobile">
							<div>
								<span className="round"></span>
								<span className="round round2"></span>
							</div>
							<div className="liTitle">Alternative Cross-chain Approach</div>
							<div className="liSubtitle">
								Light Client - Trustless <p>Oracle TSS - Cost effective</p>
							</div>
						</div>
						<div className="cell dflex1 topMoveMobile">
							<div>
								<span className="round"></span>
								<span className="round round2"></span>
							</div>
							<div className="liTitle">
								DApp <br></br> Interoperability
							</div>
							<div className="liSubtitle">
								Non-invasive SDK for <br></br> seamless dApp integration
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={["bridgeView", bridgeViewAnimate].join(" ")}>
				<div className="centerViewMobile dflexColumnStartCenter">
					<div className="title">
						<div>Teleport Bridge</div>
					</div>
					<div className="subtitle">Cross-chain Token Transfer</div>
					<div className="sendToView dflexRowStartCenter">
						<div className={["dflexColumnStartCenter", sendAnimate].join(" ")}>
							<img
								className="sendImg dmb20"
								src={sendIcons[sendLoopIndex]}
								alt=""
							/>
							<div className="chainName">{bridgeSends[sendLoopIndex]}</div>
						</div>
						<div>
							<img className="sendToArrowImg" src={"/imgs/sendTo.svg"} alt="" />
						</div>
						<div className={["dflexColumnStartCenter", toAnimate].join(" ")}>
							<img className="toImg dmb20" src={toIcons[toLoopIndex]} alt="" />
							<div className="chainName">{bridgeTos[toLoopIndex]}</div>
						</div>
						<div className="dflex1"></div>
					</div>
				</div>
			</div>
			<div className={["teleswap", teleswapAnimate].join(" ")}>
				<div className="centerViewMobile dflexColumnStartCenter">
					<div className="title">Teleswap</div>
					<div className="title2">Cross-chain liquidity aggregator </div>
					<div className="title3">Token swap between any chains</div>
				</div>
			</div>
			<div className={["metaView", metaAnimate].join(" ")}>
				<div className="centerViewMobile dflexColumnStartCenter">
					<div className="title">Metaverse Hub</div>
					<div className="title2 dflexRowStartStart">
						<span
							className="addView dmr20"
							style={{ position: "relative", top: "1.2rem" }}
						></span>
						<div>
							First EVM-compatible relay chain <br></br> for DeFi, NFT, and game
						</div>
					</div>
				</div>
			</div>
			<div className="roadmapView animate__animated animate__fadeInUp">
				<div className="centerViewMobile">
					<div className="roadmapTitle">Teleport Roadmap</div>
				</div>
			</div>
			<div
				className={["roadmapLineView dmb30", roadmapLineViewAnimate].join(" ")}
			>
				<div className="centerViewMobile">
					<div className="dflexRowStartCenter">
						<div className="dflex1">
							{/* <img
								className="roadmapImg"
								src={"/imgs/mobile/roadmap.svg"}
								alt=""
							/> */}
						</div>
						<div className="dflex2 rightRoadmap">
							<div className="dflexColumnStartStart">
								<div className="roadItemCtt roadItemCtt1 ">
									<div className="title">2021 Q4</div>
									<div className="desc">
										<div>
											<span className="roadmapRound"></span> Team setup
										</div>
										<div>
											<span className="roadmapRound"></span> Product design &
											early-
										</div>
										<div>
											<span className="roadmapRoundNo"></span> stage development
										</div>
									</div>
								</div>
								<div className="roadItemCtt roadItemCtt2 dflex1">
									<div className="title">2022 Q1</div>
									<div className="desc">
										<div>
											<span className="roadmapRound"></span> Testnet launch
										</div>
										<div>
											<span className="roadmapRound"></span> Cross-chain
											transfer & contract
										</div>
										<div>
											<span className="roadmapRoundNo"></span> call via light
											client or TSS
										</div>
									</div>
								</div>
								<div className="roadItemCtt roadItemCtt3">
									<div className="title">2022 Q2</div>
									<div className="desc">
										<div>
											<span className="roadmapRound"></span> Mainnet launch
										</div>
										<div>
											<span className="roadmapRoundNo"></span> EVM chain support
										</div>
										<div>
											<span className="roadmapRound"></span> Cross-chain relayer
											Incentive
										</div>
										<div>
											<span className="roadmapRoundNo"></span> Program
										</div>
										<div>
											<span className="roadmapRound"></span> Multi-chain wallet
											release
										</div>
									</div>
								</div>
								<div className="roadItemCtt roadItemCtt4">
									<div className="title">2022 Q3</div>
									<div className="desc">
										<div>
											<span className="roadmapRound"></span> Cross-chain DEX
											launch
										</div>
										<div>
											<span className="roadmapRound"></span> Connecting non-EVM
											chains
										</div>
										<div>
											<span className="roadmapRound"></span> Plug & play SDK
										</div>
									</div>
								</div>
								<div className="roadItemCtt roadItemCtt5">
									<div className="title">2022 Q4</div>
									<div className="desc">
										<div>
											<span className="roadmapRound"></span> TSS Node on-chain
										</div>
										<div>
											<span className="roadmapRoundNo"></span> governance
										</div>
										<div>
											<span className="roadmapRound"></span>Multi-chain
											Namespace &{" "}
										</div>
										<div>
											<span className="roadmapRoundNo"></span> Identity
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottomView animate__animated animate__fadeInUp">
				<div className="centerViewMobile ">
					<div className="dflexColumnStartCenter">
						<div className="contactView dmb10">
							<a
								className="contactItemMobile topMove"
								onClick={() => clickCommunityGithub()}
							>
								<svg viewBox="-2.5 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.6457 36C13.7761 36.003 12.9408 35.6606 12.3227 35.0478C11.7046 34.435 11.3541 33.6017 11.348 32.7305L11.335 30.3905C4.8539 31.8027 3.48678 27.6365 3.48678 27.6365C2.42673 24.9398 0.89955 24.223 0.89955 24.223C-1.21395 22.7732 1.05965 22.8027 1.05965 22.8027C3.39694 22.9663 4.6285 25.2081 4.6285 25.2081C6.70608 28.7754 10.079 27.7445 11.4069 27.1489C11.6159 25.6401 12.2203 24.6109 12.8867 24.0267C7.71224 23.4376 2.2732 21.4347 2.2732 12.4936C2.2732 9.94576 3.18298 7.8643 4.67421 6.22958C4.43248 5.64048 3.6354 3.26777 4.89961 0.0539433C4.89961 0.0539433 6.85635 -0.57279 11.3072 2.44628C13.2079 1.92821 15.1685 1.66411 17.1382 1.66084C19.1162 1.66904 21.1105 1.92757 22.9725 2.44628C27.4201 -0.572753 29.3736 0.0539433 29.3736 0.0539433C30.6411 3.26939 29.844 5.64213 29.6023 6.22958C31.0951 7.86268 32 9.94576 32 12.4936C32 21.4576 26.5495 23.4311 21.3637 24.0087C22.1983 24.7336 22.9431 26.1523 22.9431 28.3303C22.9431 31.4541 22.9317 32.7288 22.9317 32.7288C22.9257 33.5996 22.5757 34.4326 21.9583 35.0456C21.341 35.6586 20.5064 36.0017 19.6372 36H14.6457H14.6457Z" />
								</svg>
							</a>
							<a
								className="contactItemMobile topMove"
								onClick={() => clickCommunityTwitter()}
							>
								<svg
									viewBox="0 0 38 34"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M34.1312 9.67773C34.1312 9.30569 34.1243 8.93785 34.1086 8.57253C35.6323 7.3875 36.9544 5.9041 38 4.20663C36.58 4.87351 35.069 5.30498 33.5215 5.48547C35.1321 4.45099 36.3673 2.79654 36.951 0.811121C35.4429 1.76571 33.7748 2.44815 32.0011 2.80375C30.58 1.116 28.552 0.0410181 26.3101 0.00107178C22.0043 -0.0732242 18.5139 3.72447 18.5139 8.48235C18.5139 9.15864 18.5817 9.8145 18.7162 10.4478C12.2323 10.0123 6.48676 6.48979 2.64345 1.17952C1.97283 2.45179 1.58809 3.93869 1.58809 5.53213C1.58809 8.54594 2.96451 11.2246 5.05585 12.8052C3.77555 12.7448 2.57622 12.3401 1.52428 11.6765V11.7872C1.52428 15.9994 4.2125 19.5286 7.77946 20.352C7.12554 20.5461 6.43582 20.6472 5.72646 20.6435C5.23361 20.6409 4.74235 20.5847 4.26063 20.476C5.25177 23.9278 8.13236 26.4497 11.5427 26.5337C8.87362 28.8435 5.51144 30.2232 1.8611 30.2136C1.2317 30.2136 0.609753 30.1695 0 30.0896C3.4516 32.5607 7.54875 34 11.9532 34C26.2904 34.0036 34.1312 20.9786 34.1312 9.67773Z" />
								</svg>
							</a>
							<a
								className="contactItemMobile topMove"
								onClick={() => clickCommunityTelegram()}
							>
								<svg
									viewBox="0 0 22 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M8.2764 16.911L8.61818 11.8767L17.9926 3.64075C18.4076 3.27181 17.9071 3.09328 17.3578 3.41462L5.78633 10.5437L0.781774 8.99647C-0.292374 8.69893 -0.304581 7.97293 1.0259 7.44926L20.5193 0.117885C21.4103 -0.274868 22.2647 0.332114 21.923 1.66509L18.6029 16.911C18.371 17.9941 17.6996 18.2559 16.7719 17.756L11.7186 14.1141L9.28952 16.4112C9.00878 16.6849 8.77686 16.911 8.2764 16.911Z" />
								</svg>
							</a>
							<a
								className="contactItemMobile topMove"
								onClick={() => clickCommunityDiscord()}
							>
								<svg
									viewBox="0 0 45 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M37.5912 7.07419C37.5792 7.04978 37.5593 7.03066 37.5351 7.02024C34.7369 5.67222 31.7841 4.71097 28.7504 4.16056C28.7228 4.15518 28.6944 4.15906 28.669 4.17165C28.6437 4.18424 28.6228 4.2049 28.6092 4.23069C28.2072 4.99697 27.8422 5.78406 27.5156 6.58897C24.2455 6.06775 20.9192 6.06775 17.649 6.58897C17.3203 5.78202 16.9495 4.99473 16.5381 4.23069C16.524 4.20546 16.503 4.18528 16.4778 4.17277C16.4526 4.16026 16.4244 4.15601 16.3969 4.16056C13.3629 4.70982 10.4099 5.67114 7.61205 7.02032C7.5881 7.03098 7.56789 7.04918 7.55421 7.07242C1.95916 15.8457 0.426458 24.4032 1.17835 32.8548C1.18046 32.8755 1.18652 32.8956 1.19617 32.9138C1.20582 32.932 1.21885 32.948 1.2345 32.9608C4.49245 35.4936 8.13651 37.427 12.0112 38.6784C12.0384 38.6869 12.0676 38.6866 12.0947 38.6772C12.1217 38.6679 12.1454 38.6501 12.1626 38.6263C12.9948 37.4373 13.7322 36.1783 14.3672 34.8621C14.376 34.844 14.3809 34.8242 14.3819 34.804C14.3828 34.7838 14.3796 34.7636 14.3725 34.7447C14.3655 34.7259 14.3547 34.7088 14.3409 34.6947C14.3271 34.6805 14.3106 34.6696 14.2924 34.6627C13.1296 34.1955 12.0039 33.6323 10.9258 32.9785C10.9062 32.9664 10.8898 32.9494 10.8779 32.9291C10.8661 32.9087 10.8592 32.8856 10.8578 32.8618C10.8565 32.838 10.8607 32.8142 10.8702 32.7926C10.8797 32.7709 10.8942 32.752 10.9122 32.7376C11.1391 32.5596 11.362 32.3763 11.5808 32.1875C11.6 32.1709 11.6232 32.1603 11.6479 32.1568C11.6725 32.1533 11.6976 32.1571 11.7203 32.1678C18.7833 35.5524 26.43 35.5524 33.4094 32.1678C33.4322 32.1565 33.4575 32.1521 33.4825 32.1553C33.5075 32.1585 33.5311 32.169 33.5506 32.1858C33.7697 32.3755 33.9932 32.5595 34.2209 32.7376C34.2391 32.7519 34.2536 32.7706 34.2633 32.7922C34.2729 32.8138 34.2773 32.8375 34.2762 32.8614C34.275 32.8852 34.2683 32.9083 34.2565 32.9287C34.2448 32.9492 34.2285 32.9663 34.209 32.9785C33.1334 33.6378 32.0066 34.2006 30.8408 34.6609C30.8227 34.6681 30.8062 34.6793 30.7925 34.6936C30.7788 34.708 30.7681 34.7253 30.7612 34.7443C30.7543 34.7632 30.7512 34.7836 30.7523 34.8039C30.7534 34.8242 30.7585 34.844 30.7674 34.8621C31.4131 36.171 32.1494 37.4284 32.9703 38.6242C32.987 38.6487 33.0106 38.6671 33.0378 38.6768C33.0649 38.6865 33.0943 38.6869 33.1218 38.6781C37.0034 37.431 40.6538 35.4975 43.9158 32.9608C43.9317 32.9486 43.9449 32.933 43.9546 32.915C43.9643 32.8971 43.9702 32.8771 43.972 32.8566C44.8721 23.0857 42.465 14.5983 37.5912 7.07419V7.07419ZM15.422 27.7087C13.2956 27.7087 11.5434 25.6597 11.5434 23.1432C11.5434 20.6268 13.2616 18.5777 15.422 18.5777C17.5994 18.5777 19.3346 20.6446 19.3006 23.1431C19.3006 25.6597 17.5824 27.7087 15.422 27.7087V27.7087ZM29.7626 27.7087C27.6361 27.7087 25.884 25.6597 25.884 23.1432C25.884 20.6268 27.6022 18.5777 29.7626 18.5777C31.9401 18.5777 33.6752 20.6446 33.6412 23.1431C33.6412 25.6597 31.9401 27.7087 29.7626 27.7087Z" />
								</svg>
							</a>
							<a
								className="contactItemMobile topMove"
								onClick={() => clickCommunityMedium()}
							>
								<svg
									viewBox="0 0 38 34"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12.6486 6.92741V31.8008C12.6486 32.1539 12.5604 32.4543 12.384 32.7021C12.2076 32.9499 11.9498 33.0738 11.6105 33.0738C11.3701 33.0738 11.1372 33.0172 10.9118 32.904L1.06038 27.9628C0.763794 27.8211 0.513081 27.5844 0.308239 27.2527C0.103397 26.921 0.000976562 26.5924 0.000976562 26.267V2.09309C0.000976562 1.81047 0.0717616 1.5702 0.213332 1.37228C0.354902 1.17436 0.559743 1.07541 0.827856 1.07541C1.02558 1.07541 1.3364 1.18149 1.76032 1.39366L12.5857 6.82172C12.6284 6.86447 12.6497 6.8997 12.6497 6.92741H12.6486ZM14.0045 9.06847L25.3175 27.432L14.0045 21.7913V9.06847ZM37.9639 9.45085V31.8008C37.9639 32.1539 37.865 32.4401 37.6673 32.6594C37.4696 32.8786 37.2011 32.9883 36.8618 32.9883C36.5225 32.9883 36.1907 32.8965 35.8664 32.7128L26.524 28.0471L37.9639 9.45085ZM37.8998 6.90603C37.8998 6.94878 36.0887 9.91397 32.4664 15.8016C28.8441 21.6892 26.7221 25.135 26.1005 26.1388L17.8388 12.6951L24.703 1.51953C24.9434 1.1237 25.3108 0.925781 25.8051 0.925781C26.0028 0.925781 26.1863 0.968136 26.3555 1.05284L37.8168 6.77778C37.8729 6.80628 37.901 6.84864 37.901 6.90485L37.8998 6.90603Z" />
								</svg>
							</a>
							<a
								className="contactItemMobile topMove"
								title="support@teleport.network"
								href="mailto:support@teleport.network"
							>
								<svg
									viewBox="0 0 38 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M37.9647 4.80483L18.7504 15.8968L0.0151255 5.07709C0.19663 2.2436 2.55115 0 5.43001 0H32.57C35.3581 0 37.6572 2.09739 37.9647 4.80483ZM38 8.77776V25.6627C38 28.6626 35.5699 31.0927 32.57 31.0927H5.43001C2.43014 31.0927 0 28.6626 0 25.6627V9.06514L17.8933 19.3958C18.5084 19.7487 19.2496 19.6832 19.784 19.2899C19.8092 19.2798 19.8294 19.2647 19.8546 19.2496L38 8.77776Z" />
								</svg>
							</a>
						</div>
					</div>
					<div className="text">
						©2022 Teleport Network. All rights reserved.
					</div>
				</div>
			</div>
		</MobileStyled>
	)
}
export default memo(Mobile)
