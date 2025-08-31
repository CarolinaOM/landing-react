import React from 'react';
import { motion } from 'framer-motion';
import { slipeUp } from '../../Utility/animation';

const Noticias = () => {
  return (
    <section id="noticias" className="pt-32 py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-center text-4xl font-bold mb-10"
          variants={slipeUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Noticias Recientes
        </motion.h2>

        {/* Noticia 1 */}
        <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg shadow-lg mb-8">
            {/* Se ha quitado la etiqueta de imagen de aquí */}
            <motion.h3
              className="text-2xl font-bold mb-2"
              variants={slipeUp(0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              ¡Princess Peach Showtime! ya tiene fecha de lanzamiento
            </motion.h3>
            <motion.p
              className="text-lg mb-4"
              variants={slipeUp(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              ¡La espera ha terminado! Nintendo ha anunciado que Princess Peach Showtime! se lanzará el 22 de marzo de 2024. ¡Prepárate para una aventura teatral inolvidable! El juego, que ha generado gran expectación, permitirá a los jugadores explorar un mundo mágico donde Peach deberá usar diferentes transformaciones para salvar el Sparkle Theater.
            </motion.p>
             <motion.p
              className="text-sm text-gray-400"
              variants={slipeUp(0.7)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              Fuente: Anuncio oficial de Nintendo.
            </motion.p>
        </div>

        {/* Noticia 2 */}
        <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg shadow-lg">
             {/* Se ha quitado la etiqueta de imagen de aquí */}
            <motion.h3
              className="text-2xl font-bold mb-2"
              variants={slipeUp(0.9)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              Nuevos trajes y habilidades de Peach revelados
            </motion.h3>
            <motion.p
              className="text-lg mb-4"
              variants={slipeUp(1.0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              En el último tráiler, Nintendo ha mostrado nuevas transformaciones de Peach, incluyendo un traje de vaquera con lazo y un disfraz de detective para resolver misterios. Cada traje le otorga a Peach habilidades únicas que son necesarias para superar los desafíos del juego.
            </motion.p>
             <motion.p
              className="text-sm text-gray-400"
              variants={slipeUp(1.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              Fuente: Trailer de Nintendo.
            </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Noticias;