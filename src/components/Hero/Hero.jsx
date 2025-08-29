import React from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"

const Hero = () => {
  return (
    <section className='mt-36'>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        
          {/* Textos y descripcion */}
          <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
            <img src={Logo} alt='Logo del juego'/>
            <p className='py-12 text-white'>
              Mundo del juego jajaja para poder divertinos y practicar
            </p>
            <div className='flex justify-center g'>
              <a className='bg-purple-600 py-2 px-12 text-white rounded-3xl hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
                Jugar ahora <i className="bi bi-controller text-xl ml-2"></i></a>
            </div>
          </div>

          {/*Imagen*/}
          <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
            <img  src={Personaje} alt='Personaje del Juego' />
          </div>

      </div>
    </section>
  )
}

export default Hero
