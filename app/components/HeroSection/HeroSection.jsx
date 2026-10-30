
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  "Next.js 16",
  "React 19",
  "MongoDB",
  "JWT + bcryptjs",
];

const overview = [
  {
    icon: ShieldCheck,
    title: "Authentication",
    detail: "JWT authentication and bcryptjs password hashing",
  },
  {
    icon: CheckCircle2,
    title: "Task Management",
    detail: "Create, retrieve, update and delete tasks",
  },
  {
    icon: Database,
    title: "Data Persistence",
    detail: "MongoDB with Mongoose models",
  },
  {
    icon: Code2,
    title: "Backend APIs",
    detail: "Next.js route handlers and HTTP requests",
  },
];

const HeroSection = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

      <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Full-Stack Development Project
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Plan smarter.
            <span className="mt-2 block text-blue-400">
              Get things done.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            TaskFlow is a full-stack task management application built with
            Next.js, React and MongoDB. It demonstrates authentication,
            API integration, task workflows and persistent database operations.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://github.com/amitbiswas54/fullstack-nextjs-task-manager"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
            >
              <Code2 size={18} />
              View Source Code
            </a>
          </div>

          {/* Technology Badges */}
          <div className="mt-9 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Project Overview */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Project Overview
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Built End to End
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                A practical demonstration of full-stack development.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
              <CheckCircle2 size={25} />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {overview.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-blue-400/30"
              >
                <span className="rounded-xl bg-blue-500/10 p-3 text-blue-300">
                  <Icon size={21} />
                </span>

                <div>
                  <h3 className="font-semibold text-slate-100">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Review the live deployment and repository to verify the current
            implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
