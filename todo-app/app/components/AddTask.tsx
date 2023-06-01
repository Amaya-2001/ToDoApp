import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add New Task
        <div className="ml-2">
          <AiOutlinePlus size={18} />
        </div>
      </button>
      {/* <Modal /> */}
    </div>
  );
};

export default AddTask;
