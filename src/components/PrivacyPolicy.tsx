import { useEffect, type FunctionComponent } from 'react';
import { LuX } from 'react-icons/lu';


export type PrivacyPolicyType = {
    className?: string;
    onClose?: VoidFunction;
}



const PrivacyPolicy: FunctionComponent<PrivacyPolicyType> = ({ className = "", onClose }) => {
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
                    <i className="self-stretch relative font-bold">Privacy Policy</i>
                </div>
                <LuX className="absolute right-2 top-2" onClick={onClose} />
                <div className="self-stretch flex flex-col items-center justify-start text-left text-base text-gray-500 font-helvetica">
                    <div className="self-stretch relative">
                        <p className="m-0">Effective Date: [Insert Date]</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">This Privacy Policy explains how we collect, use, and protect your information when you visit Bambam's official website.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">1. Information We Collect</p>
                        <p className="m-0">Personal Information: When you contact us or sign up for updates, we may collect personal information such as your name, email address, and phone number.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Usage Data: We collect non-personal information such as browser type, device, and pages visited for analytics purposes.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">2. How We Use Your Information</p>
                        <p className="m-0">We use your information to:</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Respond to inquiries or service requests</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Send updates about upcoming projects, campaigns, or appearances</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Improve website performance and user experience</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Fulfill any contractual or legal obligations</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">3. Sharing of Information</p>
                        <p className="m-0">We do not sell or rent your personal information. Information may be shared with trusted third-party service providers solely for the purpose of operating this site or delivering communications. These providers are obligated to protect your data.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">4. Cookies and Tracking</p>
                        <p className="m-0">We may use cookies to enhance user experience and analyze traffic. You can modify your browser settings to refuse cookies, but this may affect the functionality of the site.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">5. Data Security</p>
                        <p className="m-0">We take reasonable steps to protect your information from unauthorized access or disclosure. However, no internet transmission is ever completely secure, and we cannot guarantee absolute security.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">6. Children’s Privacy</p>
                        <p className="m-0">This website is not directed toward individuals under the age of 13. We do not knowingly collect personal information from children.</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">7. Your Rights</p>
                        <p className="m-0">You have the right to:</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Access the personal data we hold about you</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Request correction or deletion of your data</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">Opt out of future communications</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">To exercise these rights, contact us at: [Insert Contact Email]</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">8. Policy Updates</p>
                        <p className="m-0">We may update this Privacy Policy from time to time. The latest version will always be posted here with an updated effective date.</p>
                        <p className="m-0">&nbsp;</p>
                    </div>
                </div>
                <div className="self-stretch h-[18px]" />
            </div>
        </div>);
};

export default PrivacyPolicy;
