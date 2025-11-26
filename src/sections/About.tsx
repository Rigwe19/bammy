import { forwardRef } from 'react';

const About = forwardRef<HTMLElement>((_props, ref) => {
    return (
        <section ref={ref} className="md:w-[1281px] w-full flex flex-col items-end justify-start py-[50px] px-6 md:px-12 box-border gap-10 z-[1]" data-scroll-to="frameContainer4">
            <div className="self-stretch flex flex-col items-start justify-start gap-12">
                <i className="self-stretch relative">About Me</i>
                <div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-8 text-left md:text-[28px] text-2xl text-gray-200">
                    <div className="self-stretch w-full md:w-[545px] md:aspect-square rounded-lg bg-gray-600 overflow-hidden shrink-0 flex flex-row items-center justify-start p-2 box-border">
                        <img className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover hover:scale-150 duration-1000 transition-transform" alt="About Bammy Bestowed" src="/images/about.webp" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5">
                        <i className="self-stretch relative font-worcester-serial italic">Bamike<span className="font-dm-sans">-</span>Olawumi Adenibuyan known as Bammy Bestowed is a multifaceted personality, renowned as an actress, lifestyle influencer, host, humanitarian.</i>
                        <div className="self-stretch relative text-base leading-[140%] font-helvetica text-gray-300">
                            <p className="m-0 mb-5 whitespace-pre-wrap">Bammy Bestowed  is a talented actor, and a good storyteller, she is a professional voice over artist and is good at directing.</p>
                            <p className="m-0 mb-5">In collaboration with MTV Base Africa, Bamike collaborated with renowned stars like 2face Idibia and Tiwa Savage to drive awareness regarding civic responsibility, specifically emphasizing the importance of registering and securing Permanent Voter’s Cards ahead of elections in the country.</p>
                            <p className="m-0 mb-5">{`Her impressive on-screen portfolio includes acclaimed projects like the social drama "Collision Course" and "Lockdown." She has also showcased her talent in various stage plays, including ''Love is the Musical”, “Fela And The Kalakuta Queens”, ”Queen Moremi The Musical”, and “Ada The Country.”`}</p>
                            <p className="m-0">{`Beyond her roles on-screen and on-stage, Bamike is a devoted wife and mother to two beautiful children. Her passion extends to addressing and advocating for women and children's rights, as well as actively speaking on issues related to mental health and postpartum depression.`}</p>
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
                                    <b>English | Yoruba | Pidgin</b>
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
                                    <b>Maternal health | Girl‑child education | Mental‑wellness</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;