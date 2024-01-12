import React from "react";

import GeneralPageLayout from "../components/layout/GeneralPageLayout";
import Section from "../components/Section";
import PortfolioPage from "../components/portfolioPage/PortfolioPage";

const Portfolio = () => {
	return (
		<GeneralPageLayout>
			<Section>
				{/* <HeadingTitle>Portfolio</HeadingTitle> */}
				<PortfolioPage />
			</Section>
		</GeneralPageLayout>
	);
};

export default Portfolio;
