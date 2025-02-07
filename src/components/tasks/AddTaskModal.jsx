import MyModal from "../ui/MyModal";

export default function AddTaskModal({ isOpen, setIsOpen }) {
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est possimus
        commodi rerum quia enim, officia assumenda temporibus nesciunt
        repudiandae. Error sed, hic eius obcaecati quis dicta voluptatem ullam
        et laudantium.
      </>
    </MyModal>
  );
}
