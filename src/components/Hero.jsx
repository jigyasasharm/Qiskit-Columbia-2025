import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[70px] font-medium xl:leading-[95px] max-w-5xl'>Connecting minds through <span className='bg-gradient-to-r from-[#1408c3] to-[#4d5dea] bg-clip-text text-transparent'>Entanglement</span></motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        className='text-sm sm:text-lg xl:text-[18px] font-medium text-gray-600 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Where ideas, qubits, and communities come together building stronger connections at Qiskit Fall Fest of Columbia.</motion.p>

        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        
        className="relative">
  <img
    src={assets.hero_img}
    alt="IBM Columbia collaboration"
    className="w-screen h-[47vh] object-cover rounded-b-[48px]"/>

<p className="mt-8 text-2xl sm:text-3xl font-bold text-center">
  Qiskit Fall Fest 2025
</p>
            <img src={assets.bgImage1} alt="" className='absolute -top-40 scale-150 -right-70 sm:-top-70 sm:-right-30  -z-1 dark:hidden'/>
        </motion.div>
      
    </div>
  )
}

export default Hero
