import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Search } from "lucide-react";

export const Route = createFileRoute("/vida/actividades")({
  head: () => ({
    meta: [
      { title: "Galería de Secciones y Salones" },
      { name: "description", content: "Galería de salones de nuestra institución educativa." },
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
  if (!photoFilename || photoFilename === "#") return "";
  
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

interface SalonCard {
  grado: string;
  seccion: string;
  docente: string;
  img: string;
}

const salonesAcumulados: SalonCard[] = [
  // Primer Grado
  { grado: "Primer Grado", seccion: "A", docente: "Hijar Peña, Jessica", img: "1A.jpg" },
  { grado: "Primer Grado", seccion: "C", docente: "Espinoza Ayuque, Celia", img: "1C.jpg" },
  { grado: "Primer Grado", seccion: "D", docente: "Chavez Yupanqui, Gladia", img: "1D.jpg" },
  // Segundo Grado
  { grado: "Segundo Grado", seccion: "A", docente: "Zuñiga Lara, Walther", img: "2a.jpeg" },
  { grado: "Segundo Grado", seccion: "B", docente: "Chacon Acevedo, Beatriz", img: "2b.jpeg" },
  { grado: "Segundo Grado", seccion: "C", docente: "Chuco Ponce, Jacinta", img: "2c.jpeg" },
  { grado: "Segundo Grado", seccion: "D", docente: "Marquez Garma, Francisco", img: "2d.jpeg" },
  // Tercer Grado
  { grado: "Tercer Grado", seccion: "A", docente: "Cahuana Castro, Mery", img: "3A.jpg" },
  // Cuarto Grado
  { grado: "Cuarto Grado", seccion: "A", docente: "Valencia Garcia, Alicia", img: "4a.jpeg" },
  { grado: "Cuarto Grado", seccion: "B", docente: "Parra Otarola, Zandra", img: "4b.jpeg" },
  { grado: "Cuarto Grado", seccion: "D", docente: "Gomez Toledo, Saryla", img: "4d.jpeg" },
  // Sexto Grado
  { grado: "Sexto Grado", seccion: "A", docente: "Huamani Valenzuela, Norma", img: "6a.jpeg" },
  { grado: "Sexto Grado", seccion: "B", docente: "Alva Yance, Gloria", img: "6b.jpeg" },
  { grado: "Sexto Grado", seccion: "C", docente: "De La Cruz Rojas", img: "6c.jpeg" },
  { grado: "Sexto Grado", seccion: "D", docente: "Chanca Campos, Tito", img: "6d.jpeg" },
  { grado: "Sexto Grado", seccion: "E", docente: "Pomacarhua Mendoza, Jannet", img: "6e.jpeg" },
];

function ActividadesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSalones = salonesAcumulados.filter(
    (item) =>
      item.grado.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.seccion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.docente.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PageHeader 
        title="Secciones y Salones" 
        subtitle="Galería fotográfica de las aulas y tutores de la I.E. N° 30225 La Alborada." 
      />
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Buscador de salones */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por grado, sección o tutor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
          </div>
        </div>

        {/* Cuadrícula acumulada de Polaroid Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
          {filteredSalones.map((salon, i) => {
            const imgUrl = getAssetImage(salon.img);
            const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "-rotate-3", "rotate-3"];
            const rotationClass = rotations[i % rotations.length];

            return (
              <div
                key={`${salon.grado}-${salon.seccion}-${i}`}
                className={`relative group bg-white dark:bg-card border border-border/80 p-5 pb-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-sm transition-all duration-300 hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${rotationClass} flex flex-col`}
              >
                {/* Cinta adhesiva decorativa simulando un post-it pegado */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/20 backdrop-blur-[1px] -rotate-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)] opacity-80 group-hover:opacity-100 transition-opacity z-10" />

                {/* Foto del Salón */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-xs border border-slate-200/40 dark:border-slate-800/40 relative mb-5">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={`${salon.grado} ${salon.seccion}`}
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
                      {salon.grado} "{salon.seccion}"
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

        {filteredSalones.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No se encontraron salones que coincidan con la búsqueda.
          </div>
        )}
      </section>
    </>
  );
}