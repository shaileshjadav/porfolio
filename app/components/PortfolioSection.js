"use client";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import FadeInOnScroll from "../utils/FadeInOnScroll";
import web1 from "../../public/burger-buider-main.png";
import web2 from "../../public/chatapp.png";
import web3 from "../../public/moviefansite.png";

const PortFolioSection = () => {
  const portfolioItems = [
    {
      title: "Burger Builder",
      description:
        "Web App where user register, login, can build burger and order it. ",
      techlogies: "Firebase, React, Redux, React Router, Axios",
      liveLink: "https://burger-builder-app.netlify.app/",
      sourceCode: "https://github.com/shaileshjadav/burger_builder",
      imageUrl: web1,
    },
    {
      title: "Chat App",
      description: "Simple Realtime Chat App using nodejs and socket.io",
      techlogies: "Nodejs, Socket-io, Express",
      liveLink: "",
      sourceCode: "https://github.com/shaileshjadav/Chat-App",
      imageUrl: web2,
    },
    {
      title: "Movie Fan Site",
      description:
        "Movie Fan Site where user can see trending movies, search movie, see movie details",
      techlogies: "Nodejs, Express, themoviedb API",
      liveLink: "",
      sourceCode: "https://github.com/shaileshjadav/movieFanSite",
      imageUrl: web3,
    },
  ];

  return (
    <FadeInOnScroll>
      <section className="py-10" id="work">
        <div>
          <h3 className="text-5xl py-1 dark:text-white text-center">
            My Works
          </h3>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {portfolioItems.map((item, index) => (
            <div className="basis-1/3 flex-1 " key={index}>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={item.imageUrl}
                alt="app1"
              />

              <div className="flex">
                <div className="flex-grow">
                  <h6 className="text-xl font-medium py-2 dark:text-white md:text-2xl ">
                    {item.title}
                  </h6>
                </div>
                <div className="mt-2 justify-end">
                  <div className="flex justify-end items-center">
                    {item.liveLink && (
                      <a
                        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        href={item.liveLink}
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={item.sourceCode}
                      className="flex items-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                      target="_blank"
                    >
                      <AiFillGithub className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm py-5 leading-8 max-w-xl md:text-xl">
                {item.description} <br />
                <b>Tech:</b> {item.techlogies}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="https://github.com/shaileshjadav/"
            target="_blank"
          >
            See More on github
          </a>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default PortFolioSection;
