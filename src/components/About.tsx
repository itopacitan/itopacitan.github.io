const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">
        Tentang <span className="text-sky-400">Saya</span>
      </h2>
      <p className="mb-8 max-w-3xl leading-relaxed text-slate-400">
        Ceritakan sedikit tentang dirimu di sini: latar belakang pendidikan,
        minat di dunia teknologi, dan apa yang sedang kamu pelajari saat ini.
      </p>
      <h3 className="mb-4 text-xl font-semibold">Skill</h3>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm text-sky-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
