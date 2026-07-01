import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/vida/actividades")({
  head: () => ({
    meta: [
      { title: "Grados y Salones" },
      { name: "description", content: "Galería de salones por cada grado de primaria." },
    ],
  }),
  component: ActividadesPage,
});

const images = import.meta.glob("../assets/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}", { eager: true }) as Record<
  string,
  { default: string }
>;

// Función auxiliar para obtener la URL de la imagen del salón
const getAssetImage = (photoFilename?: string): string => {
  if (!photoFilename) return "";
  
  const exactKey = `../assets/${photoFilename}`;
  
  // Buscar coincidencia exacta
  if (images[exactKey]) {
    return images[exactKey].default;
  }
  
  // Buscar coincidencia insensible a mayúsculas/minúsculas
  const keys = Object.keys(images);
  const foundKey = keys.find(key => key.toLowerCase() === exactKey.toLowerCase());
  if (foundKey) {
    return images[foundKey].default;
  }
  
  return "";
};

interface Seccion {
  seccion: string;
  docente: string;
  img: string;
}

interface Grado {
  g: string;
  salones: Seccion[];
}

const grados: Grado[] = [
  {
    g: "Primer Grado",
    salones: [
      { seccion: "A", docente: "Hijar Peña , Jessica", img: "1A.jpg" },
      { seccion: "B", docente: "Sanchez Villarreal , Norma", img: "#" },
      { seccion: "C", docente: "Espinoza Ayuque, Celia", img: "1C.jpg" },
      { seccion: "D", docente: "Chavez Yupanqui, Gladia", img: "1D.jpg" },
    ],
  },
  {
    g: "Segundo Grado",
    salones: [
      { seccion: "A", docente: "Zuñiga Lara , Walther", img: "2a.jpeg" },
      { seccion: "B", docente: "Chacon Acevedo , Beatriz", img: "2b.jpeg" },
      { seccion: "C", docente: "Chuco Ponce, Jacinta", img: "2c.jpeg" },
      { seccion: "D", docente: "Marquez Garma, Francisco", img: "2d.jpeg" },
    ],
  },
  {
    g: "Tercer Grado",
    salones: [
      { seccion: "A", docente: "Cahuana Castro, Mery", img: "3A.jpg" },
      { seccion: "B", docente: "#", img: "#" },
    ],
  },
  {
    g: "Cuarto Grado",
    salones: [
      { seccion: "A", docente: "Valencia Garcia, Alicia", img: "4a.jpeg" },
      { seccion: "B", docente: "Parra Otarola, Zandra", img: "4b.jpeg" },
      { seccion: "D", docente: "Gomez Toledo, Saryla", img: "4d.jpeg" },
    ],
  },
  {
    g: "Quinto Grado",
    salones: [
      { seccion: "A", docente: "#", img: "#" },
      { seccion: "B", docente: "#", img: "#" },
    ],
  },
  {
    g: "Sexto Grado",
    salones: [
      { seccion: "A", docente: "Huamani Valenzuela, Norma", img: "6a.jpeg" },
      { seccion: "B", docente: "Alva Yance, Gloria", img: "6b.jpeg" },
      { seccion: "C", docente: "De La Cruz Rojas", img: "6c.jpeg" },
      { seccion: "D", docente: "Chanca Campos, Tito", img: "6d.jpeg" },
      { seccion: "E", docente: "Pomacarhua Mendoza, Jannet", img: "6e.jpeg" },
    ],
  },
];

function ActividadesPage() {
  const [active, setActive] = useState(1); // Segundo Grado por defecto ya que tiene los 4 salones solicitados
  const a = grados[active];
  return (
    <>
      <PageHeader title="Secciones y Salones" subtitle="Conoce las aulas y los tutores de cada grado de nuestra institución." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Selectores de Grados */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {grados.map((g, i) => (
            <button
              key={g.g}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold border transition-all cursor-pointer ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-secondary border-border"
              }`}
            >
              {g.g}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Post-its / Polaroid Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
          {a.salones.map((salon, i) => {
            const imgUrl = getAssetImage(salon.img);
            // Rotaciones alternadas para dar la sensación orgánica de fotos clavadas/pegadas
            const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "-rotate-3", "rotate-3"];
            const rotationClass = rotations[i % rotations.length];

            return (
              <div
                key={salon.seccion}
                className={`relative group bg-white dark:bg-card border border-border/80 p-5 pb-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-sm transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${rotationClass} flex flex-col`}
              >
                {/* Cinta adhesiva decorativa simulando un post-it pegado */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/20 backdrop-blur-[1px] -rotate-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)] opacity-80 group-hover:opacity-100 transition-opacity z-10" />

                {/* Foto del Salón */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-xs border border-slate-200/40 dark:border-slate-800/40 relative mb-5">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={`${a.g} ${salon.seccion}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-muted-foreground text-xs bg-secondary">
                      Sin foto disponible
                    </div>
                  )}
                </div>

                {/* Información del Salón */}
                <div className="flex-1 flex flex-col justify-between text-center px-1">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-800 dark:text-foreground tracking-tight">
                      {a.g} "{salon.seccion}"
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-primary/95 dark:text-primary">
                      Tutor: {salon.docente}
                    </p>
                  </div>
                  <p className="mt-6 text-[10px] uppercase tracking-wider text-muted-foreground/75 font-semibold">
                    I.E. N° 30225 "Alborada"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}