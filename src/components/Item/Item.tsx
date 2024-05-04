import { Button, useDisclosure } from "@nextui-org/react";
import { MdEditNote } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RiMapPinTimeLine } from "react-icons/ri";
import { todo } from "../../utils/types";
import { identifyDate } from "../../utils/customFunctions";
import { AnimatePresence, motion } from "framer-motion";
import { DeleteModal } from "../Modal/DeleteModal";
import { useState } from "react";
import { EditModal } from "../Modal/EditModal";
import useWindowSize from "react-use/lib/useWindowSize";
import ConfettiExplosion from "react-confetti-explosion";
import { useHandleCompleteTask } from "./hooks/useHandleCompleteTask";
import { variants } from "./utils";
import { useHandleStarredAction } from "./hooks/useHandleStarredAction";
export function Item({ data }: { data: todo }) {
  const [animateOnDelete, setAnimateOnDelete] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { width, height } = useWindowSize();
  const { handleComplete, completed, completedChanged } =
    useHandleCompleteTask(data);
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const { handleStarredAction, starred } = useHandleStarredAction(
    data.id,
    data.isStarred
  );
  return (
    <AnimatePresence>
      <motion.li
        layout
        className={`relative flex items-center justify-between w-full gap-3 p-3 shadow-md rounded-md ${
          completed && completedChanged ? "completed" : ""
        } ${data.isCompleted ? "opacity-brighter" : ""}`}
        variants={animateOnDelete ? variants.onExit : variants.item}
        initial="initial"
        animate="after"
      >
        <div className="flex items-center gap-4">
          <input
            defaultChecked={data.isCompleted}
            onChange={handleComplete}
            className="w-5 h-5 accent-orange-400 cursor-pointer flex-shrink-0"
            type="checkbox"
          />
          <div>
            <p
              className={`font-medium cursor-pointer hover:opacity-85 overflow-wrap transition line ${
                completed && completedChanged ? "animated-line" : ""
              } ${data.isCompleted ? "line-through" : ""}`}
            >
              {data.title}
            </p>
            <time
              className={`flex items-center gap-1 text-[12px] text-orange-${
                identifyDate(data.created_at) == "Today" ? "500" : "400"
              }`}
              dateTime={data.created_time}
            >
              <FaCalendarDays />
              {identifyDate(data.created_at)}
              <span className="flex items-center font-medium gap-1 ml-2">
                <RiMapPinTimeLine size={14} />
                {data.created_time}
              </span>
            </time>
          </div>
        </div>
        <div className="flex gap-2">
          <Button isIconOnly color="primary" onPress={onOpenEdit}>
            <MdEditNote size={18} />
          </Button>
          <Button isIconOnly color="danger" onPress={onOpen}>
            <MdOutlineDelete size={18} />
          </Button>
          <Button
            isIconOnly
            color="warning"
            variant="flat"
            onClick={handleStarredAction}
          >
            {starred ? <FaStar size={17} /> : <CiStar size={20} />}
          </Button>
        </div>
        <DeleteModal
          setAnimateOnDelete={setAnimateOnDelete}
          onOpenChange={onOpenChange}
          isOpen={isOpen}
          itemId={data.id}
        />
        <EditModal
          isOpen={isOpenEdit}
          onOpenChange={onOpenChangeEdit}
          itemId={data.id}
        />
        {completedChanged && completed ? (
          <ConfettiExplosion
            particleCount={30}
            className="absolute left-0 top-0"
            width={width}
            height={height}
          />
        ) : (
          ""
        )}
      </motion.li>
    </AnimatePresence>
  );
}
