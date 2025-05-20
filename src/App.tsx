import { motion } from 'motion/react';
import { type FunctionComponent, useCallback, useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { LuMenu } from 'react-icons/lu';
import ContactForm from "./components/ContactForm";
import PortalPopup from "./components/PortalPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyYouTube from './components/LazyYouTube';

// const gallery = {
// 	family: [
// 		'/images/family/1.webp',
// 		'/images/family/2.webp',
// 		// '/images/family/1.webp',
// 		// '/images/family/1.webp',
// 		// '/images/family/1.webp',
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
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const App: FunctionComponent = () => {
	const [isContactFormOpen, setContactFormOpen] = useState(false);
	const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
	const [isTermsAndConditionsOpen, setTermsAndConditionsOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const aboutRef = useRef<HTMLDivElement>(null);
	// const [toggler, setToggler] = useState(false);
	// const [productIndex, setProductIndex] = useState<'set' | 'travel' | 'family'>('family');
	const openContactForm = useCallback(() => {
		setContactFormOpen(true);
		setMobileMenuOpen(false)
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
		setTimeout(() => setMobileMenuOpen(false), 50);
	}, []);


	const onLinkContainerClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
		setTimeout(() => setMobileMenuOpen(false), 50);
	}, []);


	const onLinkContainerClick1 = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
		setTimeout(() => setMobileMenuOpen(false), 50);
	}, []);


	const onLinkContainerClick2 = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
		setTimeout(() => setMobileMenuOpen(false), 50);
	}, []);


	const onBammyBestowedTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='frameContainer']");
		if (anchor) {
			anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
		}
	}, []);

	return (<>
		<div className="w-full relative bg-whitesmoke text-left text-base text-darkslategray-100 overflow-x-hidden font-helvetica z-10">
			<nav className="bg-silver fixed top-0 z-20 border-darkslategray-200 border-solid border-b box-border w-full flex flex-col items-center justify-start py-5 md:py-[30px]">
				<div className="self-stretch relative flex justify-between px-6 items-center">
					<button
						className="text-[17.53px] md:text-xl leading-6 md:leading-[27px] font-ahganirya cursor-pointer text-darkolivegreen"
						onClick={onBammyBestowedTextClick}
					>
						<p className="m-0">Bammy</p>
						<p className="m-0 text-darkslategray-100 whitespace-pre-wrap">     Bestowed</p>
					</button>
					<div className="flex-row items-center justify-start gap-5 hidden md:flex">
						<button className="relative leading-[22.4px] cursor-pointer" onClick={onAboutMeTextClick}>About Me</button>
						<button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick}>
							<div className="relative leading-[22.4px]">Filmography</div>
						</button>
						<button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick1}>
							<div className="relative leading-[22.4px]">Interviews</div>
						</button>
						<button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick2}>
							<div className="relative leading-[22.4px]">{`News & Blog`}</div>
						</button>
						<button onClick={openContactForm} className="flex flex-col items-start justify-start cursor-pointer">
							<div className="relative leading-[22.4px]">Book Me</div>
						</button>
					</div>
					<div className="flex-row items-center justify-start gap-4 text-darkolivegreen hidden md:flex">
						<a href="https://www.instagram.com/bammybestowed?igsh=YzljYTk1ODg3Zg==" target="_blank" className=""><FaInstagram size={32} /></a>
						<a href="https://www.facebook.com/bammybestowed" target="_blank" className=""><FaFacebookF size={32} /></a>
						<a href="https://x.com/bambam" target="_blank" className=""><FaXTwitter size={32} /></a>
						<a href="https://youtube.com/@bammybestowed?si=_cf5qTYXrTdbLHB5" target="_blank" className=""><FaYoutube size={32} /></a>
					</div>
					{/* Mobile menu */}
					<div className="md:hidden flex items-center">
						<LuMenu size={40} onClick={() => setMobileMenuOpen((v) => !v)} className="cursor-pointer" />
					</div>
				</div>
				{/* Mobile Dropdown */}
				{typeof window !== "undefined" && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden overflow-hidden bg-silver px-6"
					>
						<div className="flex flex-col gap-4 py-4">
							<button className="text-left leading-[22.4px] cursor-pointer" onClick={onAboutMeTextClick}>About Me</button>
							<button className="text-left leading-[22.4px] cursor-pointer" onClick={onLinkContainerClick}>Filmography</button>
							<button className="text-left leading-[22.4px] cursor-pointer" onClick={onLinkContainerClick1}>Interviews</button>
							<button className="text-left leading-[22.4px] cursor-pointer" onClick={onLinkContainerClick2}>{`News & Blog`}</button>
							<button className="text-left leading-[22.4px] cursor-pointer" onClick={openContactForm}>Book Me</button>
							<div className="flex flex-row items-center justify-start gap-4 text-darkolivegreen pt-2">
								<a href="https://www.instagram.com/bammybestowed?igsh=YzljYTk1ODg3Zg==" target="_blank" className=""><FaInstagram size={32} /></a>
								<a href="https://www.facebook.com/bammybestowed" target="_blank" className=""><FaFacebookF size={32} /></a>
								<a href="https://x.com/bambam" target="_blank" className=""><FaXTwitter size={32} /></a>
								<a href="https://youtube.com/@bammybestowed?si=_cf5qTYXrTdbLHB5" target="_blank" className=""><FaYoutube size={32} /></a>
							</div>
						</div>
					</motion.div>
				)}
			</nav>
			{/* <div className="absolute top-[13159px] left-[80px] text-lg leading-[27px] text-white inline-block w-[360px]">{`All rates exclude VAT & WHT; international bookings attract separate tariffs.`}</div> */}
			<div className="bg-silver w-full mt-[89px] relative text-center text-[43.35px] md:text-[141.16px] text-black font-ahganirya">
				<div className="relative w-full h-[395.05px] md:h-[919px] overflow-hidden" data-scroll-to="frameContainer">
					<div className="absolute top-4 md:top-[166px] left-1/2 -translate-x-1/2 md:leading-[212.1px] leading-[80.16px] inline-block w-full h-[449px] mix-blend-overlay">
						<p className="m-0">Bammy</p>
						<p className="m-0">Bestowed</p>
					</div>
					<div className="flex absolute w-full inset-0 justify-center px-4 items-end">
						<img className="object-contain -mb-10 md:-mb-10 w-full md:w-[932px] h-auto md:h-[857px] ml-2" alt="" src="/images/hero.webp" />
					</div>

				</div>
			</div>
			<div className="flex flex-col px-6 md:px-0 items-center justify-start text-center text-4xl md:text-29xl text-gray-100 font-worcester-serial">
				<div className="w-full bg-seashell flex flex-col items-center justify-start py-[50px] px-0 box-border gap-10 md:text-[84px] text-[44px] text-gray-200">
					<div className="self-stretch flex flex-col items-center justify-start">
						<div className="self-stretch flex flex-col items-center justify-start gap-7">
							<div className="self-stretch flex flex-col items-center justify-start">
								<i className="relative md:leading-[81.4px] leading-15 inline-block font-medium md:w-2/3">Fearless on Screens, Limitless in Life</i>
							</div>
							<div className="relative text-lg leading-[27px] font-medium font-montserrat">{`Nollywood & Stage Actress | Storyteller | Voice that stays with you.`}</div>
						</div>
					</div>
					<button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full flex justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={openContactForm}>
						<span className="leading-[19.6px] font-medium max-h-[19.6px]">Book Bambam</span>
					</button>
				</div>
				<div ref={aboutRef} className="md:w-[1281px] w-full flex flex-col items-end justify-start py-[50px] md:px-12 box-border gap-10 z-[1]" data-scroll-to="frameContainer4">
					<div className="self-stretch flex flex-col items-start justify-start gap-12">
						<i className="self-stretch relative">About Me</i>
						<div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-8 text-left md:text-[28px] text-2xl text-gray-200">
							<div className="self-stretch w-full md:w-[545px] md:aspect-square rounded-lg bg-gray-600 overflow-hidden shrink-0 flex flex-row items-center justify-start p-2 box-border">
								<img className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover" alt="" src="/images/about.webp" />
							</div>
							<div className="flex flex-col items-start justify-start gap-5">
								<i className="self-stretch relative font-worcester-serial italic">Bamike<span className="font-dm-sans">-</span>Olawumi Adenibuyan known as Bammy Bestowed is a multifaceted personality, renowned as an actress, lifestyle influencer, host, humanitarian.</i>
								<div className="self-stretch relative text-base leading-[140%] font-helvetica text-gray-300">
									<p className="m-0 mb-5 whitespace-pre-wrap">Bammy Bestowed  is a talented actor, and a good storyteller, she is a professional voice over artist and is good at directing.</p>
									<p className="m-0 mb-5">In collaboration with MTV Base Africa, Bamike collaborated with renowned stars like 2face Idibia and Tiwa Savage to drive awareness regarding civic responsibility, specifically emphasizing the importance of registering and securing Permanent Voter’s Cards ahead of elections in the country.</p>
									<p className="m-0 mb-5">{`
                    										Her impressive on-screen portfolio includes acclaimed projects like the social drama "Collision Course" and "Lockdown." She has also showcased her talent in various stage plays, including ''Love is the Musical”, “Fela And The Kalakuta Queens”, ”Queen Moremi The Musical”, and “Ada The Country.”`}</p>
									<p className="m-0">{`
                    										Beyond her roles on-screen and on-stage, Bamike is a devoted wife and mother to two beautiful children. Her passion extends to addressing and advocating for women and children's rights, as well as actively speaking on issues related to mental health and postpartum depression.`}</p>
								</div>
							</div>
						</div>
					</div>
					<img className="self-stretch relative max-w-full overflow-hidden max-h-full" alt="" src="Vector.svg" />
					<div className="self-stretch flex flex-col items-start justify-start gap-8 text-lg text-gray-200 font-helvetica">
						<div className="relative tracking-[0.13em]">Quick Facts</div>
						<div className="self-stretch flex flex-col items-start justify-start text-left">
							<div className="self-stretch flex flex-col items-start justify-start gap-2 md:gap-5">
								<div className="self-stretch grid md:grid-cols-[1fr_1.7fr] gap-2">
									<div className="md:w-[388px] relative inline-block shrink-0">
										<p className="m-0">Languages</p>
										<p className="m-0 text-xl">
											<span>
												<b>English | Yoruba | Pidgin</b>
												<span className="font-helvetica">
												</span>
											</span>
										</p>
									</div>
									<div className="relative">
										<p className="m-0">Specialties</p>
										<p className="m-0 text-xl">
											<b>{`Mezzo‑soprano vocals | African & contemporary dance | Method acting`}</b>
										</p>
									</div>
								</div>
								<div className="self-stretch grid md:grid-cols-[1fr_1.7fr] gap-2">
									<div className="md:w-[388px] relative inline-block shrink-0">
										<p className="m-0">Social Footprint</p>
										<p className="m-0 text-xl">
											<b>1.9 M Instagram | 192 K X | 28.6 K YouTube</b>
										</p>
									</div>
									<div className="relative">
										<p className="m-0">{`Causes `}</p>
										<p className="m-0 text-xl">
											<b>Maternal health | Girl‑child education | Mental‑wellness
											</b>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col items-center justify-start py-[50px] md:px-12 box-border gap-12 z-[2]" data-scroll-to="frameContainer3">
					<i className="self-stretch relative">Filmography</i>
					<div className="md:w-full flex flex-col items-center justify-start text-left md:text-13xl text-[20px] text-darkslategray-100 font-helvetica">
						<div className="md:w-full flex flex-col items-start justify-center gap-10">
							<div className="self-stretch grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-8">
								{/* <div >
									<img className="object-cover w-full h-full" alt="" src="/images/films/twin_deception.webp" />
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-full justify-center items-center bg-black/40 size-25.5">
										<FaPlay size={48} className="text-white" />
									</div>
								</div> */}
								<LazyYouTube videoId={'GwwLna5zxpk'} title={'Twin Deception'} />
								{/* <iframe className="flex-1 relative max-w-full overflow-hidden aspect-video rounded-8xs" src="https://www.youtube.com/embed/GwwLna5zxpk?si=ICzX2MGYUSbl7PeI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
								<div className="flex-1 flex flex-col items-start justify-start">
									<div className="self-stretch flex flex-col items-start justify-start gap-8">
										<div className="self-stretch flex flex-col items-start justify-start gap-5">
											<div className="self-stretch flex flex-row items-center justify-between">
												<div className="relative">Twin Deception</div>
												<div className="relative block md:hidden">2025</div>
											</div>
											<div className="self-stretch relative text-base leading-[140%]">Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion‑naira conspiracy that could cost the sisters their freedom—and their newfound bond.</div>
										</div>
										<div className="relative text-5xl hidden md:block">2025</div>
									</div>
								</div>
							</div>
							<div className="self-stretch grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-8">
								{/* <div className="flex-1 relative max-w-full overflow-hidden aspect-video rounded-8xs">
									<img className="object-cover w-full h-full" alt="" src="/images/films/love_in_every_word.webp" />
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-full justify-center items-center bg-black/40 size-25.5">
										<FaPlay size={48} className="text-white" />
									</div>
								</div> */}
								<LazyYouTube videoId={'bslcx4LRFL0'} title={'Love in Every Word'} />
								{/* <iframe className="flex-1 relative max-w-full overflow-hidden aspect-video rounded-8xs" src="https://www.youtube.com/embed/bslcx4LRFL0?si=4bAV6XV0bwgGJnBk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
								<div className="flex-1 flex flex-col items-start justify-start gap-3">
									<div className="self-stretch flex flex-col items-start justify-start gap-5">
										<div className="self-stretch flex flex-col items-start justify-between">
											<div className="relative">Love in Every Word</div>
											<div className="relative block md:hidden">2025</div>
										</div>
										<div className="self-stretch relative text-base leading-[140%]">A jaded radio host must prove true love exists or lose her show. Anonymous letters from a mysterious chef rekindle hope—until the envelopes stop and she must risk her heart on air.</div>
									</div>
									<div className="relative text-5xl hidden md:block">2025</div>
								</div>
							</div>
							<div className="self-stretch grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-8">
								{/* <div >
									<img className="object-cover w-full h-full" alt="" src="/images/films/a_merry_side_of_you.webp" />
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-full justify-center items-center bg-black/40 size-25.5">
										<FaPlay size={48} className="text-white" />
									</div>
								</div> */}
								<LazyYouTube videoId={'Slxm189-MXk'} title={'Merry Side of You'} />
								{/* <iframe className="flex-1 relative max-w-full overflow-hidden aspect-video rounded-8xs" src="https://www.youtube.com/embed/Slxm189-MXk?si=cBlWYY2T5TEdZUIN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
								<div className="flex-1 flex flex-col items-start justify-start gap-3">
									<div className="self-stretch flex flex-col items-start justify-start gap-5">
										<div className="self-stretch flex flex-col items-start justify-between">
											<div className="relative">Merry Side of You</div>
											<div className="relative block md:hidden">2024</div>
										</div>
										<div className="self-stretch relative text-base leading-[140%]">Workaholic Tonia returns home for Christmas to broker a merger, but a snowstorm strands her with childhood crush Viyon. Between family chaos and carols, she learns the best deals in life can’t be negotiated.</div>
									</div>
									<div className="relative text-5xl hidden md:block">2024</div>
								</div>
							</div>
							<div className="self-stretch grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-8">
								{/* <div >
									<img className="object-cover w-full h-full" alt="" src="/images/films/cupcake_for_val.webp" />
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-full justify-center items-center bg-black/40 size-25.5">
										<FaPlay size={48} className="text-white" />
									</div>
								</div> */}
								<LazyYouTube videoId={'KGkWFuk9xUE'} title={'Cupcake for Val'} />
								{/* <iframe className="flex-1 relative max-w-full overflow-hidden aspect-video rounded-8xs" src="https://www.youtube.com/embed/KGkWFuk9xUE?si=_y9JoFmoGzjqbliV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
								<div className="flex-1 flex flex-col items-start justify-start gap-3">
									<div className="self-stretch flex flex-col items-start justify-start gap-5">
										<div className="self-stretch flex flex-col items-start justify-between">
											<div className="relative"></div>
											<div className="relative block md:hidden">2025</div>
										</div>
										<div className="self-stretch relative text-base leading-[140%]">Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion‑naira conspiracy that could cost the sisters their freedom—and their newfound bond.</div>
									</div>
									<div className="relative text-5xl hidden md:block">2025</div>
								</div>
							</div>
						</div>
					</div>
					<button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full flex justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={openContactForm}>
						<span className="leading-[19.6px] font-medium max-h-[19.6px]">Show more</span>
					</button>
				</div>
				<div className="md:w-full relative bg-seashell shrink-0 z-[3] -mx-6 px-6 py-4 md:py-0 text-gray-200" data-scroll-to="frameContainer2">
					<div className="w-full flex flex-col items-center justify-start gap-12">
						<div className="self-stretch flex flex-col items-center justify-start">
							<i className="self-stretch relative">Interview <span className="font-dm-sans">&</span> Media</i>
						</div>
						<div className="grid md:grid-cols-3 items-start justify-start gap-8 text-left text-sm font-helvetica">
							<a href="https://www.thisdaylive.com/index.php/2025/04/05/bambam-i-see-every-script-as-opportunity-to-step-into-someone-elses-shoes-bring-their-story-to-life/" target="_blank" className="flex flex-col items-start justify-start gap-5">
								<img className="self-stretch relative rounded-8xs max-w-full overflow-hidden h-[281px] shrink-0 object-cover" alt="" src="/images/interviews/this_day.png" />
								<div className="self-stretch flex flex-col items-start justify-start">
									<div className="md:w-[404px] flex flex-col items-start justify-start gap-3">
										<div className="self-stretch relative text-sm">{`ThisDay Newspaper `}</div>
										<div className="self-stretch relative text-xl md:text-2xl">BamBam: I See Every Script as Opportunity to Step into Someone Else’s Shoes, Bring Their Story to Life</div>
									</div>
								</div>
							</a>
							<a href="https://edition.cnn.com/2019/04/09/africa/fela-kalakuta-queens-south-africa-intl/index.html" target="_blank" className="flex flex-col items-start justify-start gap-5">
								<img className="self-stretch relative rounded-8xs max-w-full overflow-hidden h-[281px] shrink-0 object-cover object-center" alt="" src="/images/interviews/cnn.png" />
								<div className="self-stretch flex flex-col items-start justify-start">
									<div className="md:w-[404px] flex flex-col items-start justify-start gap-3">
										<div className="self-stretch relative text-sm">CNN</div>
										<div className="self-stretch relative text-xl md:text-2xl">
											<p className="m-0">Fela & the Kalakuta Queens takes South Africa by storm</p>
										</div>
									</div>
								</div>
							</a>
							<a href="https://www.youtube.com/live/_d1Py97mIHA" target="_blank" className="flex flex-col items-start justify-start gap-5">
								<img className="self-stretch relative rounded-8xs max-w-full overflow-hidden h-[281px] shrink-0 object-cover" alt="" src="/images/interviews/show_off.jpg" />
								<div className="self-stretch flex flex-col items-start justify-start">
									<div className="md:w-[404px] flex flex-col items-start justify-start gap-3">
										<div className="self-stretch relative text-sm">BTS Chat</div>
										<div className="self-stretch relative text-xl md:text-2xl inline-block h-24 shrink-0">God Just Decided To Show Me Off” — Bambam on The Word success</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="w-full md:px-12 md:flex flex-col items-center justify-center py-[50px] px-0 box-border gap-12 z-[4]">
					<div className="self-stretch flex flex-col items-start justify-start">
						<i className="self-stretch relative">Life</i>
					</div>
					<div className="self-stretch flex flex-col items-end justify-start gap-[60px] text-left text-lg text-gray-200 font-helvetica">
						<div className="self-stretch flex flex-col items-start justify-start gap-5">
							<div className="self-stretch flex flex-col items-start justify-start gap-4 border-b">
								<div className="self-stretch relative tracking-[0.13em]">On‑Set Diaries</div>
								{/* <img className="w-[1281px] relative max-h-full" alt="" src="/images/set/1.webp" /> */}
							</div>
							<div className="self-stretch flex-col items-center justify-start gap-[42px] hidden md:flex">
								<div className="self-stretch grid grid-cols-3 gap-8">
									<img className="w-full relative rounded-8xs md:h-[633px] overflow-hidden shrink-0 object-cover" alt="" src="/images/set/1.webp" />
									<img className="self-stretch col-span-2 w-full relative rounded-8xs md:h-[633px] overflow-hidden shrink-0 object-cover" alt="" src="/images/set/2.jpg" />
								</div>
								<div className="self-stretch grid grid-cols-3 gap-8">
									<img className="md:w-full relative rounded-8xs md:h-[418px] overflow-hidden shrink-0 object-cover" alt="" src="/images/set/3.webp" />
									<img className="md:w-full relative rounded-8xs md:h-[418px] overflow-hidden shrink-0 object-cover" alt="" src="/images/set/4.webp" />
									<img className="md:w-full relative rounded-8xs md:h-[418px] overflow-hidden shrink-0 object-cover" alt="" src="/images/set/5.webp" />

								</div>
							</div>
							<Slider {...settings}
								className="w-full aspect-square rounded-lg md:!hidden"
							>
								<img className="object-cover aspect-square rounded" alt="" src="/images/set/1.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/set/2.jpg" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/set/3.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/set/4.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/set/5.webp" />
							</Slider>
						</div>
						<div className="self-stretch flex flex-col items-start justify-start gap-5">
							<div className="self-stretch flex flex-col items-start justify-start gap-4 border-b">
								<div className="self-stretch relative tracking-[0.13em]">Family Moments</div>
								{/* <img className="w-[1281px] relative max-h-full" alt="" src="Vector.svg" /> */}
							</div>
							<div className="self-stretch hidden md:grid grid-cols-1 md:grid-cols-2 items-end justify-start gap-8">
								<img className="relative rounded-8xs h-[633px] object-cover w-full" alt="" src="/images/family/1.webp" />
								<img className="relative rounded-8xs h-[633px] object-cover w-full" alt="" src="/images/family/2.webp" />
							</div>
							<Slider {...settings}
								className="w-full aspect-square rounded-lg md:!hidden"
							>
								<img className="object-cover aspect-square rounded" alt="" src="/images/family/1.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/family/2.webp" />
							</Slider>
						</div>
						<div className="self-stretch flex flex-col items-center justify-start gap-5">
							<div className="self-stretch flex flex-col items-start justify-start gap-4 border-b">
								<div className="self-stretch relative tracking-[0.13em]">Travel Moment</div>
								{/* <img className="w-[1281px] relative max-h-full" alt="" src="Vector.svg" /> */}
							</div>
							<div className="self-stretch hidden md:flex flex-col items-start justify-start gap-8">
								<div className="self-stretch grid md:grid-cols-3 grid-cols-1 items-center justify-start gap-8">
									<img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="" src="/images/travel/1.webp" />
									<img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="" src="/images/travel/2.webp" />
									<img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="" src="/images/travel/3.webp" />
								</div>
								<div className="self-stretch grid md:grid-cols-3 grid-cols-1 items-center justify-start gap-8">
									<img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="" src="/images/travel/4.webp" />
									<img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="" src="/images/travel/5.webp" />
									<img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="" src="/images/travel/6.webp" />
								</div>
							</div>
							<Slider {...settings}
								className="w-full aspect-square rounded-lg md:!hidden"
							>
								<img className="object-cover aspect-square rounded" alt="" src="/images/travel/1.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/travel/2.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/travel/3.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/travel/4.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/travel/5.webp" />
								<img className="object-cover aspect-square rounded" alt="" src="/images/travel/6.webp" />
							</Slider>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col items-center justify-center py-[50px] md:px-12 box-border gap-12 z-[5] text-left" data-scroll-to="frameContainer1">
					<div className="self-stretch flex flex-col items-start justify-center">
						<i className="self-stretch relative text-center">News <span className="font-dm-sans">&</span> Blog</i>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-8 text-base font-helvetica">
						<div className="flex items-start md:h-[760px] justify-start md:border md:border-gray-200 p-6 rounded-[12px]">
							<div className="flex flex-col items-start justify-start gap-6">
								<img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="" src="/images/news/amvca.webp" />
								<div className="flex flex-col items-start justify-between h-full gap-5">
									<div className="self-stretch relative leading-[140%] text-darkolivegreen">Pulse Nigeria News</div>
									<i className="self-stretch relative text-2xl font-worcester-serial">‘What a Night It Was’: Bambam’s AMVCA Cultural‑Day Debut</i>
									<div className="self-stretch relative leading-[140%]">
										<p className="m-0">Big Brother Naija alum‑turned‑actress Bambam hosted the AMVCA 2025 Cultural Day for seasoning brand Onga, dazzling in an aso‑oke corset that landed her a Best Dressed nomination. In a backstage chat she credited the viral success of Love in Every Word for her renewed confidence and teased an upcoming Netflix docu‑series on African heritage costumes. (pulse.ng)</p>
									</div>
									<div className="self-stretch relative leading-[140%]">{`10 May 2025 `}</div>
								</div>
							</div>
						</div>
						<div className="flex items-start md:h-[760px] justify-start md:border md:border-gray-200 p-6 rounded-[12px]">
							<div className="flex flex-col items-start justify-start gap-6">
								<img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="" src="/images/films/love_in_every_word.webp" />
								<div className="flex flex-col items-start justify-between h-full gap-5">
									<div className="self-stretch relative leading-[140%] text-darkolivegreen">BellaNaija News</div>
									<i className="self-stretch relative text-2xl font-worcester-serial">“I Feel Honoured”: Bambam on the Meteoric Rise of Love in Every Word</i>
									<div className="self-stretch relative leading-[140%]">
										<p className="m-0">In BellaNaija’s flagship interview series, Bambam breaks down her journey from DM‑ing director Omoni Oboli to headlining the year’s biggest YouTube blockbuster. She reveals how a two‑year voice‑over stint with the BBC sharpened her dialogue delivery and why she prays on set before every take.</p>
									</div>
									<div className="self-stretch relative leading-[140%]">{`29 Mar 2025 `}</div>
								</div>
							</div>
						</div>
						<div className="flex items-start md:h-[760px] justify-start md:border md:border-gray-200 p-6 rounded-[12px]">
							<div className="flex flex-col items-start justify-start gap-6">
								<img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="" src="/images/news/chemistry.webp" />
								<div className="flex flex-col items-start justify-between h-full gap-5">
									<div className="self-stretch relative leading-[140%] text-darkolivegreen">Pulse Nigeria News</div>
									<i className="self-stretch relative text-2xl font-worcester-serial">“My Chemistry with Uzor Arukwe Was Real” — Bambam Reflects on Love in Every Word</i>
									<div className="self-stretch relative leading-[140%]">
										<p className="m-0">My Chemistry with Uzor Arukwe Was Real” — Bambam Reflects on Love in Every WordSpeaking to Punch, Bambam says the film’s beloved Achalugo‑Obiora pairing worked because she and co‑star Uzor Arukwe rehearsed scenes for weeks to master the silent beats between lines. She also confirms a sequel is in early scripting.</p>
									</div>
									<div className="self-stretch relative leading-[140%]">{`April 24 2025 `}</div>
								</div>
							</div>
						</div>
						<div className="flex items-start md:h-[760px] justify-start md:border md:border-gray-200 p-6 rounded-[12px]">
							<div className="flex flex-col items-start justify-start gap-6">
								<img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="" src="/images/films/twin_deception.webp" />
								<div className="flex flex-col items-start justify-between h-full gap-5">
									<div className="self-stretch relative leading-[140%] text-darkolivegreen">Blog</div>
									<i className="self-stretch relative text-2xl font-worcester-serial">Twin Deception hits 2 million views in six days</i>
									<div className="self-stretch relative leading-[140%]">
										<p className="m-0">Omoni Oboli TV confirmed that Twin Deception crossed the 2-million-view mark today, making it Bambam’s fastest‑rising feature to date. The thriller shot in Lagos and Badagry reunites Bambam with director Mo’ Fakorede. Next up: a limited cinema run in Ghana before the film heads to Prime Video in July. Bambam thanked fans on Instagram Live, adding that part of the streaming revenue will fund three new maternal‑health outreaches through Bammy Bestowed Foundation. Cast and crew celebrations are slated for the AMVCA after‑party this weekend.</p>
									</div>
									<div className="self-stretch relative leading-[140%]">{`April 24 2025 `}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full relative bg-seashell md:h-[826px] md:py-12.5 md:px-19.5 text-[40px] text-gray-200">
					<div className="w-full flex flex-col items-center justify-start gap-12">
						<div className="self-stretch flex flex-col items-center justify-start">
							<div className="self-stretch flex flex-col items-start justify-start">
								<i className="self-stretch relative">Brands</i>
							</div>
						</div>
						<div className="self-stretch grid md:grid-cols-3 grid-cols-1 items-start justify-start gap-[60px] text-left text-2xl font-helvetica">
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/maggi.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">Maggi Nigeria</b>
										<div className="self-stretch relative text-base text-gray-500">{`#CookWithHeart ambassador — recipe reels & market activations`}</div>
									</div>
									<div className="relative text-xl">2023- Present
									</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/kuda.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">Kuda Bank</b>
										<div className="self-stretch relative text-base text-gray-500">
											<p className="m-0">Fin‑Wellness talk‑series host, in‑app content</p>
										</div>
									</div>
									<div className="self-stretch relative text-xl">2025</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/mtv.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">MTV Base Africa</b>
										<div className="self-stretch relative text-base text-gray-500">Civic‑engagement PSA with 2Face & Tiwa Savage (PVC drive)</div>
									</div>
									<div className="self-stretch relative text-xl">2025</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/dettol.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">Dettol Nigeria</b>
										<div className="self-stretch relative text-base text-gray-500">“Clean Hands, Bright Futures” hygiene campaign (TV + digital)</div>
									</div>
									<div className="self-stretch relative text-xl">2024</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/pampers.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">Pampers Nigeria</b>
										<div className="self-stretch relative text-base text-gray-500">Motherhood influencer series (UGC + TVC cameo)</div>
									</div>
									<div className="relative text-xl">2023
									</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/lunettes.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">House of Lunettes</b>
										<div className="self-stretch relative text-base text-gray-500">
											<p className="m-0">Signature eyewear capsule — sold‑out in 72 hrs</p>
										</div>
									</div>
									<div className="self-stretch relative text-xl">2023</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/indomie.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">Indomie</b>
										<div className="self-stretch relative text-base text-gray-500">“My Quick Comfort” digital skit campaign</div>
									</div>
									<div className="self-stretch relative text-xl">2021</div>
								</div>
							</div>
							<div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
								<img className="w-[111px] relative max-h-full object-cover" alt="" src="/images/brands/tecno.png" />
								<div className="flex-1 flex flex-col items-start justify-start gap-5">
									<div className="self-stretch flex flex-col items-start justify-start gap-3">
										<b className="self-stretch relative">Tecno Mobile</b>
										<div className="self-stretch relative text-base text-gray-500">Camon launch event co‑host & short‑film</div>
									</div>
									<div className="self-stretch relative text-xl">2020</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:w-full flex flex-col -mx-6 px-6 pt-15 md:pt-0 md:flex-row relative bg-silver md:h-[650px] justify-between shrink-0 z-[7] text-left md:text-[74px]">
					<div className="flex flex-col items-center justify-start self-center w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-10 md:pl-8">
							<div className="self-stretch flex flex-col items-start justify-start gap-7">
								<i className="md:w-[640px] relative md:leading-[81.4px] inline-block font-bold text-center md:text-left">Book an Appointment</i>
								<div className="md:w-[360px] relative text-lg leading-[27px] font-helvetica text-white inline-block self-start text-center md:text-left">From feature films to keynote talks, let’s create something unforgettable.”
								</div>
							</div>
							<button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full flex justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={openContactForm}>
								<span className="leading-[19.6px] font-medium max-h-[19.6px]">Book Now</span>
							</button>
						</div>
					</div>
					<div className="md:w-2/3 relative aspect-square flex md:justify-end">
						<div className="inset-0 absolute blur-[1000px] rounded-981xl w-[602px] h-[839px]" />
						<img className="md:h-full w-full md:aspect-video object-cont" alt="" src="/images/book.png" />
						{/* <div className="h-[calc(100%_-_645px)] top-[131px] bottom-[514px] left-[835px] w-[270px] hidden max-w-[300px]" /> */}
					</div>
				</div>
				<div className="w-full relative bg-seashell md:px-12 md:py-16 overflow-hidden mt-10 md:mt-0 shrink-0 z-[8] text-left">
					<div className="absolute top-[117px] left-[809px] [filter:blur(1000px)] rounded-981xl w-[602px] h-[839px]" />
					<div className="absolute h-[calc(100%_-_645px)] top-[307px] bottom-[338px] left-[835px] w-[270px] hidden max-w-[300px]" />
					<div className="absolute top-[134.8px] left-[797px] w-[581px] h-[330.6px]" />
					<div className="flex flex-col md:flex-row items-center justify-start gap-11">
						<div className="rounded-[22.86px] w-full md:w-auto bg-gray-600 h-[624.7px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[10.2px] box-border">
							<img className="self-stretch w-full md:w-[671.7px] relative rounded-[10.16px] max-h-full overflow-hidden shrink-0 object-cover" alt="" src="/images/subscribe.webp" />
						</div>
						<div className="w-full md:w-[544px] flex flex-col items-start justify-start gap-10">
							<div className="self-stretch flex flex-col items-start justify-start">
								<div className="self-stretch flex flex-col items-start justify-start gap-7">
									<div className="self-stretch flex flex-col items-start justify-start">
										<i className="relative font-bold">Subscribe to our Newsletter</i>
									</div>
									<div className="self-stretch relative text-lg leading-[27px] font-helvetica">Get exclusive updates on projects, campaigns, and personal insights—straight to your inbox.</div>
								</div>
							</div>
							<div className="self-stretch flex flex-col items-start justify-start gap-5 cursor-pointer text-center text-lg text-gray-700 font-dm-sans" onClick={openContactForm}>
								<div className="self-stretch rounded-3xs border-gray-800 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start p-4 relative">
									<div className="bg-gray-900 flex flex-col items-center justify-center z-[0]">
										<div className="self-stretch h-[19.6px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-[1.6px] box-border relative">
											<div className="relative leading-[19.6px] font-medium whitespace-pre-wrap inline-block max-h-[19.6px] z-[0]">Enter your  email address</div>
											<div className="w-[calc(100%_+_7.6px)] absolute !!m-[0 important] top-[41.21px] right-[-3.99px] left-[-3.61px] h-[22.4px] z-[1]" />
										</div>
									</div>
									<div className="w-full absolute !!m-[0 important] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs z-[1]" />
								</div>
								<button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full flex justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={openContactForm}>
									<span className="leading-[19.6px] font-medium max-h-[19.6px]">Subscribe</span>
								</button>
								{/* <div className="self-stretch rounded-3xs bg-darkolivegreen overflow-hidden flex flex-row items-center justify-center py-4 px-8 relative text-white">
									<div className="bg-gray-900 flex flex-col items-center justify-center z-[0]">
										<div className="self-stretch h-[19.6px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-[1.6px] box-border relative">
											<div className="relative leading-[19.6px] font-medium inline-block max-h-[19.6px] z-[0]">Subscribe</div>
											<div className="w-[calc(100%_+_7.6px)] absolute !!m-[0 important] top-[41.21px] right-[-3.99px] left-[-3.61px] h-[22.4px] z-[1]" />
										</div>
									</div>
									<div className="w-full absolute !!m-[0 important] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs z-[1]" />
								</div> */}
							</div>
						</div>
					</div>
				</div>
				{/* <div className="w-[calc(100%_-_753px)] absolute !!m-[0 important] top-[997.78px] right-[604px] left-[149px] h-[31px] z-[9]" /> */}
			</div>
			<footer className="border-[#38323280] relative md:border-t box-border w-full md:h-[164px] pr-6 pl-12">
				<div className="h-full w-full flex flex-col mt-10 md:mt-0 gap-10 md:gap-0 md:flex-row justify-between items-center text-darkolivegreen">
					{/* <div className="h-full bg-seashell border-darkslategray-200 border-solid border-[1px] box-border w-full" /> */}
					<div className="text-[31.55px] leading-[42.59px] font-ahganirya text-darkolivegreen">
						<p className="m-0">Bammy</p>
						<p className="m-0 text-darkslategray-100 whitespace-pre-wrap">     Bestowed</p>
					</div>
					<div className="flex flex-col md:flex-row gap-6.25 md:gap-4 items-center">
						<div className="leading-[22.4px] whitespace-pre-wrap">© 2025. Bam Ent. All Rights Reserved.</div>
						<div className="flex flex-row items-center justify-start gap-5">
							<div className="relative leading-[22.4px] cursor-pointer" onClick={openPrivacyPolicy}>Privacy Policy</div>
							<div className="relative leading-[22.4px]">|</div>
							<div className="relative leading-[22.4px] cursor-pointer" onClick={openTermsAndConditions}>Terms of Service</div>
						</div>
					</div>

					<div className="flex flex-row items-center justify-start gap-4">
						<a href="https://www.instagram.com/bammybestowed?igsh=YzljYTk1ODg3Zg==" target="_blank" className=""><FaInstagram size={32} /></a>
						<a href="https://www.facebook.com/bammybestowed" target="_blank" className=""><FaFacebookF size={32} /></a>
						<a href="https://x.com/bambam" target="_blank" className=""><FaXTwitter size={32} /></a>
						<a href="https://youtube.com/@bammybestowed?si=_cf5qTYXrTdbLHB5" target="_blank" className=""><FaYoutube size={32} /></a>
					</div>
				</div>
			</footer>
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
		)}</>);
};

export default App;
