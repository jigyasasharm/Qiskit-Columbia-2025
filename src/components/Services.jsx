import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "framer-motion";

const Services = () => {

    const servicesData = [
        {
          title: 'Qiskit Learning',
          description: 'Hands-on Qiskit notebooks to practice quantum circuits and real applications.',
          icon: assets.ads_icon
       },
        {
          title: 'Quantum Hackathons & Beyond',
          description: 'A collaborative event where students and professionals solve real-world quantum challenges.',
          icon: assets.marketing_icon
        },
        {
            title: 'Speakers & Mentors',
            description: 'Experts from IBM and industry guide participants with insights and mentorship.',
            icon: assets.content_icon,
        },
        {
            title: 'Workshops & Social Media',
            description: 'Hands-on workshops plus regular social updates to keep everyone engaged.',
            icon: assets.social_icon,
        },
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-60 -left-70 -z-1 dark:hidden'/>

    <Title 
      title='Qiskit Fall Fest 2025' 
      desc='Inspiring learning and discovery through quantum events. Join us to explore, innovate, and connect in the quantum realm.' 
    />

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>

    </motion.div>
  )
}

export default Services

