import { ChangeEvent, useState } from "react";
import { todo } from "../../../utils/types";
import { useDispatch } from "react-redux";
import { editIsCompleted } from "../../../store/todo/todoSlice";
import toast from "react-hot-toast";

export function useHandleCompleteTask(data: todo) {
  
  const [completed, setCompleted] = useState(data.isCompleted);
  const [completedChanged, setCompletedChanged] = useState(false);
  const dispatch = useDispatch();
  function handleComplete(e: ChangeEvent<HTMLInputElement>) {
    setCompletedChanged(true);
    dispatch(editIsCompleted({ id: data.id, isCompleted: e.target.checked }));
    setCompleted((prev) => !prev);
    if (!completed) {
      toast.success("You completed task !");
    } else toast.success("You undone task !");
  }

  return {
    handleComplete,
    completed,
    setCompleted,
    completedChanged,
    setCompletedChanged,
  };
}
