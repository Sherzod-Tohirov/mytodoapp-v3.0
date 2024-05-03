import { Item } from "../Item";
import { todo } from "../../utils/types";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { NotFound } from "../NotFound";
import { useTodos } from "../../hooks/useTodos";
import { FilterContext } from "../context/FilterContext";
import { container } from "./utils";
export function List() {
  const { todos } = useTodos();
  const [scope, animate] = useAnimate();
  const filters = useContext(FilterContext);
  
  useEffect(() => {
    animate("li", { opacity: 1 });
  });
 
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
