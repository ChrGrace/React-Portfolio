import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a web developer
            </h3>
            <p className='mb-6'>
              With my studies reaching their conclusion, I am excited to finally put my skills to the test to design, maintain, upgrade or create any project.

              When I am not battling errors and wrangling code, I very much enjoy spending time with my canines, viewing E-sports, whittling away the hours playing games, travelling the world and reminiscing about the good old days when I was young, cool and learning to pilot helicopters.
            </p>
            {/* stats */}
            {/*
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={0} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  stuff
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={0} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  idea <br />

                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={0} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  clues   <br />

                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a> 
        </div>
        */}
          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default About;
