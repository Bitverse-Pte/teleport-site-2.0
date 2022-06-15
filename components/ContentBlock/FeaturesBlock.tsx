import React from "react"
import { Box } from "rebass"
import styled from "styled-components"

const FeatureBlock = styled(Box)`
	height: 280px;
	&:hover:after {
		transform: scaleX(1);
	}
	&:after {
		display: block;
		content: "";
		border-bottom: solid white;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
		transform-origin: 0% 50%;
	}
`

export default function FeaturesBlock() {
	return (
		<Box>
			<Feature />
		</Box>
	)
}

function Feature() {
	return (
		<FeatureBlock>
			<Box
				sx={{
					colorL: "white",
					height: "100%",
					fontSize: "64px",
					transition: "all 0.3s ease-in-out 0.2s",
					"transform-origin": "top left",
					"&:hover": {
						transition: "all 0.3s ease-in-out 0.1s",
						transform: "scale(1.25)",
					},
				}}
			>
				abc
			</Box>
		</FeatureBlock>
	)
}
