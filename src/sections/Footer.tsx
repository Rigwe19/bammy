import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

interface FooterProps {
    openPrivacyPolicy: () => void;
    openTermsAndConditions: () => void;
}

const Footer: React.FC<FooterProps> = ({ openPrivacyPolicy, openTermsAndConditions }) => {
    return (
        <footer className="border-[#38323280] relative md:border-t box-border w-full md:h-[164px] pr-6 pl-12 bg-darkolivegreen">
            <div className="h-full w-full flex flex-col py-10 md:py-0 gap-10 md:gap-0 md:flex-row justify-between items-center text-white">
                <img src="/logo.png" alt="Bammy Bestowed Logo" className='h-12 w-auto' />
                <div className="flex flex-col md:flex-row gap-6.25 md:gap-4 items-center">
                    <div className="leading-[22.4px] whitespace-pre-wrap">© 2025. Bam Ent. All Rights Reserved.</div>
                    <div className="flex flex-row items-center justify-start gap-5">
                        <button className="relative leading-[22.4px] cursor-pointer" onClick={openPrivacyPolicy}>Privacy Policy</button>
                        <div className="relative leading-[22.4px]">|</div>
                        <button className="relative leading-[22.4px] cursor-pointer" onClick={openTermsAndConditions}>Terms of Service</button>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                    <a href="https://www.instagram.com/bammybestowed?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className=""><FaInstagram size={32} /></a>
                    <a href="https://www.facebook.com/bammybestowed" target="_blank" rel="noopener noreferrer" className=""><FaFacebookF size={32} /></a>
                    <a href="https://x.com/bambam" target="_blank" rel="noopener noreferrer" className=""><FaXTwitter size={32} /></a>
                    <a href="https://youtube.com/@bammybestowed?si=_cf5qTYXrTdbLHB5" target="_blank" rel="noopener noreferrer" className=""><FaYoutube size={32} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;