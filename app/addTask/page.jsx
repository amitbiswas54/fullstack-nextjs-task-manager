'use client';

import { useState } from "react";
import { addTask } from "../services/task-services";
import { toast, ToastContainer } from "react-toastify";

// export const metadata = {
//   title: "Add Task",
//   description: "Page to add a new task",
// };

function AddTask() {


  const [task, setTask] = useState({

        title:'',
        content:'',
         status: "pending",
        date: new Date().toISOString(),
        userId: "6a9563bd75a9cdd2d7a3dd6e"

  });


  let onChangeHandler =async (e) => {
          setTask({...task, [e.target.name]: e.target.value })
  }
    

  let handelSubmitTask = async (e) => {
    e.preventDefault();
   try {
    const response = await addTask(task);
        setTask({
         title:'',
        content:'',
        status: "pending",
        date: new Date().toISOString(),
        userId: "6a9563bd75a9cdd2d7a3dd6e"
    })

    toast.success('Task create Successfully', {
      position:'top-center'
    })


    console.log("Task added successfully:", response);
   }
    catch (error) {
        console.error("Error adding task:", error);
    }

  }




  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">
      <div className="max-w-2xl mx-auto">
        <ToastContainer/>
        <h1 className="text-3xl font-bold mb-6">Add Task</h1>

        <form className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg space-y-5" onSubmit={handelSubmitTask}>
          {/* Task Title */}
          <div>
            <label
             
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Task Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={task.title}
              onChange={onChangeHandler}
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-md px-4 py-2 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Description
            </label>

            <textarea
              name="content"
              rows="5"
              value={task.content}
              placeholder="Enter task description"
               onChange={onChangeHandler}
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-md px-4 py-2 outline-none resize-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            ></textarea>
          </div>

          {/* Priority */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Task Status
            </label>

           <select
                name="status"
                value={task.status} // 👈 Bind the current value here to make it a controlled component
                onChange={onChangeHandler}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              >
                <option value="" disabled>Select Status</option>
                
                {/* The 'value' attribute must match your Mongoose enum strings exactly */}
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="just_added">Just Added</option>
              </select>
          </div>

          {/* Status */}
         

          {/* Due Date */}
          {/* <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Due Date
            </label>

            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
          </div> */}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
            >
              Add Task
            </button>

            <button
            onClick={() =>
    setTask({
      title: "",
      content: "",
      status: "",
      date: new Date(),
      userId: "6a9563bd75a9cdd2d7a3dd6e",
    })}
              type="reset"
              className="bg-red-800 border border-red-700 hover:bg-red-700 text-gray-100 px-6 py-2 rounded-md transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;