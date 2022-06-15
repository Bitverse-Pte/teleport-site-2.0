import React from "react"
import Footer from "./Footer";
import Community from "./ContentBlock/CommunityBlock";
import Header from "./Header";
import FeaturesBlock from "./ContentBlock/FeaturesBlock";

export default function Main() {
	return <>
		<Header/>
		<FeaturesBlock/>
		<Community></Community>
		<Footer></Footer>
	</>
}
