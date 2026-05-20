import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import b1 from "@/assets/banner-1.jpg";
import b2 from "@/assets/banner-2.jpg";
import b3 from "@/assets/banner-3.jpg";
import b4 from "@/assets/banner-4.jpg";
import b5 from "@/assets/banner-5.jpg";

export const Route = createFileRoute("/nosotros/instalaciones")({
  head: () => ({
    meta: [
      { title: "Instalaciones — I.E. La Alborada 30225" },
      { name: "description", content: "Conoce nuestras aulas, biblioteca, aula de cómputo y área deportiva." },
    ],
  }),
  component: InstalacionesPage,
});

const items = [
  { img: b5, title: "Aula de cómputo", desc: "Equipos modernos para el aprendizaje digital." },
  { img: b3, title: "Biblioteca", desc: "Espacio dedicado a la lectura y la investigación." },
  { img: b4, title: "Área deportiva", desc: "Canchas para el desarrollo físico y recreativo." },
  { img: b2, title: "Aulas", desc: "Ambientes amplios, ventilados e iluminados." },
  { img: b1, title: "Dirección", desc: "Oficinas administrativas para la atención de padres." },
];

function InstalacionesPage() {
  return (
    <>
      <PageHeader title="Nuestras instalaciones" subtitle="Espacios pensados para aprender, jugar y crecer." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="group rounded-2xl overflow-hidden border bg-card shadow-sm hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}