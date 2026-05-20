import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import b2 from "@/assets/banner-2.jpg";
import b3 from "@/assets/banner-3.jpg";
import b5 from "@/assets/banner-5.jpg";
import b4 from "@/assets/banner-4.jpg";
import b1 from "@/assets/banner-1.jpg";

export const Route = createFileRoute("/primaria")({
  head: () => ({
    meta: [
      { title: "Educación Primaria — I.E. La Alborada 30225" },
      { name: "description", content: "Educación primaria de 1° a 6° grado con metodología activa y formación en valores." },
    ],
  }),
  component: PrimariaPage,
});

const grades = [
  { n: "1°", img: b2, desc: "Inicio del camino lector y de las primeras operaciones matemáticas." },
  { n: "2°", img: b3, desc: "Consolidación de la lectoescritura y razonamiento lógico." },
  { n: "3°", img: b5, desc: "Desarrollo del pensamiento crítico y trabajo colaborativo." },
  { n: "4°", img: b4, desc: "Profundización en ciencias, comunicación y matemática." },
  { n: "5°", img: b1, desc: "Aprendizaje por proyectos y liderazgo estudiantil." },
  { n: "6°", img: b2, desc: "Preparación integral para la transición a secundaria." },
];

function PrimariaPage() {
  return (
    <>
      <PageHeader title="Educación Primaria" subtitle="De 1° a 6° grado: aprendizaje significativo y formación en valores." />
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Una metodología activa y participativa</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Acompañamos a los estudiantes a lo largo de los seis grados de primaria con una propuesta pedagógica
          centrada en el aprendizaje significativo, el desarrollo de competencias y la formación integral.
          Combinamos el rigor académico con espacios de creatividad, deporte y valores.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {grades.map((g) => (
          <article key={g.n} className="rounded-2xl overflow-hidden border bg-card shadow-sm hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all">
            <div className="relative aspect-[4/3]">
              <img src={g.img} alt={`${g.n} grado`} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute top-3 left-3 rounded-xl bg-primary text-primary-foreground px-3 py-1 text-sm font-bold shadow">
                {g.n} grado
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}