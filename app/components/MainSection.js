"use client";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";

const MainSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r fade-in" id="home">
      <div className="text-center p-10 py-10 mt-20">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Shailesh Jadav
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Full Stack Developer
        </h3>

        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image
            src={deved}
            fill={true}
            style={{ objectFit: "cover" }}
            alt="image1"
          />
        </div>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Hello 👋, I am Shailesh Jadav. <br />I am a full stack developer
          passionate about crafting innovative and scalable solutions that bring
          ideas to life.
          <br /> I strive to write elegant and maintainable solutions that
          enhance readability, foster collaboration, and simplify the
          development process.🤟
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/shaileshjadav/" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shailesh-jadav-667983145/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
