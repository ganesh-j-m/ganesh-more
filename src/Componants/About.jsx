import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        // Effect
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/* heading */}
                <h2 className='text-4xl font-bold text-center mb-4'> About <span className='text-purple'>Me</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'  >Get to know about my background and passion</p>

                {/* img + my journey */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* Image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.projectImg1} alt="profile" />
                    </div>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I am a BSc Computer Science student with a strong interest in web development and modern technology.
                                My journey in programming started with curiosity about how websites and applications work.
                                I began learning HTML, CSS, and JavaScript, React and gradually
                                started building small projects to improve my practical skills.
                            </p>

                            <p className='text-gray-300 mb-12'>Along with my studies, I continue exploring new tools and technologies to grow as a developer.
                                I also had the opportunity to work as a Technical Intern with the Career Katta initiative,
                                where I gained real experience handling website-related tasks.
                                My goal is to become a skilled full-stack developer and build impactful digital solutions.
                            </p>
                        </div>

                        {/* cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data, index) => (
                                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                        <div className='text-purple text-4xl mb-4'>
                                            <data.icon />
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400'>{data.description}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </motion.div>
                </div >
            </div >

        </motion.div >
    )
}

export default About
