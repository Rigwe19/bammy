import { useState } from 'react';
import LazyYouTube from '../components/LazyYouTube';
import { motion, AnimatePresence } from 'motion/react';


const filmData = [
    {
        videoId: 'GwwLna5zxpk',
        title: 'Twin Deception',
        year: '2025',
        description: 'Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion‑naira conspiracy that could cost the sisters their freedom—and their newfound bond.',
    },
    {
        videoId: 'bslcx4LRFL0',
        title: 'Love in Every Word',
        year: '2025',
        description: 'A jaded radio host must prove true love exists or lose her show. Anonymous letters from a mysterious chef rekindle hope—until the envelopes stop and she must risk her heart on air.',
    },
    {
        videoId: 'Slxm189-MXk',
        title: 'Merry Side of You',
        year: '2024',
        description: 'Workaholic Tonia returns home for Christmas to broker a merger, but a snowstorm strands her with childhood crush Viyon. Between family chaos and carols, she learns the best deals in life can’t be negotiated.',
    },
    {
        videoId: 'KGkWFuk9xUE',
        title: 'Cupcake for Val',
        year: '2025',
        description: 'Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion‑naira conspiracy that could cost the sisters their freedom—and their newfound bond.',
    },
];

const INITIAL_VISIBLE_COUNT = 2;
const INCREMENT_COUNT = 2;

const Filmography: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    const showMoreFilms = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + INCREMENT_COUNT, filmData.length));
    };

    const showLessFilms = () => {
        setVisibleCount((prevCount) => Math.max(prevCount - INCREMENT_COUNT, INITIAL_VISIBLE_COUNT));
    };

    return (
        <section className="w-full flex flex-col items-center justify-start py-[50px] px-6 md:px-12 box-border gap-12 z-[2]" data-scroll-to="frameContainer3">
            <i className="self-stretch relative">Filmography</i>
            <div className="md:w-full flex flex-col items-center justify-start text-left md:text-13xl text-[20px] text-darkslategray-100 font-helvetica">
                <div className="md:w-full flex flex-col items-start justify-center gap-10">
                    <AnimatePresence initial={false}>
                        {filmData.slice(0, visibleCount).map((film) => (
                            <motion.div
                                key={film.videoId}
                                className="self-stretch grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-8"
                                layout
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <LazyYouTube videoId={film.videoId} title={film.title} />
                                <div className="flex-1 flex flex-col items-start justify-start">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-8">
                                        <div className="self-stretch flex flex-col items-start justify-start gap-5">
                                            <div className="self-stretch flex flex-row items-center justify-between">
                                                <div className="relative">{film.title}</div>
                                                <div className="relative block md:hidden">{film.year}</div>
                                            </div>
                                            <div className="self-stretch relative text-base leading-[140%]">{film.description}</div>
                                        </div>
                                        <div className="relative text-5xl hidden md:block">{film.year}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            {visibleCount < filmData.length && (
                <button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={showMoreFilms}>
                    <span className="leading-[19.6px] font-medium max-h-[19.6px]">Show more</span>
                </button>
            )}
            {visibleCount > INITIAL_VISIBLE_COUNT && (
                <button className="flex flex-row bg-darkolivegreen items-start rounded-3xs py-4 px-8 md:w-auto w-full justify-center cursor-pointer text-lg text-white font-dm-sans" onClick={showLessFilms}>
                    <span className="leading-[19.6px] font-medium max-h-[19.6px]">Show less</span>
                </button>
            )}
        </section>
    );
};

export default Filmography;