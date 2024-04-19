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
        Welcome to SOW Tech, your{" "}
        <span className="font-extrabold ">trusted</span> outsourcing agency for
        top-notch services in website development, app development, web app
        development, cyber security, and XR development. Our team of{" "}
        <span className="font-extrabold ">highly skilled and experienced</span>{" "}
        professionals is dedicated to delivering innovative and cutting-edge
        solutions that meet the unique needs of our clients. At SOW Tech, we
        believe in the power of technology to transform businesses and improve
        people&#39;s lives. That&#39;s why we&#39;re committed to providing our
        clients with the highest quality services, backed by the latest
        technologies and best practices. Whether you&#39;re looking to build a
        new website, develop a mobile app, enhance your cyber security, or
        create immersive XR experiences, we have the expertise to help you
        achieve your goals.
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
