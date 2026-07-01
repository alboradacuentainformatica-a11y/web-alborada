import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import b1 from "@/assets/historia1.png";
import b3 from "@/assets/historia2.jpg";
import b5 from "@/assets/patio.jpeg";

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
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-6 text-lg leading-relaxed text-foreground text-justify">
  <p>
    La <strong>Institución Educativa N° 30225 La Alborada</strong> del distrito de El Tambo-Huancayo fue creada el 
    11 de mayo de 1965 mediante la R.D. N° 952-1965. Este año celebra <strong>61 años de vida institucional</strong>, 
    formando generaciones con compromiso y valores.
  </p>
  <p>
    Actualmente cuenta con la dirección de la Mg. <strong>Melcy Cárdenas Acuña</strong> y la subdirección del Lic. 
    <strong> Dionisio Esteban Huayra</strong>, junto a un equipo de docentes y administrativos con amplia trayectoria 
    profesional, dedicados a la educación de la niñez tambina.
  </p>
  <p>
    Nuestra Institución brinda una <strong>educación moderna y sólida</strong>, acorde con los avances de la época. 
    Se fundamenta en principios que fortalecen la vida moral y la disciplina, entendida como la aceptación libre y 
    espontánea de reglas que conducen a una vida digna y honesta.
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