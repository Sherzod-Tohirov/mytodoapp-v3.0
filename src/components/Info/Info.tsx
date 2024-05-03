import { Badge } from "@nextui-org/react";
import { LuListTodo } from "react-icons/lu";
import { useTodos } from "../../hooks/useTodos";
export function Info() {
  const { todos } = useTodos();
  return (
    <div className="absolute top-10 left-2 flex flex-col gap-4">
      <Badge
        size="sm"
        color="danger"
        content={todos.length < 100 ? todos.length : "99+"}
        shape="circle"
      >
        <LuListTodo size={25} />
      </Badge>
    </div>
  );
}
