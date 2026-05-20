import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/docentes")({
  head: () => ({
    meta: [
      { title: "Plana Docente — I.E. La Alborada 30225" },
      { name: "description", content: "Conoce a nuestra plana docente, comprometida con la educación de calidad." },
    ],
  }),
  component: DocentesPage,
});

const firstNames = ["María", "Juan", "Ana", "Carlos", "Lucía", "Pedro", "Rosa", "Luis", "Carmen", "Jorge", "Elena", "Ricardo", "Isabel", "Miguel", "Sofía"];
const lastNames = ["García", "Quispe", "Mamani", "Rojas", "Huamán", "Torres", "Flores", "Vargas", "Castro", "Ramos", "Salazar", "Cárdenas", "Pacheco", "Ríos", "Sánchez"];

const docentes = Array.from({ length: 30 }, (_, i) => {
  const fn = firstNames[i % firstNames.length];
  const ln1 = lastNames[i % lastNames.length];
  const ln2 = lastNames[(i * 3 + 1) % lastNames.length];
  return { name: `${fn} ${ln1} ${ln2}`, initials: `${fn[0]}${ln1[0]}` };
});

function DocentesPage() {
  return (
    <>
      <PageHeader title="Plana Docente" subtitle="Profesionales comprometidos con la formación de tus hijos." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {docentes.map((d, i) => (
            <div key={i} className="group text-center rounded-2xl border bg-card p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all">
              <div className="mx-auto h-24 w-24 rounded-full bg-[var(--gradient-hero)] text-primary-foreground grid place-items-center text-2xl font-bold shadow-inner group-hover:scale-110 transition-transform">
                {d.initials}
              </div>
              <p className="mt-4 font-semibold text-sm leading-tight">{d.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">Docente</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}