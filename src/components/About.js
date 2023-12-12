import React from 'react';
//import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
            variants={fadeIn('right',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

          </motion.div>
          <motion.div 
            variants={fadeIn('left',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>
               Passionate web developer specializing in React.js and an IoT developer.
            </h3>
            <p className='mb-6'>I am a passionate and experienced Web Developer with a strong focus on front-end development, IoT, and embedded systems. 
              I possess a deep understanding of HTML, CSS, JavaScript, React.js, and various IoT technologies, including Arduino and NodeMCU. 
              My expertise lies in crafting visually appealing, user-friendly, and responsive web interfaces, coupled with a knack for developing 
              innovative IoT solutions.</p>
          
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
