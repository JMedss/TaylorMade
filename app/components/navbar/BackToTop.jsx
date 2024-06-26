"use client"
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import clsx from 'clsx';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
  }, [isVisible]);

  const onAnimationEnd = () => {
    if (!isVisible) {
      setShouldRender(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center">
        {shouldRender && (
        <button onClick={scrollToTop} className={clsx("absolute flex items-center top-1 left-1/2 transform -translate-x-1/2 transition-opacity duration-500", {
          "opacity-100": isVisible,
          "opacity-0": !isVisible,
        })}
        onAnimationEnd={onAnimationEnd}
        >
          <span className="font-bold text-redprimary/80 text-[16px]">Scroll to top</span>
          <RiArrowUpDoubleFill size={30} className="text-redprimary/80 animate-upAndDown" />
        </button>
        )}
      </div>
    )
};

export default BackToTop;
