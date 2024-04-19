"use client";

import { motion } from "framer-motion";
// import { socials } from '../constants';
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const socials = [
  {
    name: "twitter",
    url: "./twitter.svg",
    icon: <FaXTwitter />,
  },
  {
    name: "linkedin",
    url: "./linkedin.svg",
    icon: <FaLinkedin />,
  },
  {
    name: "instagram",
    url: "./instagram.svg",
    icon: <FaInstagramSquare />,
  },
  {
    name: "facebook",
    url: "./facebook.svg",
    icon: <FaFacebook />,
  },
];

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <Image
          className="h-12 w-auto dark:invert"
          src="/logo.webp"
          width={150}
          height={100}
          alt=""
        />
        {/* <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Beyond the screen
        </h4> */}
      </div>
      <div className="flex flex-col">
        <div className="md-[50px] h-[2px] dark:bg-white bg-[#171717]  opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] dark:text-white text-[#171717]">
            Sow Tech
          </h4>
          <p className="font-normal text-[14px] dark:text-white text-[#171717] opacity-50">
            Copyright &copy; 2024 SowTech. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <div
                key={social.name}
                className="cursor-pointer h-[24px] z-50 text-2xl w-[24px]"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
