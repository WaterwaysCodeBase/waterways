import React from "react";

import { Text } from "@chakra-ui/react";
import GeneralPageLayout from "../components/layout/GeneralPageLayout";
import { HeadingTitle } from "../components/HeadingTitle";
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
