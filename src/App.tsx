import { type FunctionComponent, useCallback, useRef, useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ContactForm from "./components/ContactForm";
import PortalPopup from "./components/PortalPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import About from './sections/About';
import Booking from './sections/Booking';
import Brands from './sections/Brands';
import Filmography from './sections/Filmography';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Interviews from './sections/Interviews';
import Intro from './sections/Intro';
import Life from './sections/Life';
import News from './sections/News';
import Newsletter from './sections/Newsletter';

// const gallery = {
// 	family: [
// 	],
// 	set: [
// 		'/images/set/1.webp',
// 		'/images/set/2.webp',
// 		'/images/set/3.webp',
// 		'/images/set/4.webp',
// 		'/images/set/5.webp',
// 	],
// 	travel: [
// 		'/images/travel/1.webp',
// 		'/images/travel/2.webp',
// 		'/images/travel/3.webp',
// 		'/images/travel/4.webp',
// 		'/images/travel/5.webp',
// 		'/images/travel/6.webp',
// 	]
// }

const App: FunctionComponent = () => {
	const [isContactFormOpen, setContactFormOpen] = useState(false);
	const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
	const [isTermsAndConditionsOpen, setTermsAndConditionsOpen] = useState(false);
	const aboutRef = useRef<HTMLDivElement>(null);
	// const [toggler, setToggler] = useState(false);
	// const [productIndex, setProductIndex] = useState<'set' | 'travel' | 'family'>('family');
	const openContactForm = useCallback(() => {
		setContactFormOpen(true);
	}, []);

	// const handleImageClick = (type: 'set' | 'travel' | 'family') => {
	// setProductIndex(type)
	// setToggler(true)
	// }

	const closeContactForm = useCallback(() => {
		setContactFormOpen(false);
	}, []);


	const openPrivacyPolicy = useCallback(() => {
		setPrivacyPolicyOpen(true);
	}, []);

	const closePrivacyPolicy = useCallback(() => {
		setPrivacyPolicyOpen(false);
	}, []);


	const openTermsAndConditions = useCallback(() => {
		setTermsAndConditionsOpen(true);
	}, []);

	const closeTermsAndConditions = useCallback(() => {
		setTermsAndConditionsOpen(false);
	}, []);


	const onAboutMeTextClick = useCallback(() => {
		aboutRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
	}, []);


	const onLinkContainerClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
	}, []);


	const onLinkContainerClick1 = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
	}, []);


	const onLinkContainerClick2 = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
	}, []);


	const onLinkContainerClick3 = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='brands']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
	}, []);


	const onBammyBestowedTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
	}, []);

	return (
		<div className="self-stretch flex flex-col items-start justify-start">
			<div className="w-full relative bg-whitesmoke text-left text-base text-darkslategray-100 overflow-x-hidden font-helvetica z-10">
				<Header
					onBammyBestowedTextClick={onBammyBestowedTextClick}
					onAboutMeTextClick={onAboutMeTextClick}
					onLinkContainerClick={onLinkContainerClick}
					onLinkContainerClick1={onLinkContainerClick1}
					onLinkContainerClick2={onLinkContainerClick2}
					onLinkContainerClick3={onLinkContainerClick3}
					openContactForm={openContactForm}
				/>
				<main>
					<Hero />
					<div className="flex flex-col items-center justify-start text-center text-4xl md:text-29xl text-gray-100 font-worcester-serial">
						<Intro openContactForm={openContactForm} />
						<About ref={aboutRef} />
						<Filmography />
						<Interviews />
						<Life />
						<News />
						<Brands />
						<Booking openContactForm={openContactForm} />
						<Newsletter openContactForm={openContactForm} />
					</div>
				</main>
				<Footer openPrivacyPolicy={openPrivacyPolicy} openTermsAndConditions={openTermsAndConditions} />
			</div>
			{/* <FsLightbox
				toggler={toggler}
				sources={gallery[productIndex]}
				key={productIndex}
			/> */}
			{isContactFormOpen && (
				<PortalPopup
					overlayColor="rgba(0, 0, 0, 0.25)"
					placement="Centered"





					onOutsideClick={closeContactForm}
				>
					<ContactForm onClose={closeContactForm} />
				</PortalPopup>
			)}
			{isPrivacyPolicyOpen && (
				<PortalPopup
					overlayColor="rgba(0, 0, 0, 0.25)"
					placement="Centered"





					onOutsideClick={closePrivacyPolicy}
				>
					<PrivacyPolicy onClose={closePrivacyPolicy} />
				</PortalPopup>
			)}
			{isTermsAndConditionsOpen && (
				<PortalPopup
					overlayColor="rgba(0, 0, 0, 0.25)"
					placement="Centered"





					onOutsideClick={closeTermsAndConditions}
				>
					<TermsAndConditions onClose={closeTermsAndConditions} />
				</PortalPopup>
			)}</div>);
};

		export default App;
