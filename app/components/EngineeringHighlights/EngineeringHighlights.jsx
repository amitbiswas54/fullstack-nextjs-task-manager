
import {
  Code2,
  Database,
  LockKeyhole,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    icon: Layers3,
    title: "Component-Based Development",
    description:
      "Organizes interface elements into reusable React components and separates major application responsibilities.",
  },
  {
    icon: Code2,
    title: "API Design and Integration",
    description:
      "Connects the client interface to backend route handlers for authentication and task-related operations.",
  },
  {
    icon: LockKeyhole,
    title: "Authentication Fundamentals",
    description:
      "Uses JWT authentication and bcryptjs password hashing as part of the user authentication workflow.",
  },
  {
    icon: Database,
    title: "Persistent Application Data",
    description:
      "Integrates MongoDB and Mongoose to work with users and task-related data.",
  },
];

const EngineeringHighlights = () => {
  return (
    <section id="engineering" className="bg-white py-20 sm:py-24 w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Engineering Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What This Project Demonstrates
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              TaskFlow brings together frontend development, backend
              integration, authentication and database operations in one
              full-stack application.
            </p>

            <a
              href="https://github.com/amitbiswas54/fullstack-nextjs-task-manager"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Code2 size={18} />
              Review the Implementation
            </a>
          </div>

          {/* Engineering Cards */}
          <div className="space-y-4">
            {highlights.map(
              ({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6"
                >
                  <div className="h-fit shrink-0 rounded-xl border border-blue-100 bg-blue-50 p-3 text-blue-700">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-slate-950">
                        {title}
                      </h3>

                      <span className="text-xs font-semibold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringHighlights;
