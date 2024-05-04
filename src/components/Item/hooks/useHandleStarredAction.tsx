import { useState } from "react";
import { useDispatch } from "react-redux";
import { editIsStarred } from "../../../store/todo/todoSlice";
import toast from "react-hot-toast";
import starredAudio from "../../../assets/audio/starred.mp3";
export function useHandleStarredAction(
  id: number | boolean,
  isStarred: boolean
) {
  const dispatch = useDispatch();
  const [starred, setStarred] = useState(isStarred);
  const audioStarred = new Audio(starredAudio);
  function handleStarredAction() {
    setStarred((prev) => !prev);
    console.log(starred);
    dispatch(editIsStarred({ id, isStarred: !isStarred }));
    if (!starred) {
      toast.success("You starred the task !");
      audioStarred.play();
    } else {
      toast.success("You unstarred the task !");
    }
  }

  return { handleStarredAction, starred, setStarred };
}
