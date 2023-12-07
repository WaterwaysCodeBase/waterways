import React from "react";

import { Text } from "@chakra-ui/react";
import GeneralPageLayout from "../components/layout/GeneralPageLayout";
import { HeadingTitle } from "../components/HeadingTitle";
import Section from "../components/Section";

const ContactUs = () => {
	return (
		<GeneralPageLayout>
			<Section>
				{" "}
				<HeadingTitle>Contact Us</HeadingTitle>
			</Section>
		</GeneralPageLayout>
	);
};

export default ContactUs;
