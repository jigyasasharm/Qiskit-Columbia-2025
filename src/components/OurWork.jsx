import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "framer-motion";

const OurWork = () => {

  const registrationLink = '/register' // <-- update to your actual registration URL

  // Expanded to 4 items (you can replace images/titles as needed)
  const workData = [
    {
      title: 'Emil Kovacev',
      description: 'IBM, Test Engineer',
      image: assets.work_dashboard_management
    },
    {
      title: 'Dylan Herman',
      description: 'JP Morgan, Quantum Algorithms Researcher',
      image: assets.work_fitness_app
    },
    {
      title: 'Mark Jackson',
      description: 'Senior Quantum, Evangelist at Quantinuum',
      image: assets.work_fitness_app // replace with another asset if available
    },
    {
      title: 'Henry Yuen',
      description: 'Columbia University',
      image: assets.work_dashboard_management // replace with another asset if available
    },
  ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='our-work'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-15 text-gray-700 dark:text-white'
    >
      <Title title='Qiskit Fall Fest 2025' desc='November 7, 2025'/>

      {/* Landscape banner linking to registration */}
      <motion.a
        <a href="https://cglink.me/2iD/r1931586">Register</a>
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='w-full max-w-5xl'
      >
        {/* Replace with your landscape image asset */}
        <img
          src={assets.work_fitness_app} 
          alt="Register"
          className='w-full rounded-xl object-cover hover:opacity-90 transition-all duration-300'
        />
      </motion.a>

      {/* Gallery now 4 per row on large screens */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl'>
        {workData.map((work, index)=>(
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className='hover:scale-102 duration-500 transition-all cursor-pointer'
          >
            <img src={work.image} className='w-full rounded-xl' alt="" />
            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}

export default OurWork
