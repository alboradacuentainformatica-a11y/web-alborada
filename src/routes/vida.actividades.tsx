import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";
import b1 from "@/assets/banner-1.jpg";
import b2 from "@/assets/banner-2.jpg";
import b3 from "@/assets/banner-3.jpg";
import b4 from "@/assets/banner-4.jpg";
import b5 from "@/assets/banner-5.jpg";

export const Route = createFileRoute("/vida/actividades")({
  head: () => ({
    meta: [
      { title: "Actividades por grado" },
      { name: "description", content: "Galería de actividades de cada grado de primaria." },
    ],
  }),
  component: ActividadesPage,
});

const grados = [
  { g: "Primer Grado", docente: "Prof. María García", img: b2, drive: "https://drive.google.com" },
  { g: "Segundo Grado", docente: "Prof. Juan Quispe", img: b3, drive: "https://drive.google.com" },
  { g: "Tercer Grado", docente: "Prof. Ana Mamani", img: b5, drive: "https://drive.google.com" },
  { g: "Cuarto Grado", docente: "Prof. Carlos Rojas", img: b4, drive: "https://drive.google.com" },
  { g: "Quinto Grado", docente: "Prof. Lucía Huamán", img: b1, drive: "https://drive.google.com" },
  { g: "Sexto Grado", docente: "Prof. Pedro Torres", img: b2, drive: "https://drive.google.com" },
];

function ActividadesPage() {
  const [active, setActive] = useState(0);
  const a = grados[active];
  return (
    <>
      <PageHeader title="Actividades por grado" subtitle="Vive las mejores experiencias de cada salón." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {grados.map((g, i) => (
            <button
              key={g.g}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold border transition-all ${active === i ? "bg-primary text-primary-foreground border-primary shadow" : "bg-card hover:bg-secondary"}`}
            >
              {g.g}
            </button>
          ))}
        </div>
        <article className="grid gap-8 md:grid-cols-2 items-center rounded-3xl border bg-card overflow-hidden shadow-sm">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={a.img} alt={a.g} className="h-full w-full object-cover" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold">{a.g}</h2>
            <p className="mt-2 text-primary font-semibold">{a.docente}</p>
            <p className="mt-4 text-muted-foreground">
              Conoce todas las actividades, paseos y proyectos que vivimos a lo largo del año en {a.g}.
            </p>
            <a href={a.drive} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold hover:scale-105 transition-transform">
              Ver más fotos <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}