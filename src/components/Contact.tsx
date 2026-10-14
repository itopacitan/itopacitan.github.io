export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-bold">
        Hubungi <span className="text-sky-400">Saya</span>
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-slate-400">
        Tertarik bekerja sama atau sekadar ingin menyapa? Kirim email atau
        hubungi saya lewat media sosial.
      </p>
      <a
        href="mailto:emailkamu@gmail.com"
        className="inline-block rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-600"
      >
        Kirim Email
      </a>
      <div className="mt-8 flex justify-center gap-6 text-slate-400">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">LinkedIn</a>
        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">Instagram</a>
      </div>
    </section>
  );
}
