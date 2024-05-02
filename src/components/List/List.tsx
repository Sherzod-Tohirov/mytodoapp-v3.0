import { useSelector } from "react-redux";
import { Item } from "../Item";
import { RootState } from "../../store/store";
import { todo } from "../../utils/types";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { NotFound } from "../NotFound";
export function List() {
  const [scope, animate] = useAnimate();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  useEffect(() => {
    animate("li", { opacity: 1 });
  });

  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <AnimatePresence>
      <motion.ul
        className="flex flex-col gap-4 items-center w-full"
        variants={container}
        initial="hidden"
        animate="visible"
        ref={scope}
      >
        {todos.length ? (
          todos.map((todo: todo) => <Item data={todo} key={todo.id} />)
        ) : (
          <NotFound />
        )}
      </motion.ul>
    </AnimatePresence>
  );
}
