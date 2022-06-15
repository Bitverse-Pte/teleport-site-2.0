import React from "react"
import FeaturesBlock from "./ContentBlock/FeaturesBlock"
import Community from "./ContentBlock/CommunityBlock"
import Footer from "./Footer"
import Header from "./Header"

export default function Main() {
	return (
		<>
			<Header />
			<FeaturesBlock />
			<Community></Community>
			<Footer />
		</>
	)
}
