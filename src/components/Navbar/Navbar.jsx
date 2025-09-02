import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import React, { useState } from 'react';

const navbarLinks = [
    {
        id: 1,
        title: "Inicio",
        link: "/"
    },
    {
        id: 2,
        title: "Personajes",
        link: "/Characters" 
    },
    {
        id: 3,
        title: "Escenarios",
        link: "/Stages" 
    },
    {
        id: 4,
        title: "Noticias",
        link: "/News"
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-md z-50'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                {/* Navbar Logo */}
                <div>
                    <Link to="/">
                        <img src={Logo} alt='Logo del sitio' className='w-[100px]' />
                    </Link>
                </div>

                {/* Hamburger button - Visible on small screens only */}
                <button onClick={toggleMenu} className='md:hidden text-white'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop navigation - Hidden on small screens, visible on MD and above */}
                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => ( 
                            <li key={link.id}>
                                <Link className='text-white sm:text-lg text-sm hover:text-sky-200 
                                transition-transform hover:scale-110 transform inline-block duration-300'
                                    to={link.link}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link) => ( 
                        <li key={link.id} className='py-2 text-center'>
                            <Link className='text-white hover:text-sky-200'
                                to={link.link} onClick={() => setIsOpen(false)}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;