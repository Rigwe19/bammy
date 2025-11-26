interface IntroProps {
    openContactForm: () => void;
}

const Intro: React.FC<IntroProps> = ({ openContactForm }) => {
    return (
        <section className="w-full bg-seashell flex flex-col items-center justify-start py-[50px] px-6 md:px-0 box-border gap-10 md:text-[84px] text-[44px] text-gray-200 font-worcester-serial text-center">
            <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch flex flex-col items-center justify-start gap-7">
                    <div className="self-stretch flex flex-col items-center justify-start">
                        <i className="relative md:leading-[81.4px] leading-15 inline-block font-medium md:w-2/3">Fearless on Screens, Limitless in Life</i>
                    </div>
                    <div className="relative text-lg leading-[27px] font-medium font-montserrat">{`Nollywood & Stage Actress | Storyteller | Voice that stays with you.`}</div>
                </div>
            </div>
            <button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={openContactForm}>
                <span className="leading-[19.6px] font-medium max-h-[19.6px]">Book Bambam</span>
            </button>
        </section>
    );
};

export default Intro;