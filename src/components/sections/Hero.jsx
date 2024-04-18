"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import HeroBtn from "../ui/buttons/HeroBtn";
import CTA from "../ui/buttons/CTA";
import Secondary from "../ui/buttons/Secondary";
const Hero = () => {
  return (
    <HeroHighlight className="h-screen">
      <div className="flex items-center gap-5 min-h-[99vh]">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto flex gap-5 flex-col w-auto items-center"
        >
          <HeroBtn>Our work speak louder than words!</HeroBtn>
          <div>
            BEYOND THE SCREEN. WE
            <br />
            <Highlight className="text-black dark:text-white">
              BUILD EXPERIENCES.
            </Highlight>
          </div>
          <div className="flex gap-5 items-center">
            <CTA>Book a Call</CTA>
            <Secondary>View our Work</Secondary>
          </div>
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <Player
            autoplay
            loop
            src="/animations/hero.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};
export default Hero;
