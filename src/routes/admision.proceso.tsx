import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/admision/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso de Admisión" },
      { name: "description", content: "Pasos para la admisión a la I.E. La Alborada 30225." },
    ],
  }),
  component: ProcesoPage,
});

const steps = [
  { t: "Solicitar información", d: "Acércate a dirección para recibir orientación sobre el proceso." },
  { t: "Presentar documentación", d: "Entrega los documentos requeridos del estudiante y apoderado." },
  { t: "Evaluación o entrevista", d: "Breve evaluación o entrevista según el grado al que postula." },
  { t: "Confirmación de matrícula", d: "Se confirma la vacante y se coordina la fecha de matrícula." },
  { t: "Registro oficial", d: "Se formaliza la matrícula en la institución." },
];

function ProcesoPage() {
  return (
    <>
      <PageHeader title="Proceso de Admisión" subtitle="Cinco pasos claros para formar parte de nuestra comunidad." />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <ol className="relative border-l-2 border-primary/30 space-y-8 pl-8">
          {steps.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[42px] grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold shadow">
                {i + 1}
              </span>
              <div className="rounded-2xl border bg-card p-5 shadow-sm">
                <h3 className="font-bold text-lg">{s.t}</h3>
                <p className="text-muted-foreground mt-1">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link to="/admision/requisitos" className="inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-105 transition-transform">
            Ver requisitos
          </Link>
        </div>
      </section>
    </>
  );
}