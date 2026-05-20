import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/vida/cronograma")({
  head: () => ({
    meta: [
      { title: "Cronograma Anual — I.E. La Alborada 30225" },
      { name: "description", content: "Calendario anual de actividades de la I.E. La Alborada 30225." },
    ],
  }),
  component: CronogramaPage,
});

const events = [
  { date: "Marzo", title: "Inicio del Año Escolar", desc: "Bienvenida a estudiantes y padres de familia." },
  { date: "Mayo", title: "Semana Deportiva", desc: "Encuentros deportivos entre grados." },
  { date: "Junio", title: "Aniversario Institucional", desc: "Celebración del aniversario con desfile y actividades." },
  { date: "Julio", title: "Fiestas Patrias", desc: "Actuación cívica y celebración por el Día de la Independencia." },
  { date: "Octubre", title: "Día del Logro", desc: "Exposición de aprendizajes y proyectos de los estudiantes." },
  { date: "Diciembre", title: "Clausura del Año Escolar", desc: "Ceremonia de cierre y entrega de reconocimientos." },
];

function CronogramaPage() {
  return (
    <>
      <PageHeader title="Cronograma Anual" subtitle="Las fechas más importantes de nuestro año escolar." />
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-4">
        {events.map((e) => (
          <div key={e.title} className="flex gap-4 rounded-2xl border bg-card p-5 shadow-sm hover:-translate-y-0.5 transition-transform">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">{e.date}</div>
              <h3 className="font-bold text-lg">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}