import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TARGET_TEXT = "Get Started"; 
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        backgroundColor: '#000', 
        color: '#FFF', 
      }}
      whileTap={{
        scale: 0.975,
      }}
      
      className="relative overflow-hidden rounded-lg bg-transparent px-4 py-2 font-mono font-medium uppercase text-white transition-colors border "
      style={{ borderColor: 'black', borderWidth: '2px' }}
    >
      <div className="relative z-10">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default EncryptButton;