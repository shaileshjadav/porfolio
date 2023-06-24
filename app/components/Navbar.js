"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useThemeContext } from "../Theme";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("1");
  const [theme, setTheme] = useThemeContext();
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
      className={`py-2 mb-12 dark:text-white fixed w-full px-0 z-10 top-0 transition-all duration-300 dark:bg-gray-900  ${
        isSticky ? "bg-teal-400 dark:bg-teal-900 shadow-lg" : ""
      }`}
      id="header"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <BsFillMoonStarsFill
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className=" cursor-pointer text-2xl "
            />
          </div>
          <div className="md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#home"
                className={`dark:text-white underline-offset-4 ${
                  isSticky ? "text-gray-600" : "text-teal-600"
                } ${activeSection === "1" ? "underline" : ""}`}
                onClick={() => setActiveSection("1")}
              >
                Home
              </Link>
              <Link
                href="#work"
                className={`dark:text-white underline-offset-4 ${
                  isSticky ? "text-gray-600" : "text-teal-600"
                } ${activeSection === "2" ? "underline" : ""}`}
                onClick={() => setActiveSection("2")}
              >
                My Work
              </Link>
              <Link
                href="#aboutme"
                className={`dark:text-white underline-offset-4 ${
                  isSticky ? "text-gray-600" : "text-teal-600"
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
