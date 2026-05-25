import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/docentes")({
  head: () => ({
    meta: [
      { title: "Plana Docente" },
      { name: "description", content: "Conoce a nuestra plana docente, comprometida con la educación de calidad." },
    ],
  }),
  component: DocentesPage,
});

// Importación dinámica de todas las imágenes en assets usando Vite
const images = import.meta.glob("../assets/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}", { eager: true }) as Record<
  string,
  { default: string }
>;

// Función auxiliar para obtener la URL de la imagen del docente
const getTeacherImage = (photoFilename?: string): string | undefined => {
  if (!photoFilename) return undefined;
  
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
  
  return undefined;
};

// Componente para manejar el avatar del docente con fallback en caso de error o ausencia de foto
function TeacherAvatar({ photo, name, initials }: { photo?: string; name: string; initials: string }) {
  const [hasError, setHasError] = useState(false);
  const photoUrl = getTeacherImage(photo);

  if (photoUrl && !hasError) {
    return (
      <img
        src={photoUrl}
        alt={name}
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
      />
    );
  }

  return <span className="select-none">{initials}</span>;
}

// Lista oficial y editable de los 30 docentes de la institución
const docentes = [
  { name: "Alicia Valencia Garcia", role: "Docente", initials: "AVG", photo: "A.V.G.ok.png" },
  { name: "Beatriz Chacon Acevedo", role: "Docente", initials: "BCA", photo: "B.C.A.ok.png" },
  { name: "Celia Espinoza Ayuque", role: "Docente", initials: "CEA", photo: "C.E.A.ok.png" },
  { name: "Elizabeth Manrique Tunque", role: "Docente", initials: "EMT", photo: "E.M.T.ok.png" },
  { name: "Elizabeth Sofia Coronel Remar", role: "Docente", initials: "ESCR", photo: "E.S.C.R.ok.png" },
  { name: "Eunice Betsabé Palomares Rodríguez", role: "Docente", initials: "EBPR", photo: "E.B.P.R.ok.png" }, 
  { name: "Francisco Marquez Garma", role: "Docente", initials: "FMG", photo: "F.M.G.ok.png" },
  { name: "Gladis Chavez Yupanqui", role: "Docente", initials: "GCY", photo: "G.C.Y.ok.png" },
  { name: "Inés Carhuamaca Poma", role: "Docente", initials: "ICP", photo: "I.C.P.ok.png" }, 
  { name: "Jacinta Chuco Ponce", role: "Docente", initials: "JCP", photo: "J.C.P.ok.png" },
  { name: "Jannet Pomacarhua Mendoza", role: "Docente", initials: "JPM", photo: "J.P.M.ok.png" },
  { name: "Jessica Marianela Hijar Peña", role: "Docente", initials: "JMHP", photo: "J.M.H.P.ok.png" },
  { name: "Jorge Antonio Torres Villayzan", role: "Docente", initials: "JATV", photo: "J.A.T.V.ok.png" },
  { name: "Kely Marisol De La Cruz Rojas", role: "Docente", initials: "KMDR", photo: "K.M.D.R.ok.png" },
  { name: "Marilú Angelica Diaz Pillaca", role: "Docente", initials: "MADP", photo: "M.A.D.P.ok.png" },
  { name: "Martha Perez Hospinal", role: "Docente", initials: "MPH", photo: "M.P.H.ok.png" },
  { name: "Mery Cahuana Castro", role: "Docente", initials: "MCC", photo: "M.C.C.ok.png" },
  { name: "Nelly Cajamarca Balderrego", role: "Docente", initials: "NCB", photo: "N.C.B.ok.png" },
  { name: "Norma Huamani Valenzuela", role: "Docente", initials: "NHV", photo: "N.H.V.ok.png" },
  { name: "Norma Sanchez Villarreal", role: "Docente", initials: "NSV", photo: "N.S.V.ok.png" },
  { name: "Sarvia Gomez Toledo", role: "Docente", initials: "SGT", photo: "S.G.T.ok.png" },
  { name: "Sofía Catalina Roman De La Torre", role: "Docente", initials: "SCRDLT", photo: "S.C.R.D.L.T.ok.png" },
  { name: "Tito Rafael Chanca Campos", role: "Docente", initials: "TRCC", photo: "T.R.C.C.ok.png" },
  { name: "Walther Zuñiga Lara", role: "Docente", initials: "WZL", photo: "W.Z.L.ok.png" },
  { name: "Yene Betty Salinas Carhuaz", role: "Docente", initials: "YBSC", photo: "Y.B.S.C.ok.png" },
  { name: "Zandra Isidora Parra Otárola", role: "Docente", initials: "ZIPO", photo: "Z.I.P.O.ok.png" },
  
  
  
  
  
  
   
  
  
  

];

function DocentesPage() {
  return (
    <>
      <PageHeader title="Plana Docente" subtitle="Profesionales comprometidos con la formación de tus hijos." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {docentes.map((d, i) => (
            <div key={i} className="group text-center rounded-2xl border bg-card p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all">
              <div className="mx-auto h-24 w-24 rounded-full overflow-hidden bg-gradient-hero text-primary-foreground grid place-items-center text-2xl font-bold shadow-inner group-hover:scale-110 transition-transform">
                <TeacherAvatar photo={d.photo} name={d.name} initials={d.initials} />
              </div>
              <p className="mt-4 font-semibold text-sm leading-tight min-h-[40px] flex items-center justify-center">{d.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
