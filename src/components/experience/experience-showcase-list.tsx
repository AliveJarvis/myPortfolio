import { useRef } from "react";
import React from "react";

import { motion, useScroll } from "framer-motion";

import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";
import Certificate from "@/public/images/Power Extract Certificate of Internship.png";
import digitalMarketing from "@/public/images/Fundamentals of digital marketing.jpg";
import Image from "next/image";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}

export default function ExperienceShowcaseList(
  props: ExperienceShowcaseListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
      <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-8xl">
        {props.title}
      </h2>
      <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-accent"
        ></motion.div>
        <ul className="ml-4 w-full items-center">
          {props.details.map((details, index: number) => (
            <React.Fragment key={index}>
              <ExperienceShowcaseListItem {...details} />
              {details.title === "Front End Engineer" && (
                <div className="flex justify-center mb-20">
                  <Image src={Certificate} alt="" width={400}></Image>
                </div>
              )}
              {details.title === "Fundamentals of Digital Marketing" && (
                <div className="flex justify-center">
                  <Image src={digitalMarketing} alt="" width={400}></Image>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
