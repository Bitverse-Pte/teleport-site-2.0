import FeaturesBlock from "./ContentBlock/FeaturesBlock"
import SectionsBlock from "./ContentBlock/SectionBlock"
import Community from "./ContentBlock/CommunityBlock"
import Footer from "./Footer"
import Header from "./Header"

export default function Main() {
	return (
		<>
			<Header />
			<FeaturesBlock />
			<SectionsBlock></SectionsBlock>
			<Community></Community>
			<Footer />
		</>
	)
}
