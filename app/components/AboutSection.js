"use client";
import FadeInOnScroll from "../utils/FadeInOnScroll";

import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const AboutSection = () => {
  const skills = [
    { name: "Node.js", percentage: 80 },
    { name: "PHP", percentage: 90 },
    { name: "React.js", percentage: 75 },
    { name: "MySQL", percentage: 90 },
    { name: "MongoDB", percentage: 70 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
  ];
  return (
    <FadeInOnScroll>
      <section className="py-10" id="aboutme">
        <div>
          <h3 className="text-5xl py-1 dark:text-white text-center">
            About Me
          </h3>
        </div>
        <div className="flex gap-10 py-10 ">
          <div className="w-1/2">
            {/* Left column content */}
            <div className="mb-8">
              <p className="text-gray-700  dark:text-white">
                Innovative, task-driven professional with 5.5+ year of
                well-rounded experience in development of backend and frontend
                for dynamic database driven websites across diverse Industries.
              </p>
            </div>

            {/* Contact section */}
            <div>
              <h2 className="text-2xl font-bold mb-4  dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-700  dark:text-white">
                <li className="flex items-center mb-2">
                  <AiOutlineMail className="mr-2" />
                  <span>
                    Email:
                    <a
                      href="mailto: shaileshjadav007@gmail.com"
                      target="_blank"
                    >
                      shaileshjadav007@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-center mb-2">
                  <AiFillLinkedin className="mr-2" />
                  <span>
                    LinkedIn:
                    <a
                      href="https://www.linkedin.com/in/shailesh-jadav-667983145/"
                      target="_blank"
                    >
                      shaileshjadav
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            {/* Right column content */}
            <h2 className="text-2xl font-bold mb-4  dark:text-white">Skills</h2>
            <ul className="text-gray-700  dark:text-white">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center mb-4">
                  <div className="w-2/5">{skill.name}</div>
                  <div className="w-3/5 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-blue-500 rounded"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <div className="ml-2">{skill.percentage}%</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default AboutSection;
