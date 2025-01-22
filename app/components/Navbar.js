"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("1");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("header");
      const headerHeight = header.offsetHeight;

      setIsSticky(scrollPosition >= headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`py-2 mb-12 fixed w-full px-0 z-10 top-4 px-8 transition-all duration-300 rounded-2xl backdrop-blur-[10px]  ${
        isSticky ? "shadow-lg" : ""
      }`}
      id="header"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <ThemeToggle/>
          </div>
          <div className="md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/#home"
                className={`dark:text-white underline-offset-4 ${
                  isSticky ? "" : ""
                } ${activeSection === "1" ? "underline" : ""}`}
                onClick={() => setActiveSection("1")}
              >
                Home
              </Link>
              <Link
                href="/#work"
                className={`dark:text-white underline-offset-4 ${
                  isSticky ? "" : ""
                } ${activeSection === "2" ? "underline" : ""}`}
                onClick={() => setActiveSection("2")}
              >
                My Work
              </Link>
              <Link
                href="/#aboutme"
                className={`dark:text-white underline-offset-4 ${
                  isSticky ? "" : ""
                } ${activeSection === "3" ? "underline" : ""}`}
                onClick={() => setActiveSection("3")}
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            // onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
