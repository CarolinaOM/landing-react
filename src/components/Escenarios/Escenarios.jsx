import React from 'react';
import { motion } from 'framer-motion';
import { slipeUp } from '../../Utility/animation';

const stages = [
  {
    name: "Teatro Destello",
    description: "El teatro principal donde comienza toda la aventura. Aquí, Peach debe recuperar el control de las obras para devolver la felicidad al lugar.",
    color: "bg-purple-900"
  },
  {
    name: "Escenario del Oeste",
    description: "Un mundo inspirado en el salvaje oeste. Peach debe transformarse en vaquera para superar los desafíos de este escenario.",
    color: "bg-yellow-800"
  },
  {
    name: "Escenario Ninja",
    description: "Un nivel misterioso en un bosque de bambú. Como Peach ninja, el sigilo y la velocidad son la clave para superar los desafíos.",
    color: "bg-gray-800"
  },
  {
    name: "Escenario de Pastelería",
    description: "Un mundo lleno de dulces y pasteles. Peach debe usar su traje de pastelera para hornear pasteles gigantes y superar los obstáculos azucarados.",
    color: "bg-pink-400"
  },
  {
    name: "Escenario de la Bahía",
    description: "Un mundo acuático donde Peach se convierte en una sirena para nadar y usar su voz para resolver acertijos.",
    color: "bg-blue-400"
  },
  {
    name: "Escenario de los Cielos",
    description: "Un escenario en las nubes, donde Peach se transforma en una princesa de cuento de hadas para volar y luchar en el aire.",
    color: "bg-sky-200"
  },
  {
    name: "Escenario de los Dinobabies",
    description: "Un mundo prehistórico donde Peach tiene que convertirse en un dinosaurio para superar los obstáculos y resolver los misterios.",
    color: "bg-green-700"
  },
];

const Escenarios = () => {
  return (
    <section id="escenarios" className="pt-32 py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-center text-4xl font-bold mb-10"
          variants={slipeUp(0.2)}
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
              className={`p-6 rounded-lg shadow-lg ${stage.color}`}
              variants={slipeUp(0.4 + index * 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{stage.name}</h3>
              <p className="text-lg">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Escenarios;