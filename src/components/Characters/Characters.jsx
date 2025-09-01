import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../Utility/animation';

const characters = [
  {
    name: "Princesa Peach",
    description: "La valiente protagonista de la historia. Peach debe usar sus habilidades para transformarse y salvar a los actores del Teatro Destello.",
    color: "bg-pink-500"
  },
  {
    name: "Luz",
    description: "Una pequeña hada y guía de Peach. Luz tiene el poder de devolver la vida al teatro y ayuda a Peach a encontrar las transformaciones necesarias.",
    color: "bg-sky-400"
  },
  {
    name: "Grape",
    description: "La líder de la Compañía Malauva. Grape se apoderó del teatro y cambió la historia de cada obra para convertirla en una tragedia.",
    color: "bg-purple-700"
  },
  {
    name: "La Compañía Malauva",
    description: "Un grupo de villanos que ayudan a Grape a aterrorizar el teatro. Son los antagonistas a los que Peach debe enfrentar en cada obra.",
    color: "bg-gray-600"
  },
  {
    name: "Peach Espadachina",
    description: "Una de las primeras transformaciones de Peach. Como espadachina, usa su florete para combatir a los enemigos y proteger a los personajes de las obras.",
    color: "bg-yellow-500"
  },
  {
    name: "Peach Vaquera",
    description: "En esta transformación, Peach usa un lazo y su destreza de vaquera para atrapar a los enemigos y moverse por los escenarios del Lejano Oeste.",
    color: "bg-yellow-800"
  },
  {
    name: "Peach Detective",
    description: "Equipada con una lupa, Peach se convierte en una detective. Debe usar su ingenio para resolver misterios y encontrar pistas en los escenarios.",
    color: "bg-blue-600"
  },
  {
    name: "Peach Patinadora sobre Hielo",
    description: "Con sus patines, Peach desliza y realiza giros elegantes. Debe usar su agilidad para navegar por escenarios helados y superar obstáculos.",
    color: "bg-blue-900"
  },
];

const Characters = () => { 
  return (
    <section id="characters" className="pt-32 py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-center text-4xl font-bold mb-10"
          variants={slideUp(0.2)} 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Personajes Principales
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${character.color}`}
              variants={slideUp(0.4 + index * 0.1)} 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
              <p className="text-lg">{character.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;