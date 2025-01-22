import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";

const MainSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r fade-in" id="home">
      <div className="flex justify-between p-10 py-10 mt-20">
        <div className="flex flex-col">
          <div>
            <h6>I'm</h6>
            <h2 className="text-5xl font-medium md:text-6xl">
              Shailesh Jadav
            </h2>
            <h3 className="text-2xl md:text-3xl">
              Senior software engineer
            </h3>

            <p className="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl">
              passionate about crafting innovative and scalable solutions that
              bring ideas to life.
              <br /> I strive to write elegant and maintainable solutions that
              enhance readability, foster collaboration, and simplify the
              development process.🤟
            </p>
          </div>


          <div className="">
            <p>Let's Connect:</p>
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


        <div className="flex flex-col">
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image
              src={deved}
              fill={true}
              style={{ objectFit: "cover" }}
              alt="image1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
