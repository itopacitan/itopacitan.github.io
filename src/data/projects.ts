export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Aplikasi Todo List",
    description: "Aplikasi pencatat tugas harian dengan fitur tambah, hapus, dan filter.",
    tags: ["React", "Tailwind"],
    github: "https://github.com/username/todo-app",
    demo: "https://todo-app.vercel.app",
  },
  {
    title: "Website Toko Online",
    description: "Landing page toko online dengan katalog produk yang responsif.",
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/username/toko-online",
  },
  {
    title: "Weather App",
    description: "Menampilkan cuaca terkini berdasarkan kota menggunakan API publik.",
    tags: ["JavaScript", "API"],
    github: "https://github.com/username/weather-app",
  },
];
