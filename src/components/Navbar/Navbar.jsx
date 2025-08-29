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
      <div>

        <div>
            <img src={Logo} alt= 'Logo del sitio' className='w-[100px]' />
        </div>

        <div>
            <ul>
                {navbarlinks.map((link)=>(
                    <li key={link.id}>
                        <a href={link.link}> {link.title} </a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                <li>Redes</li>
                <li>Redes</li>
            </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
