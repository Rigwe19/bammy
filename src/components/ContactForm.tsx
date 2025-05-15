import { type FunctionComponent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";
import { LuX } from 'react-icons/lu';


export type ContactFormType = {
	className?: string;
	onClose?: VoidFunction
}
	const serviceOptions = [
		"Instagram Post / Carousel",
		"Instagram Video (≤ 60 s, Bambam‑created)",
		"IG Story (up to 4 frames)",
		"IG Live / X Space",
		"X Post",
		"YouTube Video Feature",
		"Skit Feature",
		"Brand Endorsement (annual)",
		"TV Commercial (Nigeria)",
		"Voice‑Over / Jingle (<30 min)",
		"Modelling",
	];
const ContactForm: FunctionComponent<ContactFormType> = ({ className = "", onClose }) => {
	useEffect(() => {
        document.body.style.overflow = 'hidden';

        return (()=> {
            document.body.style.overflow = "auto"
        })
    }, []);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedService, setSelectedService] = useState<string | null>(null);
	return (
		<div className={`w-full relative bg-silver overflow-y-auto flex flex-col items-center justify-center py-5 px-8 box-border gap-3 max-w-full max-h-full overflow-auto text-center text-xl text-gray-200 font-worcester-serial ${className}`}>
			<div className="self-stretch flex flex-col items-start justify-center gap-[16.4px]">
				<div className="self-stretch flex flex-col items-start justify-start gap-[10.9px]">
					<div className="self-stretch flex flex-col items-center justify-start">
						<i className="self-stretch relative font-bold">Contact Form</i>
					</div>
					<LuX className="absolute right-2 top-2" onClick={onClose} />
					<div className="self-stretch flex flex-col items-center justify-start text-left text-sm font-helvetica">
						<div className="self-stretch relative">From feature films to keynote talks, let’s create something unforgettable.</div>
					</div>
				</div>
				<div className="self-stretch rounded-[16.4px] bg-seashell overflow-hidden flex flex-col items-start justify-center py-[13.7px] px-[23.9px] gap-4 text-left text-sm font-nunito">
					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[10.94px] font-semibold">Name</div>
						</div>
						<input placeholder="Full name" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-200 focus-visible:outline-none" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px] text-darkslategray-100 font-helvetica">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[10.94px]">Email</div>
						</div>
						<input placeholder="email@gmail.com" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-200 focus-visible:outline-none" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[10.94px] font-semibold">Organization</div>
						</div>
						<input placeholder="Enter Services" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-200 focus-visible:outline-none" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[10.94px] font-semibold">Service Needed</div>
						</div>

						<div className="w-full relative">
							<button
								type="button"
								className="w-full border-gray-700 border-solid border-b-[0.7px] flex flex-row items-center justify-between py-[8.2px] px-[10.9px] text-[10.94px] text-gray-200 bg-transparent focus:outline-none"
								onClick={() => setIsOpen((v) => !v)}
							>
								<span className="truncate">
									{selectedService ?? "Select Service"}
								</span>
								<FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
							</button>
							<AnimatePresence>
								{isOpen && (
									<motion.ul
										initial={{ opacity: 0, y: -8 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -8 }}
										transition={{ duration: 0.18 }}
										className="absolute left-0 right-0 z-10 bg-seashell border border-gray-700 rounded-b-[8px] shadow-lg mt-1 max-h-60 overflow-y-auto"
									>
										{serviceOptions.map((option) => (
											<motion.li
												key={option}
												className={`px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-white text-gray-300 text-[10.94px] ${selectedService === option ? "bg-gray-100 font-semibold text-white" : ""}`}
												onClick={() => {
													setSelectedService(option);
													setIsOpen(false);
												}}
											>
												{option}
											</motion.li>
										))}
									</motion.ul>
								)}
							</AnimatePresence>
						</div>
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[10.94px] font-semibold">{`Budget `}</div>
						</div>
						<input placeholder="Enter Services" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-200 focus-visible:outline-none" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px] text-darkslategray-100 font-helvetica">
						<div className="self-stretch flex flex-row items-start justify-start">
							<div className="flex-1 relative leading-[10.94px]">Message</div>
						</div>
						<textarea className="self-stretch rounded-[8.2px] border-gray-700 border-solid border-[0.7px] box-border h-[99.8px] flex flex-col items-start justify-start focus-visible:outline-none">
						</textarea>
					</div>
					<div className="self-stretch rounded-[6.83px] bg-darkolivegreen overflow-hidden flex flex-row items-center justify-center py-4 px-5 relative text-center text-[12.3px] text-white font-dm-sans">
						<div className="bg-gray-900 flex flex-col items-center justify-center z-[0]">
							<div className="self-stretch h-[13.4px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-[1.1px] box-border relative">
								<div className="relative leading-[13.4px] font-medium inline-block max-h-[13.4px] z-[0]">Send Message</div>
								<div className="w-[calc(100%_+_5.3px)] absolute !!m-[0 important] top-[28.17px] right-[-2.84px] left-[-2.46px] h-[15.3px] z-[1]" />
							</div>
						</div>
						<div className="w-full absolute !!m-[0 important] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6.83px] z-[1]" />
					</div>
				</div>
			</div>
			<div className="flex flex-row items-start justify-start gap-[21.9px] text-left text-sm font-nunito">
				<div className="flex flex-col md:flex-row items-center justify-center gap-[5.5px]">
					{/* <img className="w-[34.4px] rounded-[41.27px] h-[32.8px] overflow-hidden shrink-0" alt="" src="tabler:mail.svg" /> */}
					<FaEnvelope size={24} />
					<div className="relative leading-[16.4px]">bament@gmail.com</div>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-start gap-[5.5px]">
					{/* <img className="w-[32.8px] rounded-[29.73px] h-[32.8px] overflow-hidden shrink-0" alt="" src="ph:phone-fill.svg" /> */}
					<FaPhone size={24} />
					<div className="relative leading-[16.4px]">+234 817 347 7464</div>
				</div>
			</div>
		</div>);
};

export default ContactForm;
