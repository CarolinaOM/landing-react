import { motion } from 'framer-motion';
import { slideUp } from '../../Utility/animation';

const News = () => {
  return (
    <section id="news" className="pt-32 py-20 px-4 md:px-10 lg:px-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-center text-4xl font-bold mb-10"
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          Noticias Recientes
        </motion.h2>

        {/* News Article 1 */}
        <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg shadow-lg mb-8">
          <motion.h3
            className="text-2xl font-bold mb-2"
            variants={slideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            ¡Princess Peach Showtime! ya tiene fecha de lanzamiento
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            variants={slideUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            ¡La espera ha terminado! Nintendo ha anunciado que Princess Peach Showtime! se lanzará el 22 de marzo de 2024. ¡Prepárate para una aventura teatral inolvidable! El juego, que ha generado gran expectación, permitirá a los jugadores explorar un mundo mágico donde Peach deberá usar diferentes transformaciones para salvar el Sparkle Theater.
          </motion.p>
          <a
            href="https://www.20minutos.es/videojuegos/noticia/5229123/0/peach-entra-escena-como-protagonista-su-propia-aventura-princess-peach-showtime-para-nintendo-switch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white underline transition-colors duration-300 block"
          >
            <motion.p
              variants={slideUp(0.7)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              Fuente: 20 Minutos.
            </motion.p>
          </a>
        </div>

        {/* News Article 2 */}
        <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg shadow-lg">
          <motion.h3
            className="text-2xl font-bold mb-2"
            variants={slideUp(0.9)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            Todo lo que necesitas saber sobre Princess Peach: Showtime!
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            variants={slideUp(1.0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            Con la llegada del juego, los fans están ansiosos por conocer todos los detalles de esta nueva aventura. Te contamos todo lo que necesitas saber sobre la trama, los nuevos personajes, las habilidades de Peach y las novedades que trae este título.
          </motion.p>
          <a
            href="https://www.nintenderos.com/2024/01/princess-peach-showtime-todo-lo-que-necesitas-saber-sobre-el-nuevo-juego-de-nintendo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white underline transition-colors duration-300 block"
          >
            <motion.p
              variants={slideUp(1.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              Fuente: Nintenderos.
            </motion.p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;