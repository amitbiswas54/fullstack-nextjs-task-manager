
'use client';

import { useState } from "react";
import { addTask } from "../services/task-services";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

function AddTask() {
  const route = useRouter();

  const initialTask = {
    title: "",
    content: "",
    status: "pending",
    date: new Date().toISOString(),
    userId: "6a9563bd75a9cdd2d7a3dd6e",
  };

  const [task, setTask] = useState(initialTask);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmitTask = async (e) => {
    e.preventDefault();

    if (!task.title.trim() || !task.content.trim()) {
      toast.error("Please enter the task title and description.", {
        position: "top-center",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await addTask({
        ...task,
        title: task.title.trim(),
        content: task.content.trim(),
      });

      console.log("Task added successfully:", response);

      toast.success("Task created successfully!", {
        position: "top-center",
      });

      route.push("/task");
    } catch (error) {
      console.error(
        "Error adding task:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message || "Failed to create task.",
        { position: "top-center" }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTask({
      ...initialTask,
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">
      <div className="mx-auto max-w-2xl">
        <ToastContainer />

        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            TaskFlow Workspace
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Add Task
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Create a task and keep your work organized.
          </p>
        </div>

        <form
          className="space-y-5 rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-xl"
          onSubmit={handleSubmitTask}
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Task Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter task title"
              value={task.title}
              onChange={onChangeHandler}
              required
              maxLength={120}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Description
            </label>

            <textarea
              id="content"
              name="content"
              rows={5}
              placeholder="Enter task description"
              value={task.content}
              onChange={onChangeHandler}
              required
              className="w-full resize-y rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Task Status
            </label>

            <select
              id="status"
              name="status"
              value={task.status}
              onChange={onChangeHandler}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="just_added">Just Added</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-800 pt-5 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Task..." : "Add Task"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              disabled={loading}
              className="rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 font-medium text-gray-200 transition hover:bg-gray-700 disabled:opacity-60"
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
