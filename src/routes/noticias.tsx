import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import b1 from "@/assets/n1.png";
import b2 from "@/assets/n2.jpg";
import b3 from "@/assets/n3.png";
import b4 from "@/assets/n5.jpg";
import b5 from "@/assets/n6.jpg";
import b6 from "@/assets/n7.jpg";
import b7 from "@/assets/n11.png";
import b8 from "@/assets/n12.png";
import b9 from "@/assets/n13.png";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias" },
      { name: "description", content: "Últimas noticias y eventos de la I.E. La Alborada 30225." },
    ],
  }),
  component: NoticiasPage,
});

const news = [
  { 
    img: b1, 
    date: "21 Junio 2026", 
    title: "Celebramos el DÍA DEL PADRE ALBORADINO", 
    desc: "Una emotiva jornada de homenaje y reconocimiento a los padres de nuestra comunidad educativa, fortaleciendo los lazos de unión, gratitud y convivencia institucional.",
    url: "https://www.facebook.com/share/r/1BkvB1uh3e/" 
  },
  { 
    img: b2, 
    date: "2 Junio 2026", 
    title: "FONCODES - Programa de Alimentación Escolar", 
    desc: "Participación en el Programa de Alimentación Escolar, promoviendo una nutrición adecuada y el bienestar de nuestros estudiantes para favorecer su aprendizaje.",
    url: "https://www.facebook.com/share/r/184ukFyLQZ/" 
  },
  { 
    img: b3, 
    date: "29 Marzo 2026", 
    title: "Actividades Alboradinas por el LXI Aniversario", 
    desc: "Compartimos las diversas actividades culturales, deportivas y académicas realizadas en el marco del LXI aniversario de nuestra institución educativa.",
    url: "https://www.facebook.com/share/r/1Hb3f6bmAV/" 
  },
  
  { 
    img: b5, 
    date: "Marzo 2026", 
    title: "Diversión por aniversario", 
    desc: "Momentos de alegría, integración y sana convivencia vividos durante las celebraciones por el aniversario institucional junto a estudiantes, docentes y familias.",
    url: "https://www.facebook.com/share/v/1BaAi1a3EL/" 
  },
  { 
    img: b4, 
    date: "Marzo 2026", 
    title: "Buen inicio del año escolar", 
    desc: "Dimos la bienvenida a un nuevo año escolar con entusiasmo, compromiso y el objetivo de brindar una educación de calidad para todos nuestros estudiantes.",
    url: "https://www.facebook.com/share/p/19c9AxJL45/" 
  },
  { 
    img: b6, 
    date: "Diciembre 2025", 
    title: "Villancico Navideño", 
    desc: "Nuestros estudiantes demostraron su talento artístico y espíritu navideño mediante una hermosa presentación de villancicos llena de alegría y esperanza.",
    url: "https://www.facebook.com/share/r/1HRGG2qM1z/" 
  },
  { 
    img: b7, 
    date: "Noviembre 2025", 
    title: "2do puesto Concurso de Escoltas 2025", 
    desc: "Felicitamos a nuestra escolta institucional por obtener el segundo lugar, reflejando disciplina, compromiso y orgullo por representar a nuestra institución.",
  },
  { 
    img: b8, 
    date: "Septiembre 2025", 
    title: "1er puesto XL Concurso Anual de Becas Genial", 
    desc: "Con orgullo celebramos el primer lugar obtenido por nuestros estudiantes en el XL Concurso Anual de Becas Genial, destacando su excelencia académica.",
  },
  { 
    img: b9, 
    date: "Septiembre 2025", 
    title: "Premios en general obtenidos", 
    desc: "Reconocemos los logros y distinciones alcanzados por nuestros estudiantes en diferentes competencias académicas, culturales y deportivas durante el año.",
  },
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
              
              {/* CAMBIO AQUÍ: Cambiamos button por una etiqueta <a> */}
              <a 
                href={n.url} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm w-fit hover:gap-2 transition-all"
              >
                Leer más en Facebook <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}