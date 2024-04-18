"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";

const About = () => (
  <section
    className={`${styles.paddings} relative z-10 max-w-7xl mx-auto my-40`}
  >
    <div className="gradient-02 z-0" />
    <div className="gradient-03 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {" "}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mx-auto max-w-2xl lg:text-center"
      >
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-300 text-center sm:text-4xl uppercase">
          ABOUT Us
        </h2>
        <p className="mt-6 text-lg text-center leading-8 text-gray-600 dark:text-slate-200">
          description
        </p>
      </motion.div>
      {/* <TypingText title="| About Metaversus" textstyles="text-center" /> */}
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white z-10"
      >
        <span className="font-extrabold ">Lorem</span> ipsum dolor sit amet
        consectetur adipisicing elit. Amet aut cupiditate praesentium eius
        doloremque explicabo ipsa dignissimos sapiente, beatae eos aliquam sequi
        perferendis facilis nesciunt distinctio{" "}
        <span className="font-extrabold ">asperiores </span> doloribus sed
        nobis. Quidem nostrum a accusantium veritatis maiores deleniti quasi
        quod velit mollitia alias reprehenderit{" "}
        <span className="font-extrabold ">oooyui </span> molestias deserunt
        repudiandae culpa quas aperiam placeat, dolorem aliquid amet porro enim.
        Tenetur aliquam error non?
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
