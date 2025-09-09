import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll position check करने के लिए
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 bg-gradient-to-b to-[#027cc9cc] from-[#b300b3cc] rounded-full text-white
                     flex items-center justify-center shadow-lg 
                     focus:outline-none focus:ring-opacity-50
                     z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
