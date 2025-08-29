import React, {useState} from 'react'
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

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
         
         { /* Logo Navar */}
        <div>
            <img src={Logo} alt= 'Logo del sitio' className='w-[100px]' />
        </div>

         { /* Boton de hamburguesa */}
         <button onClick={toggleMenu} className='md:hidden text-white'>
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
            >
                {isOpen ? ( <path 
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                />) : (<path 
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                />)}
            </svg>
         </button>

         { /* Navegación desktop */}
        <div className='hidden md:block'>
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

      {/*Menu movil */}
         <div className={`md:hidden absolute w-full bg-purple-950 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className='flex flex-col px-4 py-2'>
                {navbarlinks.map((link)=>(
                    <li key={link.id} className='py-2 text-center'>
                        <a className='text-white hover:text-sky-200' 
                        href={link.link} onClick={()=>setIsOpen(false)}> 
                        {link.title} </a>
                    </li>
                ))}
            </ul>
         </div>

    </nav>
  )
}

export default Navbar
