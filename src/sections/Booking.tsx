interface BookingProps {
    openContactForm: () => void;
}

const Booking: React.FC<BookingProps> = ({ openContactForm }) => {
    return (
        <section className="md:w-full flex flex-col -mx-6 px-6 pt-15 md:pt-0 md:flex-row relative bg-silver md:h-[650px] text-white justify-between shrink-0 z-[7] text-left md:text-[74px]">
            <div className="flex flex-col items-center justify-start self-center w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-10 md:pl-8">
                    <div className="self-stretch flex flex-col items-start justify-start gap-7">
                        <i className="md:w-[640px] relative md:leading-[81.4px] inline-block font-bold text-center md:text-left">Book an Appointment</i>
                        <div className="md:w-[360px] relative text-lg leading-[27px] font-helvetica text-white inline-block self-start text-center md:text-left">From feature films to keynote talks, let’s create something unforgettable.”</div>
                    </div>
                    <button className="flex flex-row bg-white items-start rounded-3xs py-4 px-8 md:w-auto w-full justify-center cursor-pointer text-lg text-darkolivegreen font-dm-sans" onClick={openContactForm}>
                        <span className="leading-[19.6px] font-medium max-h-[19.6px]">Book Now</span>
                    </button>
                </div>
            </div>
            <div className="md:w-2/3 relative aspect-square flex md:justify-end">
                <img className="md:h-full w-full md:aspect-video object-cover" alt="Book an appointment" src="/images/book.webp" />
            </div>
        </section>
    );
};

export default Booking;