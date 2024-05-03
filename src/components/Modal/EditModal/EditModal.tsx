import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import edit from "../../../assets/edit.gif";
import { EditModalType, todo, todoTitle } from "../../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { MdEditNote } from "react-icons/md";
import { TbPencilCancel } from "react-icons/tb";
import { RootState } from "../../../store/store";
import { useForm } from "react-hook-form";
import { editTodo } from "../../../store/todo/todoSlice";
import toast from "react-hot-toast";
export function EditModal({ isOpen, onOpenChange, itemId }: EditModalType) {
  const todo = useSelector((state: RootState) => state.todo.todos).find(
    (todo: todo) => todo.id == itemId
  );
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isLoading },
  } = useForm({
    defaultValues: {
      todo_title: todo?.title || "",
    },
  });
  const dispatch = useDispatch();
  function onSubmit(data: todoTitle) {
    dispatch(editTodo({id: itemId, title: data.todo_title}))
    toast.success("Todo is edited successfully !");
  }
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="mx-auto flex items-center gap-3 text-xl">
              <img src={edit} width={30} /> Edit todo
            </ModalHeader>
            <ModalBody>
              <form
                className={`flex flex-col gap-3 w-full`}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  isInvalid={errors?.todo_title ? true : false}
                  placeholder="Enter your todo here"
                  errorMessage={!isValid && "please provide valid title !"}
                  {...register("todo_title", {
                    required: "todo title is required !",
                  })}
                />
                <div className="flex gap-2">
                  <Button
                    className="flex-grow"
                    type="button"
                    color="danger"
                    onPress={onClose}
                    endContent={<TbPencilCancel size={16} />}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-grow"
                    color="primary"
                    onPress={onClose}
                    type="submit"
                    endContent={<MdEditNote size={16} />}
                    isLoading={isLoading}
                  >
                    Edit
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
