const Brands = () => {
    return (
        <section className="w-full relative bg-seashell md:h-auto py-12 px-6 md:py-12.5 md:px-19.5 text-[40px] text-gray-200" data-scroll-to="brands">
            <div className="w-full flex flex-col items-center justify-start gap-12">
                <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <i className="self-stretch relative">Brands</i>
                    </div>
                </div>
                <div className="self-stretch grid md:grid-cols-3 grid-cols-1 items-start justify-start gap-[60px] text-left text-2xl font-helvetica">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="Maggi" src="/images/brands/maggi.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">Maggi Nigeria</b>
                                <div className="self-stretch relative text-base text-gray-500">{`#CookWithHeart ambassador — recipe reels & market activations`}</div>
                            </div>
                            <div className="relative text-xl">2023- Present</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="Kuda Bank" src="/images/brands/kuda.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">Kuda Bank</b>
                                <div className="self-stretch relative text-base text-gray-500">
                                    <p className="m-0">Fin‑Wellness talk‑series host, in‑app content</p>
                                </div>
                            </div>
                            <div className="self-stretch relative text-xl">2025</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="MTV Base Africa" src="/images/brands/mtv.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">MTV Base Africa</b>
                                <div className="self-stretch relative text-base text-gray-500">Civic‑engagement PSA with 2Face & Tiwa Savage (PVC drive)</div>
                            </div>
                            <div className="self-stretch relative text-xl">2025</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="Dettol" src="/images/brands/dettol.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">Dettol Nigeria</b>
                                <div className="self-stretch relative text-base text-gray-500">“Clean Hands, Bright Futures” hygiene campaign (TV + digital)</div>
                            </div>
                            <div className="self-stretch relative text-xl">2024</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="Pampers" src="/images/brands/pampers.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">Pampers Nigeria</b>
                                <div className="self-stretch relative text-base text-gray-500">Motherhood influencer series (UGC + TVC cameo)</div>
                            </div>
                            <div className="relative text-xl">2023</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="House of Lunettes" src="/images/brands/lunettes.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">House of Lunettes</b>
                                <div className="self-stretch relative text-base text-gray-500">
                                    <p className="m-0">Signature eyewear capsule — sold‑out in 72 hrs</p>
                                </div>
                            </div>
                            <div className="self-stretch relative text-xl">2023</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="Indomie" src="/images/brands/indomie.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">Indomie</b>
                                <div className="self-stretch relative text-base text-gray-500">“My Quick Comfort” digital skit campaign</div>
                            </div>
                            <div className="self-stretch relative text-xl">2021</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[25px]">
                        <img className="w-[111px] relative max-h-full object-cover" alt="Tecno Mobile" src="/images/brands/tecno.png" />
                        <div className="flex-1 flex flex-col items-start justify-start gap-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                <b className="self-stretch relative">Tecno Mobile</b>
                                <div className="self-stretch relative text-base text-gray-500">Camon launch event co‑host & short‑film</div>
                            </div>
                            <div className="self-stretch relative text-xl">2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;