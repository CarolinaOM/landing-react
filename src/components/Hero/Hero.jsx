import React from 'react';
import { motion } from "framer-motion";
import Personaje from "../../assets/Personaje.png"; 
import Logo from "../../assets/Logo.png"; 
import { slideUp, slideInFromSide } from '../../Utility/animation';

const Hero = () => { 
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Text and description */}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img src={Logo} alt='Logo del juego'
            variants={slideUp(0.2)} 
            initial="initial"
            animate="animate"
            className='max-w-xs md:max-w-sm mx-auto'
          />
          <motion.p className='py-12 text-white text-center' // ✅ Texto centrado
            variants={slideUp(0.3)} 
            initial="initial"
            animate="animate"
          >
            ¡Descubre un mundo de aventura y diversión! Juega, explora y compite con tus amigos en un universo lleno de desafíos y sorpresas.
          </motion.p>
          <motion.div className='flex justify-center md:justify-center gap-4' // ✅ Botón centrado
            variants={slideUp(1)} 
            initial="initial"
            animate="animate"
          >
            <a href="https://www.youtube.com/watch?v=BfZM4dNlu6o" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='bg-purple-600 py-2 px-12 text-white rounded-3xl hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
              Ver video del juego <i className="bi bi-youtube"></i>
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
          variants={slideInFromSide("right", 0.5)} 
          initial="initial"
          animate="animate"
        >
          <img src={Personaje} alt='Personaje del Juego' className='max-w-xs md:max-w-[20rem] mx-auto' /> 
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;