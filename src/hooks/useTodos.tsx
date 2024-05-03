import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function useTodos() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  return { todos };
}
