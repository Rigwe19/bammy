import { useEffect, type FunctionComponent } from 'react';
import { LuX } from 'react-icons/lu';


export type TermsAndConditionsType = {
    className?: string;
    onClose?: VoidFunction
}



const TermsAndConditions: FunctionComponent<TermsAndConditionsType> = ({ className = "", onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return (()=> {
            document.body.style.overflow = "auto"
        })
    }, []);
    return (
        <div className={`w-full overflow-hidden flex items-center justify-center box-border max-w-full max-h-full text-center text-9xl text-gray-200 font-worcester-serial ${className}`}>
            <div className="md:w-1/2 relative self-stretch bg-silver space-y-6 py-10 md:px-[60px] px-2 overflow-auto">
                <div className="self-stretch flex flex-col items-center justify-start">
                    <i className="self-stretch relative font-bold">Terms and Conditions</i>
                </div>
                <LuX className="absolute right-2 top-2" onClick={onClose} />
                <div className="self-stretch flex flex-col items-center justify-start text-left text-base text-gray-500 font-helvetica">
                    <div className="self-stretch relative">
                        <p className="m-0">Welcome to Bambam's official website. By accessing or using this site, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use the site.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">1. Services</p>
                        <p className="m-0">This platform offers promotional services related to the professional work of Bambam (Bamike), including but not limited to voice-over artistry, acting, directing, public speaking, advocacy campaigns, and brand collaborations.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">2. Intellectual Property</p>
                        <p className="m-0">All content on this site—including text, images, videos, logos, and branding—is the intellectual property of Bambam or its licensors and is protected under copyright and trademark laws. You may not reproduce, distribute, or use any content without prior written permission.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">3. User Conduct</p>
                        <p className="m-0">Users agree not to:</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Use the site for unlawful purposes.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Attempt to interfere with the website’s functionality or security.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Submit false or misleading information.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Violate any rights of third parties, including privacy or intellectual property rights.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">4. Collaborations and Endorsements</p>
                        <p className="m-0">Any partnerships, endorsements, or campaigns promoted through this site will be clearly identified. Users engaging with these offerings are encouraged to conduct their own due diligence before participation.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">5. Limitation of Liability</p>
                        <p className="m-0">While we strive to maintain accurate and up-to-date information, the site is provided "as is." We do not guarantee the accuracy, completeness, or timeliness of the information. We are not liable for any loss or damage arising from the use or inability to use the site.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">6. Third-Party Links</p>
                        <p className="m-0">This website may contain links to third-party websites. These links are provided for convenience only, and we are not responsible for the content or practices of those sites.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">7. Changes to Terms</p>
                        <p className="m-0">We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the site constitutes your acceptance of any changes.</p>
                    </div>
                </div>
                <div className="self-stretch h-[18px]" />
            </div>
        </div>);
};

export default TermsAndConditions;
