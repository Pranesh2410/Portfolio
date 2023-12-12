import React from "react";
import {
  SiCplusplus,
  SiPython,
  SiAmazonaws,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
 // SiMysql,
} from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  { name: "C++", logo: <SiCplusplus /> },
  { name: "HTML", logo: <SiHtml5 /> },
  { name: "CSS", logo: <SiCss3 /> },
  { name: "Javascript", logo: <SiJavascript /> },
  { name: "Reactjs", logo: <SiReact /> },
  { name: "Embedded Systems", logo: <GiCircuitry /> },
  { name: "AWS", logo: <SiAmazonaws /> },
 // { name: "MySQL", logo: <SiMysql /> },
  { name: "Python", logo: <SiPython /> },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto ">
        <h2 className="h2 text-accent text-center">Skills</h2>
        <div className="item-center">
          {skills.map((skill, index) => {
            const { name, logo } = skill;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`border rounded-2xl flex mb-2 pr-8  ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } item-center`}
                variants={fadeIn(isEven ? "right" : "left", 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
              >
                <div className="text-5xl ml-4">{logo}</div>
                <div className={`pl-8 ${isEven ? "ml-auto" : "mr-auto"}`}>
                  <h3 className="text-[30px] tracking-wider font-primary font-semibold mb-6">
                    {name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
