import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WebsiteDesign from "../pages/our-services/WebsiteDesign"
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import GeneralPrinting from "../pages/our-services/GeneralPrinting";
import Portfolio from "../pages/Portfolio";
import GetStarted from "../pages/GetStarted";
import"../App.css"
export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/services/website-design"
					element={<WebsiteDesign />}
				/>
				<Route
					path="/services/branding-and-design"
					element={<WebsiteDesign />}
				/>
				<Route
					path="/services/general-printing"
					element={<GeneralPrinting />}
				/>
				<Route
					path="/about-us"
					element={<AboutUs />}
				/>
				<Route
					path="/contact-us"
					element={<ContactUs />}portfolio
				/>
				<Route
					path="/portfolio"
					element={<Portfolio />}
				/>
				<Route
					path="/get-started"
					element={<GetStarted />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
