"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';


const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

    useEffect(() => {
        const consent = localStorage.getItem('ga_consent');
        if (consent === null) {
            setIsVisible(true);
        } else if (consent === 'accepted') {
            insertGoogleAnalyticsScript();
        }
    }, []);

    const insertGoogleAnalyticsScript = () => {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.body.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
    };

    const handleAccept = () => {
        localStorage.setItem('ga_consent', 'accepted');
        setIsVisible(false);
        insertGoogleAnalyticsScript();
    };

    const handleReject = () => {
        localStorage.setItem('ga_consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

  return (
    <div className="fixed z-50 bottom-0 w-screen left-0  p-4 blue-gradient ">
        <div className='flex flex-col container items-center justify-around md:flex-row'>
            <p className='text-[#FFFAFA] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>This website uses <Link href="/cookie-policy" className='font-bold underline cursor-pointer'>cookies</Link> to improve user experience.</p>
            <div className='w-full max-w-[600px] flex items-center justify-center gap-1 my-2 md:flex-col'>
                <button className='w-[200px] border border-[#FFFAFA] text-[#FFFAFA] font-bold py-2 hover:bg-[#FFFAFA] hover:text-redprimary transiton-all duration-1000 ease-in-out' onClick={handleAccept}>Accept</button>
                <button className='w-[200px] border border-redprimary text-redprimary font-bold py-2 hover:text-[#FFFAFA] hover:bg-redprimary transiton-all duration-1000 ease-in-out' onClick={handleReject}>Reject</button>
            </div>
        </div>
    </div>
  );
};
export default CookieBanner;
