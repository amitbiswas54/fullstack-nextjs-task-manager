"use client"

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            T
          </div>

          <span className="text-lg font-bold text-white">
            TaskFlow
          </span>
        </div>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
          A full-stack task management application built with
          Next.js, React, MongoDB and modern web technologies.
        </p>
      </div>

      {/* Project Features */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">
          Project Features
        </h3>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
          <span>Authentication</span>
          <span>Task Management</span>
          <span>JWT Security</span>
          <span>MongoDB</span>
        </div>
      </div>

      {/* Technology */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">
          Built With
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-slate-800">
            Next.js
          </span>

          <span className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-slate-800">
            React
          </span>

          <span className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-slate-800">
            MongoDB
          </span>

          <span className="rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-slate-800">
            Tailwind CSS
          </span>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </p>

      <p>
        Full-Stack Web Application • Next.js
      </p>

    </div>

  </div>
</footer>
  );
}