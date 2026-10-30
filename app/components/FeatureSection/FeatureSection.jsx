
import {
  ShieldCheck,
  ListChecks,
  Database,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authentication & Password Security",
    description:
      "JWT-based authentication using jsonwebtoken, with bcryptjs for password hashing and verification.",
    tags: ["JWT", "bcryptjs"],
  },
  {
    icon: ListChecks,
    title: "Task Lifecycle Management",
    description:
      "Task-management workflows supported by API endpoints for creating, retrieving, updating and deleting tasks.",
    tags: ["CRUD", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "MongoDB and Mongoose models support persistent storage and structured access to application data.",
    tags: ["MongoDB", "Mongoose"],
  },
  {
    icon: Workflow,
    title: "Modular Application Architecture",
    description:
      "Separate components, service modules, API handlers and React Context help organize application responsibilities.",
    tags: ["React Context", "Reusable Modules"],
  },
];

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="bg-slate-50 py-20 sm:py-24 w-full"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Core Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            More Than a To-Do List
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            A practical project demonstrating how frontend interfaces,
            backend APIs, authentication and persistent data work together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description, tags }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
            >
              <div className="inline-flex rounded-xl border border-blue-100 bg-blue-50 p-3 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
