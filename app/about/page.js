function about() {
  return (
        <section className="grid gap-10 border-b border-slate-800 py-14 md:grid-cols-3">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          About Project
        </p>
        <h2 className="mt-2 text-2xl font-bold">
          Built as a real-world full-stack application
        </h2>
      </div>

      <div className="md:col-span-2">

        <p className="leading-7 text-slate-400">
          TaskFlow is a full-stack task management application built with
          Next.js and MongoDB. The project demonstrates authentication,
          protected routes, user-specific data, task CRUD operations and
          REST API development.
        </p>

        <p className="mt-5 leading-7 text-slate-400">
          The application follows a modern component-based architecture
          and uses React Context for user state management. Authentication
          is handled using JWT tokens stored in secure HTTP-only cookies.
        </p>

      </div>

    </section>
  );
}

export default about;