import { useState } from 'react';
import LazyYouTube from '../components/LazyYouTube';
import { motion, AnimatePresence } from 'motion/react';


const filmData = [
  // Exists in sample data (real data reused)
  {
    videoId: 'bslcx4LRFL0',
    title: 'Love in Every Word',
    year: '2025',
    description: 'A heartfelt romantic drama that follows two individuals whose lives become intertwined through letters, spoken promises and the healing power of honest communication.',
  },
  {
    videoId: 'OQQaDqLCgKg',
    title: 'Love in Every Word: The Wedding',
    year: '2025',
    description: 'The sequel to Love in Every Word, this film follows the couple’s journey to the altar as they navigate love, faith, family expectations and the beauty of commitment.',
  },

  // New items (2025 + generated videoId)
  {
    videoId: 'YxSkTZ756Yc',
    title: 'Meadowbrook Hearts',
    year: '2025',
    description: 'A warm small-town romance celebrating second chances, forgiveness and rediscovering love where you least expect it.',
  },
  {
    videoId: 'eF_SNXUtAOs',
    title: 'Miracle Man',
    year: '2025',
    description: 'An inspiring drama centred on a mysterious figure whose presence brings healing, revelation and unexpected miracles to those around him.',
  },
  {
    videoId: 'nPpy24gr12M',
    title: 'Chess',
    year: '2025',
    description: 'A gripping story where love, ambition and betrayal unfold like strategic moves on a high-stakes chessboard.',
  },
  {
    videoId: 'Yt4Ws89LmPQ',
    title: 'Daddy Yo',
    year: '2025',
    description: 'A humorous and heartfelt series exploring the chaos and comedy of modern fatherhood and family life.',
  },
  {
    videoId: 'Fg9Px2nKqTe',
    title: 'The Gift Within',
    year: '2025',
    description: 'A touching emotional drama about discovering inner strength, identity and the gifts that define who we are.',
  },
  {
    videoId: 'FRsfW3cpi-c',
    title: 'Three for Trouble',
    year: '2025',
    description: 'A playful romantic comedy where three friends become entangled in love triangles, mischief and unexpected revelations.',
  },
  {
    videoId: 'Sd8Jy4LmQpw',
    title: 'Just Say Yes',
    year: '2025',
    description: 'A romance-drama about courage, vulnerability and the liberating power of choosing love despite fear and doubt.',
  },
  {
    videoId: 'Vr7Kx1tPoLm',
    title: 'Same Difference',
    year: '2025',
    description: 'A reflective emotional story about identity, family ties and learning to love someone who mirrors your strengths and flaws.',
  },
  {
    videoId: 'Hp0Ws7qNaBd',
    title: 'Last Dial to Heaven',
    year: '2025',
    description: 'A moving spiritual drama about redemption, forgiveness and one final call that changes the course of destinies.',
  },
  {
    videoId: 'Rf3Lp7aMwQx',
    title: 'Rescue a Bride for Christmas',
    year: '2025',
    description: 'A festive romantic comedy where Christmas magic, unexpected heroes and a runaway bride collide in a heartwarming adventure.',
  },
  {
    videoId: 'Wx6Pa9sTyUv',
    title: 'Double the Love',
    year: '2025',
    description: 'A charming romantic tale where twin dynamics, double surprises and intertwined identities create twice the affection.',
  },
  {
    videoId: 'Ty9Qs6bPwEn',
    title: 'Love Unbroken',
    year: '2025',
    description: 'A powerful story of healing, reconnection and the resilience of true love after heartbreak.',
  },
  {
    videoId: 'Pl1Ga8vQwXc',
    title: 'The Walls Between Us',
    year: '2025',
    description: 'An intimate relationship drama exploring emotional barriers, unspoken truths and the struggle to rebuild connection.',
  },
  {
    videoId: 'Qr2Kh7nTeVa',
    title: 'The Word',
    year: '2025',
    description: 'A faith-based drama highlighting the power of God’s word to guide, restore and transform lives in difficult seasons.',
  },
  {
    videoId: 'Zx5Qp4wNsTa',
    title: 'Ogechi',
    year: '2025',
    description: 'A culturally rich story following Ogechi’s emotional journey through duty, love and self-discovery within her community.',
  },
  {
    videoId: 'Lm8Ts3kPwRb',
    title: 'Whispers of the Womb',
    year: '2025',
    description: 'A deeply moving drama exploring fertility, motherhood and the silent emotional battles many women endure.',
  },

  // Exists in sample data (real data reused)
  {
    videoId: 'GwwLna5zxpk',
    title: 'Twin Deception',
    year: '2025',
    description: 'Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion-naira conspiracy that could cost the sisters their freedom—and their newfound bond.',
  },

  // Exists in sample data (real data reused)
  {
    videoId: 'KGkWFuk9xUE',
    title: 'Cupcake for Val',
    year: '2025',
    description: 'Separated at birth, ambitious lawyer Teni and struggling artist Tola swap lives to avenge a past betrayal. The ruse uncovers a billion-naira conspiracy that could cost the sisters their freedom—and their newfound bond.',
  },

  {
    videoId: 'Bc9Ns4eTwVr',
    title: 'For His Love',
    year: '2025',
    description: 'A dramatic love story about devotion, sacrifice and the emotional battles fought in the name of love.',
  },
  {
    videoId: 'Jx4Qm2vHpSa',
    title: 'Drive Me to Love',
    year: '2025',
    description: 'A fun and adventurous romantic film where an unexpected road trip leads to new chemistry, discovery and connection.',
  },
  {
    videoId: 'Qp7Rn3cYxTf',
    title: 'Too Good to Be True',
    year: '2025',
    description: 'A romance-drama that questions perfection, trust and whether something “too good” can actually last.',
  },
  {
    videoId: 'Vn6Tq1yPaLs',
    title: 'Wrong Door',
    year: '2025',
    description: 'A suspense drama where a single wrong door opens into life-changing revelations, secrets and unexpected consequences.',
  },
];


const INITIAL_VISIBLE_COUNT = 8;
const INCREMENT_COUNT = 8;

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