import { motion } from 'motion/react';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { LuMenu } from 'react-icons/lu';

interface HeaderProps {
    onBammyBestowedTextClick: () => void;
    onAboutMeTextClick: () => void;
    onLinkContainerClick: () => void;
    onLinkContainerClick1: () => void;
    onLinkContainerClick2: () => void;
    onLinkContainerClick3: () => void;
    openContactForm: () => void;
}

const Header: React.FC<HeaderProps> = ({
    onBammyBestowedTextClick,
    onAboutMeTextClick,
    onLinkContainerClick,
    onLinkContainerClick1,
    onLinkContainerClick2,
    onLinkContainerClick3,
    openContactForm,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileLinkClick = (navFunc: () => void) => {
        navFunc();
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-silver fixed top-0 z-20 border-darkslategray-200 border-solid border-b box-border w-full flex flex-col items-center justify-start py-5">
            <div className="self-stretch relative flex justify-between px-6 items-center">
                <button
                    className="text-[17.53px] md:text-xl leading-6 md:leading-[27px] font-ahganirya cursor-pointer text-darkolivegreen"
                    onClick={onBammyBestowedTextClick}
                >
                    <img src='/logo.png' className='h-12 w-auto' alt="Bammy Bestowed Logo" />
                </button>
                <nav className="flex-row items-center text-white justify-start gap-5 hidden md:flex">
                    <button className="relative leading-[22.4px] cursor-pointer" onClick={onAboutMeTextClick}>About Me</button>
                    <button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick}>
                        <div className="relative leading-[22.4px]">Filmography</div>
                    </button>
                    <button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick1}>
                        <div className="relative leading-[22.4px]">Interviews</div>
                    </button>
                    <button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick2}>
                        <div className="relative leading-[22.4px]">{`News & Blog`}</div>
                    </button>
                    <button className="flex flex-col items-start justify-start cursor-pointer" onClick={onLinkContainerClick3}>
                        <div className="relative leading-[22.4px]">{`Brands`}</div>
                    </button>
                    <button onClick={openContactForm} className="flex flex-col items-start justify-start cursor-pointer">
                        <div className="relative leading-[22.4px]">Book Me</div>
                    </button>
                </nav>
                <div className="flex-row items-center justify-start gap-4 text-white hidden md:flex">
                    <a href="https://www.instagram.com/bammybestowed?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className=""><FaInstagram size={32} /></a>
                    <a href="https://www.facebook.com/bammybestowed" target="_blank" rel="noopener noreferrer" className=""><FaFacebookF size={32} /></a>
                    <a href="https://x.com/bambam" target="_blank" rel="noopener noreferrer" className=""><FaXTwitter size={32} /></a>
                    <a href="https://youtube.com/@bammybestowed?si=_cf5qTYXrTdbLHB5" target="_blank" rel="noopener noreferrer" className=""><FaYoutube size={32} /></a>
                </div>
                <div className="md:hidden flex items-center">
                    <LuMenu size={40} onClick={() => setMobileMenuOpen((v) => !v)} className="cursor-pointer text-white" />
                </div>
            </div>
            {typeof window !== "undefined" && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden overflow-hidden bg-silver px-6 w-full">
                    <nav className="flex flex-col gap-4 py-4 text-white">
                        <button className="text-left leading-[22.4px] cursor-pointer" onClick={() => handleMobileLinkClick(onAboutMeTextClick)}>About Me</button>
                        <button className="text-left leading-[22.4px] cursor-pointer" onClick={() => handleMobileLinkClick(onLinkContainerClick)}>Filmography</button>
                        <button className="text-left leading-[22.4px] cursor-pointer" onClick={() => handleMobileLinkClick(onLinkContainerClick1)}>Interviews</button>
                        <button className="text-left leading-[22.4px] cursor-pointer" onClick={() => handleMobileLinkClick(onLinkContainerClick2)}>{`News & Blog`}</button>
                        <button className="text-left leading-[22.4px] cursor-pointer" onClick={() => handleMobileLinkClick(onLinkContainerClick3)}>{`Brands`}</button>
                        <button className="text-left leading-[22.4px] cursor-pointer" onClick={() => handleMobileLinkClick(openContactForm)}>Book Me</button>
                        <div className="flex flex-row items-center justify-start gap-4 text-darkolivegreen pt-2">
                            <a href="https://www.instagram.com/bammybestowed?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className=""><FaInstagram size={32} /></a>
                            <a href="https://www.facebook.com/bammybestowed" target="_blank" rel="noopener noreferrer" className=""><FaFacebookF size={32} /></a>
                            <a href="https://x.com/bambam" target="_blank" rel="noopener noreferrer" className=""><FaXTwitter size={32} /></a>
                            <a href="https://youtube.com/@bammybestowed?si=_cf5qTYXrTdbLHB5" target="_blank" rel="noopener noreferrer" className=""><FaYoutube size={32} /></a>
                        </div>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Header;