import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import b1 from "@/assets/banner-1.jpg";
import b3 from "@/assets/banner-3.jpg";
import b5 from "@/assets/banner-5.jpg";

export const Route = createFileRoute("/nosotros/historia")({
  head: () => ({
    meta: [
      { title: "Historia" },
      { name: "description", content: "Reseña histórica de la I.E. La Alborada 30225, una institución con tradición educativa." },
    ],
  }),
  component: HistoriaPage,
});

function HistoriaPage() {
  return (
    <>
      <PageHeader title="Nuestra Historia" subtitle="Más de dos décadas formando ciudadanos íntegros." />
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-6 text-lg leading-relaxed text-foreground">
        <p>
          La <strong>Institución Educativa La Alborada I.E. 30225</strong> nació con el firme propósito de brindar
          una educación primaria pública de calidad a la comunidad. A lo largo de los años hemos formado a
          generaciones de estudiantes que hoy son profesionales y ciudadanos comprometidos con su entorno.
        </p>
        <p>
          Desde nuestros inicios, hemos apostado por una <strong>formación integral</strong>: combinamos la
          excelencia académica con el desarrollo de valores, el deporte, la cultura y la innovación tecnológica.
        </p>
        <p>
          Cada año celebramos nuestros logros y proyectamos nuevos retos, manteniendo siempre el compromiso con
          los padres de familia y la comunidad educativa.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-6 md:grid-cols-3">
        {[b1, b3, b5].map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border">
            <img src={src} alt={`Historia ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </section>
    </>
  );
}