
"use client";

import Link from "next/link";
import { ArrowUpRight, CheckSquare } from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "MongoDB",
  "Tailwind CSS",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950/30">
                <CheckSquare size={21} strokeWidth={2.2} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Task<span className="text-blue-400">Flow</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              A full-stack task management application built with
              Next.js, React, MongoDB and modern web technologies.
            </p>

            <a
              href="https://github.com/amitbiswas54/fullstack-nextjs-task-manager"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              Explore Repository
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Core Capabilities
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Authentication</li>
              <li>Task Management</li>
              <li>API Integration</li>
              <li>Database Persistence</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Built With
            </h3>

            <div className="mt-4 flex max-w-xs flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-9 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TaskFlow. Portfolio Project.
          </p>

          <p>
            Full-Stack Web Application • Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
