import { motion } from "framer-motion";
import prize from "../../assets/prize.gif";
import { TypeAnimation } from "react-type-animation";
export function NotFound() {
  const variants = {
    li: {
      initial: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 1,
        },
      },
    },
    p: {
      initial: {
        y: 100,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <motion.li
      variants={variants.li}
      initial="initial"
      animate="visible"
      className="flex flex-col items-center justify-center gap-4"
    >
      <img src={prize} width={200} alt="Prize gif" />
      <motion.p variants={variants.p} className="text-3xl font-light text-orange-400">
        <TypeAnimation 
         sequence={["Awesome !", 3000, "Good job !", 3000, "Outstanding !", 3000]}
         wrapper="span"
          speed={10}
          repeat={Infinity}
        />

      </motion.p>
      <motion.p variants={variants.p} className="text-xl text-slate-600 font-thin">
        No todos on the list yet !
      </motion.p>
    </motion.li>
  );
}
