import { Item } from "../Item";
import { todo } from "../../utils/types";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useContext, useEffect } from "react";
import { NotFound } from "../NotFound";
import { useTodos } from "../../hooks/useTodos";
import { FilterContext } from "../context/FilterContext";
import { container } from "./utils";
import { useDispatch } from "react-redux";
import {
  alphaOrderController,
  completedOrderController,
  recentOrderController,
  starredOrderController,
} from "./utils/customFunctions";
export function List() {
  const { todos } = useTodos();
  const [scope, animate] = useAnimate();
  const filters = useContext(FilterContext);
  const dispatch = useDispatch();
  useEffect(() => {
    animate("li", { opacity: 1 });
  });
  useEffect(() => {
    const clonedTodos = [...todos];
    recentOrderController(dispatch, filters?.recentOrder, clonedTodos);
  }, [filters?.recentOrder]);
  useEffect(() => {
    const clonedTodos = [...todos];
    alphaOrderController(dispatch, filters?.alphaOrder, clonedTodos);
  }, [filters?.alphaOrder]);
  useEffect(() => {
    const clonedTodos = [...todos];
    completedOrderController(dispatch, filters?.doneOrder, clonedTodos);
  }, [filters?.doneOrder]);
  useEffect(() => {
    const clonedTodos = [...todos];
    starredOrderController(dispatch, filters?.starredOrder, clonedTodos);
  }, [filters?.starredOrder]);
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
