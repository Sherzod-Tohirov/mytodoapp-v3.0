import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import confirm from "../../../assets/confirm.gif";
import { DeleteModalType } from "../../../utils/types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../store/todo/todoSlice";
import toast from "react-hot-toast";
export function DeleteModal({
  isOpen,
  onOpenChange,
  itemId,
  setAnimateOnDelete,
}: DeleteModalType) {
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="mx-auto flex items-center gap-3">
              <img src={confirm} width={30} /> Are you sure to delete ?!
            </ModalHeader>
            <ModalBody>
              <Button onPress={onClose}>No</Button>
              <Button
                onPress={onClose}
                color="danger"
                onClick={() => {
                  setAnimateOnDelete((prev) => !prev);
                  setTimeout(() => {
                    dispatch(deleteTodo(itemId));
                    toast.success("Todo is deleted successfully !");
                  }, 500);
                }}
              >
                Yes, of course
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
