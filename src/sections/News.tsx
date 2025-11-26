const News = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center py-[50px] px-6 md:px-12 box-border gap-12 z-[5] text-left" data-scroll-to="frameContainer1">
            <div className="self-stretch flex flex-col items-start justify-center">
                <i className="self-stretch relative text-center">News <span className="font-dm-sans">&</span> Blog</i>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-8 text-base font-helvetica">
                <div className="flex items-start md:h-[760px] justify-start md:border md:border-gray-200 p-6 rounded-[12px]">
                    <div className="flex flex-col items-start justify-start gap-6">
                        <img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="AMVCA" src="/images/news/amvca.webp" />
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
                        <img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="Love in Every Word" src="/images/films/love_in_every_word.webp" />
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
                        <img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="Chemistry" src="/images/news/chemistry.webp" />
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
                        <img className="self-stretch relative rounded-[18px] w-full overflow-hidden h-[376px] object-cover" alt="Twin Deception" src="/images/films/twin_deception.webp" />
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
        </section>
    );
};

export default News;