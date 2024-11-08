import { BIO } from "../constants";
import { motion } from "framer-motion";

const Bio = () => {
    return (
        <section className="max-w-4xl mx-auto flex flex-col gap-12 pt-20 px-4" id="bio">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-3xl font-bold lg:text-4xl mb-8"
            >
                Bio
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {BIO.map((bio, index) => (
                    <motion.div // Changed from <motion.p> to <motion.div>
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.5 }}
                        key={index}
                        className="mb-6 text-lg leading-relaxed text-white lg:text-xl line-clamp-4"
                        style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            WebkitLineClamp: 4,
                        }}
                    >
                        {bio}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Bio;
