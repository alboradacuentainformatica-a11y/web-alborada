import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Target, Eye } from "lucide-react";
import b2 from "@/assets/mision.png";
import b4 from "@/assets/vision.png";

export const Route = createFileRoute("/nosotros/mision-vision")({
  head: () => ({
    meta: [
      { title: "Misión y Visión" },
      { name: "description", content: "Misión y visión institucional de la I.E. La Alborada 30225." },
    ],
  }),
  component: MisionVisionPage,
});

function MisionVisionPage() {
  return (
    <>
      <PageHeader title="Misión y Visión" subtitle="Nuestro propósito y hacia dónde vamos." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
        <img src={b2} alt="Misión" loading="lazy" className="rounded-2xl shadow-sm aspect-[4/3] object-cover" />
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <Target className="h-4 w-4" /> Misión
          </div>
          <h2 className="mt-3 text-3xl font-bold">Formar estudiantes íntegros y competentes</h2>
          <p className="mt-3 text-muted-foreground  text-justify leading-relaxed">
            Somos una Institución Educativa que brinda una educación de calidad a través de una formación de carácter integral, enfatizando en conocimientos, habilidades y actitudes que permite a los estudiantes desarrollar una alta autoestima con valores, hábitos de vida saludable, creativos e investigadores, capaces de enfrentar retos de la sociedad con asertividad y autonomía, respeto al medio ambiente, con apertura y capacidad de autocrítica , promoviendo una sana convivencia escolar.
          </p>
        </div>
      </section>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/30 text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <Eye className="h-4 w-4" /> Visión
            </div>
            <h2 className="mt-3 text-3xl font-bold">Ser una institución referente en la comunidad</h2>
            <p className="mt-3 text-muted-foreground text-justify leading-relaxed">
              La Institución Educativa N° 30225 La Alborada, al 2026 somos una entidad competitiva; basada en valores con principios científicos y humanistas, que ofrezca una formación integral de acuerdo a los cambios y exigencias de la sociedad.
            </p>
          </div>
          <img src={b4} alt="Visión" loading="lazy" className="order-1 md:order-2 rounded-2xl shadow-sm aspect-[4/3] object-cover" />
        </div>
      </section>
    </>
  );
}