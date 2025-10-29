import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "framer-motion";

const OurWork = () => {

  // Keep just one item
  const workData = [
    {
      title: 'Hackathon',
      description: 'Time to Discuss Quantum Computing and its applications.',
      image: assets.work_dashboard_management
    }
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
      <Title title='Qiskit Fall Fest 2025'/>

      {/* One-column grid so only one card shows */}
      <div className='grid grid-cols-1 gap-6 w-full max-w-2xl'>
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
