import { motion } from "framer-motion";

const Footer = () => {
  const text = "All Right Reserved | Lokendra Nath";
  const letters = text.split("");

  return (
    <footer className=" w-full h-20 flex items-center justify-center flex-col gap-4">
      <ul className="flex gap-10">
        <li>
          <a href="#about" className="font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="#skill" className="font-semibold">
            Skills
          </a>
        </li>
        <li>
          <a href="#project" className="font-semibold">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="font-semibold">
            Contact
          </a>
        </li>
      </ul>
      <p className="font-light mt-3 text-stone-800 tracking-widest text-sm mb-10 font-lobstar">
        &#169;
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, repeat: 1, duration: 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </footer>
  );
};
export default Footer;
