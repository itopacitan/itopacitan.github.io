import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="max-w-2xl text-center">
        <Image
          src="/foto.png"
          alt="Foto Nama Kamu"
          width={140}
          height={140}
          className="mx-auto mb-6 rounded-full border-4 border-sky-500 object-cover"
        />
        <p className="mb-2 text-sky-400">Halo, saya</p>
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl">Nama Kamu</h1>
        <p className="mb-8 text-lg text-slate-400">
          Frontend Developer yang suka membangun website modern, cepat, dan
          mudah digunakan.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Lihat Project
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-sky-400 hover:text-sky-400"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
