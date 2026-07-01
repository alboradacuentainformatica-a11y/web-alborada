import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Download } from "lucide-react";
import fichaPdf from "@/assets/fichainscrip.pdf";

export const Route = createFileRoute("/admision/requisitos")({
  head: () => ({
    meta: [
      { title: "Requisitos de Admisión " },
      { name: "description", content: "Documentos requeridos para la matrícula en la I.E. La Alborada 30225." },
    ],
  }),
  component: RequisitosPage,
});

const items = [
  "Partida de nacimiento",
  "Copia DNI del estudiante",
  "Copia DNI del padre, madre o apoderado",
  "Boleta de notas del año anterior",
  "Ficha de inscripcion de matrícula",
  "Certificado de estudios - OPCIONAL",
];

function RequisitosPage() {
  return (
    <>
      <PageHeader title="Requisitos" subtitle="Documentación necesaria para la matrícula." />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-3 rounded-xl border bg-card px-5 py-4 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <span className="font-medium">{it}</span>
            </li>
          ))}
        </ul>
          <div className="mt-10 text-center">
  {/* Usamos target="_blank" para abrir en nueva pestaña */}
  <a 
    href={fichaPdf} 
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-105 transition-transform"
  >
    <Download className="h-4 w-4" /> Ver ficha de matrícula (PDF)
  </a>
</div>
        
      </section>
    </>
  );
}

