const Interviews = () => {
    return (
        <section className="w-full relative bg-seashell shrink-0 z-3 -mx-6 px-6 py-12 md:py-12.5 text-gray-200" data-scroll-to="frameContainer2">
            <div className="w-full flex flex-col items-center justify-start gap-12">
                <div className="self-stretch flex flex-col items-center justify-start">
                    <i className="self-stretch relative">Interview <span className="font-dm-sans">&</span> Media</i>
                </div>
                <div className="grid md:grid-cols-3 items-start justify-start gap-8 text-left text-sm font-helvetica">
                    <a href="https://www.thisdaylive.com/index.php/2025/04/05/bambam-i-see-every-script-as-opportunity-to-step-into-someone-elses-shoes-bring-their-story-to-life/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start gap-5">
                        <img className="self-stretch relative rounded-8xs max-w-full overflow-hidden h-[281px] shrink-0 object-cover" alt="ThisDay Newspaper" src="/images/interviews/this_day.png" />
                        <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="md:w-[404px] flex flex-col items-start justify-start gap-3">
                                <div className="self-stretch relative text-sm">{`ThisDay Newspaper `}</div>
                                <div className="self-stretch relative text-xl md:text-2xl">BamBam: I See Every Script as Opportunity to Step into Someone Else’s Shoes, Bring Their Story to Life</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://edition.cnn.com/2019/04/09/africa/fela-kalakuta-queens-south-africa-intl/index.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start gap-5">
                        <img className="self-stretch relative rounded-8xs max-w-full overflow-hidden h-[281px] shrink-0 object-cover object-center" alt="CNN" src="/images/interviews/cnn.png" />
                        <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="md:w-[404px] flex flex-col items-start justify-start gap-3">
                                <div className="self-stretch relative text-sm">CNN</div>
                                <div className="self-stretch relative text-xl md:text-2xl">
                                    <p className="m-0">Fela & the Kalakuta Queens takes South Africa by storm</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/live/_d1Py97mIHA" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-start gap-5">
                        <img className="self-stretch relative rounded-8xs max-w-full overflow-hidden h-[281px] shrink-0 object-cover" alt="BTS Chat" src="/images/interviews/show_off.jpg" />
                        <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="md:w-[404px] flex flex-col items-start justify-start gap-3">
                                <div className="self-stretch relative text-sm">BTS Chat</div>
                                <div className="self-stretch relative text-xl md:text-2xl inline-block h-24 shrink-0">God Just Decided To Show Me Off” — Bambam on The Word success</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Interviews;