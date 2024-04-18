"use client";
import React from "react";
import Hero from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import AboutUs from "@/components/sections/AboutUs";
const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      {/* <Testimonials /> */}
    </div>
  );
};

export default page;
