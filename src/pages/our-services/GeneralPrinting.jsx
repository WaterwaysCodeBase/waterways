import React from "react";
import GeneralPageLayout from "../../components/layout/GeneralPageLayout";
import { Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../components/HeadingTitle";
import Section from "../../components/Section";

const GeneralPrinting = () => {
	return (
		<GeneralPageLayout>
			<Section>
				<HeadingTitle>General Printing</HeadingTitle>
			</Section>
		</GeneralPageLayout>
	);
};

export default GeneralPrinting;
