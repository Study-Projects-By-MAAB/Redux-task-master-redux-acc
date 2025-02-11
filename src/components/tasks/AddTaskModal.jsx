import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import MyModal from "../ui/MyModal";

export default function AddTaskModal({ isOpen, setIsOpen }) {
  const { register, handleSubmit, reset } = useForm();
  const disPatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    disPatch(addTask(data));
    onCancel();
  };
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Mir Hussain">Mir Hossain</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
            <option value="Mizanur Rahman">Mizanur Rahman</option>
            <option value="Tanmoy Parvez">Tanmoy Parvez</option>
            <option value="Fahim Ahmed Firoz">Fahim Ahmed Firoz</option>
            <option value="Rahatul Islam">Rahatul Islam</option>
            <option value="Rakibul Islam">Rakibul Islam</option>
            <option value="Nazmul Hasan">Nazmul Hasan</option>
            <option value="Md. Rashedul Islam">Md. Rashedul Islam</option>
            <option value="Samin Israr Ravi">Samin Israr Ravi</option>
            <option value="Md. Shahriar Hossain">Md. Shahriar Hossain</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="btn btn-primary" type="button">
            Cancel
          </button>
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </div>
      </form>
    </MyModal>
  );
}
