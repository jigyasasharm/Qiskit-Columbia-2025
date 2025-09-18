import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}, [theme]);


  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor Position tracking
  const mouse = useRef({x: 0, y: 0})
  const position = useRef({x: 0, y: 0})

  useEffect(()=>{
    const handleMouseMove = (e)=>{
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
    }

  },[])
 

  return (
    <div
  className={`relative min-h-screen transition-colors
    ${theme === 'dark'
      ? 'bg-[radial-gradient(ellipse_at_center,_#2a3a6e_0%,_#172652_42%,_#0a1633_85%)]'
      : 'bg-white'}`}>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Teams />
      <TrustedBy />
      <Services />
      <OurWork />
      <ContactUs />
      <Footer theme={theme}/>

    {/* Custom Cursor Ring */}
    <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'
     style={{transition: 'transform 0.1s ease-out'}}></div>

    {/* Custom Cursor Dot */}
    <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'></div>

    </div>
  )
}

export default App
