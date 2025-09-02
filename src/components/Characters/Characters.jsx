import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../Utility/animation';

//imágenes
import PeachImage from "../../assets/Peach.png";
import LucyImage from '../../assets/Lucy.png';
import GrapeImage from '../../assets/Grape.png';
import MalauvaImage from '../../assets/Malauva.png';
import EspadachinaImage from '../../assets/Espadachina.png';
import VaqueraImage from '../../assets/Vaquera.png';
import DetectiveImage from '../../assets/Detective.png';
import HieloImage from '../../assets/Hielo.png';

const characters = [
  {
    name: "Princesa Peach",
    description: "La valiente protagonista de la historia. Peach debe usar sus habilidades para transformarse y salvar a los actores del Teatro Destello.",
    color: "bg-pink-500",
    image: PeachImage // Agregamos la ruta de la imagen
  },
  {
    name: "Lucy",
    description: "La servicial guardiana del Teatro Esplendor quien le concede a Peach la cinta que le permite interactuar con el escenario y transformarse.",
    color: "bg-sky-400",
    image: LucyImage // Agregamos la ruta de la imagen
  },
  {
    name: "Grape",
    description: "La líder de la Compañía Malauva. Grape se apoderó del teatro y cambió la historia de cada obra para convertirla en una tragedia.",
    color: "bg-purple-700",
    image: GrapeImage // Agregamos la ruta de la imagen
  },
  {
    name: "La Compañía Malauva",
    description: "Un grupo de villanos que ayudan a Grape a aterrorizar el teatro. Son los antagonistas a los que Peach debe enfrentar en cada obra.",
    color: "bg-gray-600",
    image: MalauvaImage // Agregamos la ruta de la imagen
  },
  {
    name: "Peach Espadachina",
    description: "Una de las primeras transformaciones de Peach. Como espadachina, usa su florete para combatir a los enemigos y proteger a los personajes de las obras.",
    color: "bg-yellow-500",
    image: EspadachinaImage // Agregamos la ruta de la imagen
  },
  {
    name: "Peach Vaquera",
    description: "En esta transformación, Peach usa un lazo y su destreza de vaquera para atrapar a los enemigos y moverse por los escenarios del Lejano Oeste.",
    color: "bg-yellow-800",
    image: VaqueraImage // Agregamos la ruta de la imagen
  },
  {
    name: "Peach Detective",
    description: "Equipada con una lupa, Peach se convierte en una detective. Debe usar su ingenio para resolver misterios y encontrar pistas en los escenarios.",
    color: "bg-blue-600",
    image: DetectiveImage // Agregamos la ruta de la imagen
  },
  {
    name: "Peach Patinadora sobre Hielo",
    description: "Con sus patines, Peach desliza y realiza giros elegantes. Debe usar su agilidad para navegar por escenarios helados y superar obstáculos.",
    color: "bg-blue-900",
    image: HieloImage // Agregamos la ruta de la imagen
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
              className={`p-6 rounded-lg shadow-lg ${character.color} flex flex-col sm:flex-row items-center justify-center text-center sm:text-left`} // Agregamos flexbox para alinear imagen y texto
              variants={slideUp(0.4 + index * 0.1)} 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Mostramos la imagen del personaje */}
              <img 
                src={character.image} 
                alt={character.name} 
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-4 sm:mb-0 sm:mr-6" // Ajusta el tamaño y margen
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
                <p className="text-lg">{character.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;