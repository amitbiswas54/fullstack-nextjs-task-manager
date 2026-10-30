
const stack = [
  {
    category: "Frontend",
    tools: ["Next.js 16", "React 19", "Tailwind CSS 4"],
  },
  {
    category: "Backend",
    tools: ["Next.js API Routes", "Axios"],
  },
  {
    category: "Database",
    tools: ["MongoDB", "Mongoose"],
  },
  {
    category: "Authentication",
    tools: ["jsonwebtoken", "bcryptjs"],
  },
  {
    category: "UI & State",
    tools: ["React Context", "Lucide React", "React Toastify"],
  },
  {
    category: "Deployment & Tools",
    tools: ["Vercel", "Git", "GitHub"],
  },
];

const TechStackSection = () => {
  return (
    <section
      id="technology"
      className="bg-slate-950 py-20 sm:py-24 w-full"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Technology Stack
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Modern Tools. Practical Implementation.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300">
            Technologies used across the interface, API layer,
            authentication workflows and data persistence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map(({ category, tools }) => (
            <article
              key={category}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
            >
              <h3 className="font-semibold text-white">
                {category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300"
                  >
                    {tool}
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

export default TechStackSection;
