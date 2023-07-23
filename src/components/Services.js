import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description:
      'Whether solo of with the customers guidance and input, the website I create will look, feel and function exactly as requested.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description:
      'From the ground up I can and will build the perfect website to suit your personal or business requirements.',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description:
      'Let me help your website be noticed and stand apart from its billions of rivals.',
    link: 'Learn more',
  },
  {
    name: 'Product maintenance',
    description:
      'Extending beyond the construction of the website, I have maintenace and update services availiable to ensure that any change or modification is only an email away.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              {/* I'm a Developer beginning my journey into the world of web development, where the magic of realising clients dreams is my expectation.  */}
            </h3>
            {/*
            <button className='btn btn-sm'>See my work</button>
             */}
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
