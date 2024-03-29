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
    <div className="fixed z-50 bottom-10 w-[50%] min-w-[220px] left-[50%] translate-x-[-50%] p-4 bg-white dark:bg-darksecondary shadow-2xl dark:shadow-lg shadow-black dark:shadow-redprimary/20">
        <div className='flex flex-col items-center justify-around md:flex-row'>
            <p className=''>This website uses <Link href="/cookie-policy" className='text-redprimary'>cookies</Link> to improve user experience.</p>
            <div className='flex items-center gap-1 my-2 md:flex-col'>
                <button className='bg-blueprimary border border-blueprimary py-1 w-[100px]' onClick={handleAccept}>Accept</button>
                <button className='bg-redprimary  border border-redprimary py-1 w-[100px]' onClick={handleReject}>Reject</button>
            </div>
        </div>
    </div>
  );
};
export default CookieBanner;
