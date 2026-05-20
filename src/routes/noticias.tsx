import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import b1 from "@/assets/banner-1.jpg";
import b3 from "@/assets/banner-3.jpg";
import b4 from "@/assets/banner-4.jpg";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias — I.E. La Alborada 30225" },
      { name: "description", content: "Últimas noticias y eventos de la I.E. La Alborada 30225." },
    ],
  }),
  component: NoticiasPage,
});

const news = [
  { img: b1, date: "15 Mar 2026", title: "Inicio del Concurso Académico", desc: "Comienza el concurso académico interno con más de 300 participantes." },
  { img: b4, date: "20 May 2026", title: "Semana Deportiva 2026", desc: "Una semana llena de competencias y trabajo en equipo entre grados." },
  { img: b3, date: "28 Jul 2026", title: "Actividades Cívicas", desc: "Celebración de Fiestas Patrias con desfile y actuaciones culturales." },
];

function NoticiasPage() {
  return (
    <>
      <PageHeader title="Noticias y eventos" subtitle="Mantente al día con lo que sucede en nuestra institución." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-3">
        {news.map((n) => (
          <article key={n.title} className="group rounded-2xl overflow-hidden border bg-card shadow-sm hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all flex flex-col">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={n.img} alt={n.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">{n.date}</span>
              <h3 className="mt-2 font-bold text-lg">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{n.desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm w-fit hover:gap-2 transition-all">
                Leer más <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}