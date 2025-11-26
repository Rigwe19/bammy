import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Life = () => {
    return (
        <section className="w-full md:px-12 flex flex-col items-center justify-center py-[50px] px-6 box-border gap-12 z-4">
            <div className="self-stretch flex flex-col items-start justify-start">
                <i className="self-stretch relative">Life</i>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[60px] text-left text-lg text-gray-200 font-helvetica">
                <div className="self-stretch flex flex-col items-start justify-start gap-5">
                    <div className="self-stretch flex flex-col items-start justify-start gap-4 border-b">
                        <div className="self-stretch relative tracking-[0.13em]">On‑Set Diaries</div>
                    </div>
                    <div className="self-stretch flex-col items-center justify-start gap-[42px] hidden md:flex">
                        <div className="self-stretch grid grid-cols-3 gap-8">
                            <img className="w-full relative rounded-8xs md:h-[633px] overflow-hidden shrink-0 object-cover" alt="On-set" src="/images/set/1.webp" />
                            <img className="self-stretch col-span-2 w-full relative rounded-8xs md:h-[633px] overflow-hidden shrink-0 object-cover" alt="On-set" src="/images/set/2.jpg" />
                        </div>
                        <div className="self-stretch grid grid-cols-3 gap-8">
                            <img className="md:w-full relative rounded-8xs md:h-[418px] overflow-hidden shrink-0 object-cover" alt="On-set" src="/images/set/3.webp" />
                            <img className="md:w-full relative rounded-8xs md:h-[418px] overflow-hidden shrink-0 object-cover" alt="On-set" src="/images/set/4.webp" />
                            <img className="md:w-full relative rounded-8xs md:h-[418px] overflow-hidden shrink-0 object-cover" alt="On-set" src="/images/set/5.webp" />
                        </div>
                    </div>
                    <Slider {...settings} className="w-full aspect-square rounded-lg sm:hidden!">
                        <img className="object-cover aspect-square rounded" alt="On-set" src="/images/set/1.webp" />
                        <img className="object-cover aspect-square rounded" alt="On-set" src="/images/set/2.jpg" />
                        <img className="object-cover aspect-square rounded" alt="On-set" src="/images/set/3.webp" />
                        <img className="object-cover aspect-square rounded" alt="On-set" src="/images/set/4.webp" />
                        <img className="object-cover aspect-square rounded" alt="On-set" src="/images/set/5.webp" />
                    </Slider>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-5">
                    <div className="self-stretch flex flex-col items-start justify-start gap-4 border-b">
                        <div className="self-stretch relative tracking-[0.13em]">Family Moments</div>
                    </div>
                    <div className="self-stretch hidden md:grid grid-cols-1 md:grid-cols-2 items-end justify-start gap-8">
                        <img className="relative rounded-8xs h-[633px] object-cover w-full" alt="Family moment" src="/images/family/1.webp" />
                        <img className="relative rounded-8xs h-[633px] object-cover w-full" alt="Family moment" src="/images/family/2.webp" />
                    </div>
                    <Slider {...settings} className="w-full aspect-square rounded-lg md:hidden!">
                        <img className="object-cover aspect-square rounded" alt="Family moment" src="/images/family/1.webp" />
                        <img className="object-cover aspect-square rounded" alt="Family moment" src="/images/family/2.webp" />
                    </Slider>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-5">
                    <div className="self-stretch flex flex-col items-start justify-start gap-4 border-b">
                        <div className="self-stretch relative tracking-[0.13em]">Travel Moment</div>
                    </div>
                    <div className="self-stretch hidden md:flex flex-col items-start justify-start gap-8">
                        <div className="self-stretch grid md:grid-cols-3 grid-cols-1 items-center justify-start gap-8">
                            <img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="Travel moment" src="/images/travel/1.webp" />
                            <img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="Travel moment" src="/images/travel/2.webp" />
                            <img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="Travel moment" src="/images/travel/3.webp" />
                        </div>
                        <div className="self-stretch grid md:grid-cols-3 grid-cols-1 items-center justify-start gap-8">
                            <img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="Travel moment" src="/images/travel/4.webp" />
                            <img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="Travel moment" src="/images/travel/5.webp" />
                            <img className="relative rounded-8xs h-[418px] w-full overflow-hidden shrink-0 object-cover" alt="Travel moment" src="/images/travel/6.webp" />
                        </div>
                    </div>
                    <Slider {...settings} className="w-full aspect-square rounded-lg md:hidden!">
                        <img className="object-cover aspect-square rounded" alt="Travel moment" src="/images/travel/1.webp" />
                        <img className="object-cover aspect-square rounded" alt="Travel moment" src="/images/travel/2.webp" />
                        <img className="object-cover aspect-square rounded" alt="Travel moment" src="/images/travel/3.webp" />
                        <img className="object-cover aspect-square rounded" alt="Travel moment" src="/images/travel/4.webp" />
                        <img className="object-cover aspect-square rounded" alt="Travel moment" src="/images/travel/5.webp" />
                        <img className="object-cover aspect-square rounded" alt="Travel moment" src="/images/travel/6.webp" />
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Life;