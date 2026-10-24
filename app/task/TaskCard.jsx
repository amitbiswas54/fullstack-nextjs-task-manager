"use client";

import { useContext } from "react";
import { Trash2, User, Hash, CheckCircle2 } from "lucide-react";
import UserContext from "../userContext/userContext";

function TaskCard({ task, deleteTaskParent }) {
  const { user } = useContext(UserContext);

  const deleteTask = async (taskId) => {
    try {
      const response = await deleteTaskParent(taskId);
      return response;
    } catch (error) {
      console.error("Delete task error:", error);
    }
  };

  const statusConfig = {
    completed: {
      label: "Completed",
      className:
        "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20",
      icon: <CheckCircle2 size={13} />,
    },

    pending: {
      label: "Pending",
      className:
        "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20",
    },

    just_added: {
      label: "New",
      className:
        "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20",
    },
  };

  const status =
    statusConfig[task.status] || {
      label: task.status,
      className: 
        "bg-slate-500/10 text-slate-400 ring-1 ring-slate-500/20",
    };

  return (
    <article
      className="
        group relative flex  h-full flex-col overflow-hidden
        rounded-2xl border border-slate-800
        bg-slate-900/80
        p-5
        shadow-lg shadow-black/20
        transition-all duration-300
        hover:-translate-y-1
        hover:border-slate-700
        hover:bg-slate-900
        hover:shadow-xl hover:shadow-black/30
      "
    >
      {/* Top accent */}
      <div
        className="
          absolute left-0 top-0 h-1 w-0
          bg-gradient-to-r from-blue-500 to-indigo-500
          transition-all duration-300
          group-hover:w-full
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">
          <h3
            className="
              line-clamp-2
              text-lg font-semibold leading-7
              text-white
              transition-colors
              group-hover:text-blue-400
            "
          >
            {task.title}
          </h3>
        </div>

        {/* Status */}
        <span
          className={`
            inline-flex shrink-0 items-center gap-1.5
            rounded-full px-3 py-1
            text-[11px] font-semibold
            ${status.className}
          `}
        >
          {status.icon}
          {status.label}
        </span>
      </div>


      {/* Content */}
      <p
        className="
          mt-4
          line-clamp-3
          text-sm
          leading-6
          text-slate-400
        "
      >
        {task.content}
      </p>


      {/* Metadata */}
      <div
        className="
          mt-5
          flex items-center justify-between
          border-t border-slate-800
          pt-4
        "
      >

        {/* Author */}
        <div className="flex min-w-0 items-center gap-2">

          <div
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              bg-blue-500/10
              text-blue-400
              ring-1 ring-blue-500/20
            "
          >
            <User size={14} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Created by
            </p>

            <p className="truncate text-xs font-medium text-slate-300">
              {user?.name || "User"}
            </p>
          </div>

        </div>


        {/* Delete */}
        <button
          type="button"
          onClick={() => deleteTask(task._id)}
          title="Delete task"
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-lg
            border border-slate-800
            bg-slate-950
            text-slate-500
            transition-all duration-200
            hover:border-red-500/30
            hover:bg-red-500/10
            hover:text-red-400
            active:scale-95
          "
        >
          <Trash2 size={16} />
        </button>

      </div>


      {/* Task ID */}
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-600">
        <Hash size={11} />
        <span className="truncate">
          {task._id}
        </span>
      </div>

    </article>
  );
}

export default TaskCard;