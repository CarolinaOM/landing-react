import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../Utility/animation'; 

import TeatroImage from '../../assets/Teatro.jpg';
import OesteImage from '../../assets/Oeste.jpg';
import NinjaImage from '../../assets/Ninja.jpg';
import PasteleriaImage from '../../assets/Pasteleria.jpg';
import BahiaImage from '../../assets/Bahia.jpg';
import CielosImage from '../../assets/Cielos.jpg';


const stages = [ 
  {
    name: "Teatro Destello",
    description: "El teatro principal donde comienza toda la aventura. Aquí, Peach debe recuperar el control de las obras para devolver la felicidad al lugar.",
    color: "bg-purple-900",
    image: TeatroImage 
  },
  {
    name: "Escenario del Oeste",
    description: "Un mundo inspirado en el salvaje oeste. Peach debe transformarse en vaquera para superar los desafíos de este escenario.",
    color: "bg-yellow-800",
    image: OesteImage 
  },
  {
    name: "Escenario Ninja",
    description: "Un nivel misterioso en un bosque de bambú. Como Peach ninja, el sigilo y la velocidad son la clave para superar los desafíos.",
    color: "bg-gray-800",
    image: NinjaImage 
  },
  {
    name: "Escenario de Pastelería",
    description: "Un mundo lleno de dulces y pasteles. Peach debe usar su traje de pastelera para hornear pasteles gigantes y superar los obstáculos azucarados.",
    color: "bg-pink-500",
    image: PasteleriaImage 
  },
  {
    name: "Escenario de la Bahía",
    description: "Un mundo acuático donde Peach se convierte en una sirena para nadar y usar su voz para resolver acertijos.",
    color: "bg-blue-500",
    image: BahiaImage 
  },
  {
    name: "Escenario de los Cielos",
    description: "Un escenario en las nubes, donde Peach se transforma en una princesa de cuento de hadas para volar y luchar en el aire.",
    color: "bg-sky-900",
    image: CielosImage 
  },
];

const Stages = () => { 
  return (
    <section id="stages" className="pt-32 py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-center text-4xl font-bold mb-10"
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Mundos y Escenarios
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${stage.color} flex flex-col sm:flex-row items-center justify-center text-center sm:text-left`}
              variants={slideUp(0.4 + index * 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img 
                src={stage.image} 
                alt={stage.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain mb-4 sm:mb-0 sm:mr-6" // Aquí están los cambios de tamaño
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">{stage.name}</h3>
                <p className="text-lg">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stages;