
import BNewsletter from "../bNewsletter/BNewsletter";
import Footer from "../footer/Footer";
import Header from "./Header";

import { Box } from "@chakra-ui/react";

const GeneralPageLayout = ({ children }) => {
	return (
		<Box>
			<Header />
			{children}
			 <BNewsletter />
			<Footer />
		</Box>
	);
};
export default GeneralPageLayout;
