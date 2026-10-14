import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">
        Project <span className="text-sky-400">Saya</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-sky-500"
          >
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 flex-1 text-sm text-slate-400">
              {project.description}
            </p>
            <ul className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded bg-slate-800 px-2 py-1 text-xs text-sky-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
