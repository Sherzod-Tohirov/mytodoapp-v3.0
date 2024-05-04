import { Input, Button } from "@nextui-org/react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import { todoTitle } from "../../utils/types";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todoSlice";
import toast from "react-hot-toast";
export function Form({stylex = ''}: {stylex?: string}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isValid },
  } = useForm<todoTitle>();
  const dispatch = useDispatch();
  function onSubmit(data: todoTitle): void {
    dispatch(addTodo(data.todo_title));
    reset();
    toast.success('New todo is created successfully !');
  }
  return (
    <form
      className={`flex gap-3 w-full ${stylex}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        size="md"
        isInvalid={errors?.todo_title ? true : false}
        variant="underlined"
        placeholder="Enter your todo here"
        errorMessage={!isValid && "please provide valid title !"}
        {...register("todo_title", {
          required: "todo title is required !",
        })}
      />
      <Button
        color="primary"
        variant="shadow"
        type="submit"
        size="md"
        endContent={<MdFormatListBulletedAdd size={25} />}
        isLoading={isLoading}
      >
        add
      </Button>
    </form>
  );
}
