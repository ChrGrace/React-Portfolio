import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/CClogoWhite.png';
import Img2 from '../assets/Movie buffs logo.png';
import Img3 from '../assets/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Here is a collection of my most substantial projects.

                The movie buffs - a front end website for cinephiles who wish to view what is now showing, coming soon and to purchase tickets.

                Choice Cuts - a full stack digital shopfront for a fictional butchery.
                Coming soon - an online classroom.
              </p>

              <a href="https://github.com/ChrGrace">
                <button className='btn btn-sm'>View all projects </button>
              </a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Choice Cuts</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>A full stack digital shopfront.</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Movie Buffs</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Front end cinema website</span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Full stack project</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Coming soon!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default Work;
