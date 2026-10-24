'user client'
// import Link from "next/link";
import Link from "next/link";

import {    ExternalLink,  GitCommitHorizontal,  LucideGitCommitHorizontal,  Mail,  MapPin,} from "lucide-react";

export default function Profile() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "Tailwind CSS",
    "REST API",
    "Axios",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      name: "AI Chat Assistant",
      tech: "React.js • Node.js • Express.js • Gemini API",
      link: "https://amitbiswas54.github.io/fullstack-gemini-ai-chat-frontend/",
    },
    {
      name: "E-Commerce App",
      tech: "React.js • Redux Toolkit • REST API",
      link: "https://amitbiswas54.github.io/ReactEcommerceProjectReduxToolKit/",
    },
    {
      name: "Weather / CRUD App",
      tech: "React.js • Axios • REST API",
      link: "https://amitbiswas54.github.io/weater-app-reactjs-tailwind/",
    },
    {
      name: "TanStack Query Demo",
      tech: "React • TanStack Query • Pagination",
      link: "https://amitbiswas54.github.io/ReactTanstackqQuery/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] px-4 py-12 text-white sm:px-6">

      <main className="mx-auto max-w-4xl">

        {/* Profile Card */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl sm:p-10">

          {/* Profile Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-4xl font-bold shadow-lg shadow-blue-600/20">
              A
            </div>

            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Amit Biswas
              </h1>

              <p className="mt-2 text-lg font-medium text-blue-400">
                React.js & Next.js Frontend Developer
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">

                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  Kolkata, India
                </span>

                <a
                  href="mailto:amit.biswas54@gmail.com"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail size={15} />
                  Email
                </a>

                <a
                  href="https://github.com/amitbiswas54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
             
                  GitHub
                </a>

              </div>
            </div>

          </div>


          {/* About */}
          <div className="mt-10 border-t border-slate-800 pt-8">

            <h2 className="text-xl font-semibold">
              About
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              React Frontend Developer with 4+ years of production
              experience building responsive and scalable web applications.
              Currently expanding my full-stack development skills with
              Next.js and modern backend technologies.
            </p>

          </div>


          {/* Skills */}
          <div className="mt-10">

            <h2 className="text-xl font-semibold">
              Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2.5">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2 text-sm text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>


          {/* Projects */}
          <div className="mt-10">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                Projects
              </h2>

              <a
                href="https://github.com/amitbiswas54"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300"
              >
                GitHub
                <ExternalLink size={14} />
              </a>

            </div>


            <div className="mt-4 grid gap-3 sm:grid-cols-2">

              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-blue-500/40 hover:bg-slate-950"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="font-medium text-slate-200 group-hover:text-blue-400">
                      {project.name}
                    </h3>

                    <ExternalLink
                      size={15}
                      className="text-slate-600 group-hover:text-blue-400"
                    />

                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {project.tech}
                  </p>

                </a>
              ))}

            </div>

          </div>


          {/* Bottom */}
          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-7">

            <a
              href="https://github.com/amitbiswas54"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <LucideGitCommitHorizontal/>
              GitHub Profile
            </a>

            <a
              href="mailto:amit.biswas54@gmail.com"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              <Mail size={17} />
              Contact Me
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}