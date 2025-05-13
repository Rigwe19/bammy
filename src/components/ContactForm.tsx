import { type FunctionComponent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';


export type ContactFormType = {
  	className?: string;
	onClose?: VoidFunction
}



const ContactForm:FunctionComponent<ContactFormType> = ({ className="" }) => {
  	return (
    		<div className={`w-full relative bg-silver overflow-y-auto flex flex-col items-center justify-center py-5 px-8 box-border gap-3 max-w-full max-h-full overflow-auto text-center text-xl text-gray-200 font-worcester-serial ${className}`}>
      			<div className="self-stretch flex flex-col items-start justify-center gap-[16.4px]">
        				<div className="self-stretch flex flex-col items-start justify-start gap-[10.9px]">
          					<div className="self-stretch flex flex-col items-center justify-start">
            						<i className="self-stretch relative font-bold">Contact Form</i>
          					</div>
          					<div className="self-stretch flex flex-col items-center justify-start text-left text-sm font-helvetica">
            						<div className="self-stretch relative">From feature films to keynote talks, let’s create something unforgettable.</div>
          					</div>
        				</div>
        				<div className="self-stretch rounded-[16.4px] bg-seashell overflow-hidden flex flex-col items-start justify-center py-[13.7px] px-[23.9px] gap-4 text-left text-sm font-nunito">
          					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
            						<div className="self-stretch flex flex-row items-start justify-start">
              							<div className="flex-1 relative leading-[10.94px] font-semibold">Name</div>
            						</div>
            						<input placeholder="Full name" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-700 focus-visible:outline-none" />
              							{/* <div className="self-stretch relative bg-white h-0" />
              							<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                								<div className="flex-1 relative leading-[16.4px]">Full name</div>
              							</div>
            						</input> */}
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px] text-darkslategray-100 font-helvetica">
            						<div className="self-stretch flex flex-row items-start justify-start">
              							<div className="flex-1 relative leading-[10.94px]">Email</div>
            						</div>
            						<input placeholder="email@gmail.com" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-700 focus-visible:outline-none" />
              							{/* <div className="self-stretch relative bg-white h-0" />
              							<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                								<div className="flex-1 relative leading-[16.4px]">email@gmail.com</div>
              							</div>
            						</input> */}
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
            						<div className="self-stretch flex flex-row items-start justify-start">
              							<div className="flex-1 relative leading-[10.94px] font-semibold">Organization</div>
            						</div>
            						<input placeholder="Enter Services" className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-700 focus-visible:outline-none" />
              							{/* <div className="self-stretch relative bg-white h-0" />
              							<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                								<div className="flex-1 relative leading-[16.4px]">Enter Services</div>
              							</div>
            						</div> */}
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
            						<div className="self-stretch flex flex-row items-start justify-start">
              							<div className="flex-1 relative leading-[10.94px] font-semibold">Service Needed</div>
            						</div>
            						<div className="w-[503px] relative h-10 overflow-hidden shrink-0 text-[10.94px] text-gray-700">
              							<div className="absolute top-[0px] left-[0px] border-gray-700 border-solid border-b-[0.7px] box-border w-[502.8px] h-[40.4px] flex flex-col items-start justify-start">
                								<div className="self-stretch relative bg-white h-0" />
                								<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px] gap-[8.2px]">
                  									<div className="flex-1 relative leading-[16.4px]">Select Service</div>
                  									<img className="w-6 relative max-h-full overflow-hidden shrink-0" alt="" src="gridicons:dropdown.svg" />
                								</div>
              							</div>
              							<div className="absolute top-[52.4px] left-[0px] w-[502.8px] flex flex-col items-start justify-start text-gray-200">
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">Instagram Post / Carousel</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="relative leading-[16.4px]">Instagram Video (≤ 60 s, Bambam‑created)</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">IG Story (up to 4 frames)</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">IG Live / X Space</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">X Post</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">YouTube Video Feature</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">Skit Feature</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">Brand Endorsement (annual)</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">TV Commercial (Nigeria)</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">{`Voice‑Over / Jingle (<30 min)`}</div>
                  									</div>
                								</div>
                								<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] box-border h-[33.4px] flex flex-col items-start justify-start">
                  									<div className="self-stretch relative bg-white h-0" />
                  									<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                    										<div className="flex-1 relative leading-[16.4px]">Modelling</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px]">
            						<div className="self-stretch flex flex-row items-start justify-start">
              							<div className="flex-1 relative leading-[10.94px] font-semibold">{`Budget `}</div>
            						</div>
            						<div className="self-stretch border-gray-700 border-solid border-b-[0.7px] flex flex-col items-start justify-start text-[10.94px] text-gray-700">
              							<div className="self-stretch relative bg-white h-0" />
              							<div className="self-stretch flex flex-row items-start justify-start py-[8.2px] px-[10.9px]">
                								<div className="flex-1 relative leading-[16.4px]">Enter Services</div>
              							</div>
            						</div>
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-start gap-[8.2px] text-darkslategray-100 font-helvetica">
            						<div className="self-stretch flex flex-row items-start justify-start">
              							<div className="flex-1 relative leading-[10.94px]">Message</div>
            						</div>
            						<div className="self-stretch rounded-[8.2px] border-gray-700 border-solid border-[0.7px] box-border h-[99.8px] flex flex-col items-start justify-start">
              							<div className="self-stretch relative bg-white h-0" />
              							<div className="self-stretch h-[129.2px]" />
            						</div>
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
