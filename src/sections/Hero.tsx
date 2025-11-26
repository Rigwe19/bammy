const Hero = () => {
    return (
        <section className="bg-silver w-full mt-[89px] relative text-center text-[43.35px] md:text-[141.16px] text-black font-ahganirya">
            <div className="relative w-full h-[395.05px] md:h-[750px] overflow-hidden" data-scroll-to="frameContainer">
                <div className="absolute top-4 md:top-[166px] left-1/2 -translate-x-1/2 md:leading-[212.1px] leading-[80.16px] inline-block w-full h-[449px] mix-blend-overlay">
                    <p className="m-0">Bammy</p>
                    <p className="m-0">Bestowed</p>
                </div>
                <div className="flex absolute w-full inset-0 justify-center px-4 items-end">
                    <img className="object-contain -mb-10 md:mb-0 w-full md:w-[932px] h-auto md:h-[857px] ml-2" alt="" src="/images/hero.png" />
                </div>
            </div>
        </section>
    );
};

export default Hero;