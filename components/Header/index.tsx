import React from "react"
import { Flex, Box } from "rebass/styled-components"
import Image from "next/image"

import mainLogo from "public/main_logo.svg"
/* 
const Container = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: row;
	align-items: start;
`

const BannerContainer = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: row;
	align-items: start;
` */

export default function Header() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "200px",
				display: "flex",
				flexDirection: "row",
				alignItems: "start",
			}}
		>
			<Banner />
		</Box>
	)
}

function Banner() {
	return (
		<Box paddingLeft={"40px"} paddingTop="40px">
			<Image src={mainLogo} alt={"main-logo"} height="55px" />
		</Box>
	)
}
