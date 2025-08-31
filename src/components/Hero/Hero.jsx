import React from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"
import { motion } from "framer-motion"
import { slipeUp, slipeInFromSide } from '../../Utility/animation'


const Hero = () => {
    return (
        <section className='mt-36'>

            <div className='grid grid-cols-1 md:grid-cols-2'>

                {/* Textos y descripcion */}
                <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
                    <motion.img src={Logo} alt='Logo del juego'
                        variants={slipeUp(0.2)}
                        initial="initial"
                        animate="animate"
                        className='max-w-xs md:max-w-sm mx-auto'
                    />
                    <motion.p className='py-12 text-white text-center md:text-left'
                        variants={slipeUp(0.3)}
                        initial="initial"
                        animate="animate"
                    >
                        ¡Descubre un mundo de aventura y diversión! Juega, explora y compite con tus amigos en un universo lleno de desafíos y sorpresas.
                    </motion.p>
                    <motion.div className='flex justify-center md:justify-start gap-4'
                        variants={slipeUp(1)}
                        initial="initial"
                        animate="animate"
                    >
                        <a href="https://www.youtube.com/watch?v=BfZM4dNlu6o" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='bg-purple-600 py-2 px-12 text-white rounded-3xl hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
                            Ver video del juego <i class="bi bi-youtube"></i></a>
                    </motion.div>
                </div>

                {/*Imagen*/}
                <motion.div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
                    variants={slipeInFromSide("right", 0.5)}
                    initial="initial"
                    animate="animate"
                >
                    <img src={Personaje} alt='Personaje del Juego' className='max-w-xs md:max-w-sm mx-auto' />
                </motion.div>

            </div>
        </section>
    )
}

export default Hero