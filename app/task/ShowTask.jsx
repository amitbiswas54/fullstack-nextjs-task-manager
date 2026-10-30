"use client";

import { useContext, useEffect, useState } from "react";
import { getTask, deleteTask } from "../services/task-services";
import UserContext from "../userContext/userContext";
import TaskCard from "./TaskCard";
import { toast } from "react-toastify";

function ShowTask() {
    const [tasks, setTasks] = useState([]);

    const userTask = useContext(UserContext);

    const loadTask = async (userId) => {
        try {
            const task = await getTask(userId);
            setTasks([...task]);
            console.log("TASKS:", task);
        } catch (error) {
            console.log("error", error);
        }
    };

    const deleteTaskParent = async (taskId) =>{
        try {
           await deleteTask(taskId)

                  setTasks((prevTasks) =>
            prevTasks.filter((task) => task._id !== taskId)
        );

            toast.success('Delete Successfully')
        }catch (error) {
            console.log('error', error)
            toast.error('error', {
                message: 'delete error Amit'
            },{
                sattus:300
            }
        )

        }

    }

    useEffect(() => {
        if (userTask?.user?._id) {
            loadTask(userTask.user._id);
        }
    }, [userTask]);

    return (
        <div className=" bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
             

                {/* Task Header */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-3xl font-semibold text-slate-200">
                        Task List
                    </h2>

                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
                        {tasks.length}{" "}
                        {tasks.length === 1 ? "Task" : "Tasks"}
                    </span>
                </div>

                {/* Task Cards */}
                {tasks.length > 0 ? (
                    <div className="flex flex-col flex-wrap w-full gap-4">

                        {tasks.map((item) => (
                            <TaskCard
                                task={item}
                                key={item._id}
                                deleteTaskParent={deleteTaskParent}
                            />
                        ))}

                    </div>
                ): (
                    /* Empty State */
                    <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900 px-6 py-16 text-center">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800">
                            <span className="text-2xl">📝</span>
                        </div>

                        <h3 className="text-lg font-semibold text-white">
                            No tasks found
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            You don't have any tasks yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowTask;