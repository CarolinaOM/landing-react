import React from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks =[
    {
        id:1,
        title:"Inicio",
        link:"/"
    },
    {
        id:2,
        title:"Nosotros",
        link:"#"
    },
    {
        id:3,
        title:"Contacto",
        link:"#"
    },
    {
        id:4,
        title:"Soporte",
        link:"#"
    },
]

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
         
         { /* Logo Navar */}
        <div>
            <img src={Logo} alt= 'Logo del sitio' className='w-[100px]' />
        </div>

         { /* Navegación desktop */}
        <div>
            <ul className='flex sm:space-x-8 space-x-4'>
                {navbarlinks.map((link)=>(
                    <li key={link.id}>
                        <a className='text-white sm:text-lg text-sm hover:text-sky-200 
                        transition-trasform hover:scale-110 transform inline-block duration-300' 
                        href={link.link}> {link.title} </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
