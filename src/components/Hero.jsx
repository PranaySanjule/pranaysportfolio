import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import Typed from "react-typed";

const Hero = () => {
  const text = [
    `Fullstack Developer`,
    `Programmer`,
    `Content Creator`,
    `Blooger`,
  ];

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-black dark:bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 dark:violet-gradient black-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadTextHero}`}>
            Hi, I&apos;m
            <span id="typewriter" className="text-black dark:text-[#915eff]">
              {" "}
              Pranay
            </span>
            {/* <Cursor /> */}
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 dark:text-white-100 text-black-100`}
          >
            <Typed
              className="text-[black] dark:text-secondary"
              strings={text}
              typeSpeed={40}
              loop
            />
            <br />
            with a strong passion for Web.
          </p>
        </div>
        <div></div>
      </div>

      <br />
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
