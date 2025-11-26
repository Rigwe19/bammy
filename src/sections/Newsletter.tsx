interface NewsletterProps {
    openContactForm: () => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ openContactForm }) => {
    return (
        <section className="w-full relative bg-seashell px-6 md:px-12 py-16 overflow-hidden mt-10 md:mt-0 shrink-0 z-[8] text-left">
            <div className="flex flex-col md:flex-row items-center justify-start gap-11">
                <div className="rounded-[22.86px] w-full md:w-auto bg-gray-600 h-auto md:h-[624.7px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[10.2px] box-border">
                    <img className="self-stretch w-full md:w-[671.7px] relative rounded-[10.16px] max-h-full overflow-hidden shrink-0 object-cover" alt="Subscribe" src="/images/subscribe.webp" />
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
                            <div className="relative leading-[19.6px] font-medium whitespace-pre-wrap inline-block max-h-[19.6px] z-[0]">Enter your  email address</div>
                        </div>
                        <button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={openContactForm}>
                            <span className="leading-[19.6px] font-medium max-h-[19.6px]">Subscribe</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;