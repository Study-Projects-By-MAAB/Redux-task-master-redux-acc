import { useSelector } from "react-redux";
import MyModal from "../ui/MyModal";

export default function TaskDetailsModal({ isOpen, setIsOpen, id }) {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((task) => task.id === id);

  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      {task?.description}
    </MyModal>
  );
}
