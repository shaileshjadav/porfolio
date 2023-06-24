"use client";
import React, { useEffect, useRef } from "react";

const FadeInOnScroll = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        element.classList.add("fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeInOnScroll;
