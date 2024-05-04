import { Badge, Tooltip } from "@nextui-org/react";
import { LuListTodo } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

import { useTodos } from "../../hooks/useTodos";
import { useState } from "react";
export function Info() {
  const { todos } = useTodos();
  const [isOpenTodos, setIsOpenTodos] = useState(false);
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  return (
    <div className="absolute top-10 left-2 flex lg:flex-row  gap-4">
      <Tooltip
        isOpen={isOpenTodos}
        onOpenChange={(open) => setIsOpenTodos(open)}
        content={`You have ${todos.length} todos !`}
        closeDelay={1000}
        offset={20}
      >
        <Badge
          size="sm"
          color="danger"
          content={todos.length < 100 ? todos.length : "99+"}
          shape="circle"
        >
          <LuListTodo size={25} />
        </Badge>
      </Tooltip>
      <Tooltip
        isOpen={isOpenNotify}
        onOpenChange={(open) => setIsOpenNotify(open)}
        content={`No notifications for now !`}
        closeDelay={1000}
        offset={20}
      >
        <Badge
          className="min-[300px]:hidden lg:flex"
          size="sm"
          color="danger"
          content={"0"}
          shape="circle"
        >
          <IoIosNotificationsOutline
            className="min-[300px]:hidden lg:block"
            size={25}
          />
        </Badge>
      </Tooltip>
    </div>
  );
}
