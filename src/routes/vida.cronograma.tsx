import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CalendarDays, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/vida/cronograma")({
  head: () => ({
    meta: [
      { title: "Cronograma Anual" },
      { name: "description", content: "Calendario anual de actividades de la I.E. La Alborada 30225." },
    ],
  }),
  component: CronogramaPage,
});

// Cronograma solo con actividades
const cronograma = {
  Marzo: [
    "Buen inicio del año escolar ",
    "Reuniones de coordinación con padres de familia",
    "Conformación de comités de aula",
    "Firma de compromisos para el año",
    "Evaluación diagnóstica",
  ],
  Abril: [
    "Juegos deportivos escolares Alboradinos",
    "Festival de la lectura",
    "Día del libro",
    
  ],
  Mayo: [
    "Aniversario institucional",
    "Celebración del Día de la Madre",
    "1° simulacro de sismo",
  ],
  Junio: [
    "Concurso nacional de comprensión JMA 1°-6° lectura Perú lee",
    "Celebración de Día del padre",
    "Juegos florales fase interna",
  ],
  Julio: [
    "Celebración del Día del maestro",
    "Semana patriótica",
    "Feria de ciencias fase interna",
    "1° Día del logro",
    "Proclamación de la independencia",
  ],
  Agosto: [
    "Feria de ciencias fase externa",
    "Día del niño",
    "2° simulacro de sismo",
  ],
  Setiembre: [
    "Paseo alboradino",
    "Maratón de la lectura",
    "Juegos florales fase externa",
  ],
  Octubre: [
    "Día de la Educación Física",
    "3° simulacro de sismo",
  ],
  Noviembre: [
    "Semana de la Educación Primaria",
    "Evaluación Censal 2°, 4° y 6° grado",
    "Desfile por el aniversario del Tambo",
  ],
  Diciembre: [
    "2° Día del logro",
    "Evaluación de salida y festival de villancicos",
    "Clausura del año escolar",
  ],
};

function CronogramaPage() {
  const [openMonth, setOpenMonth] = useState<string | null>("Marzo");

  return (
    <>
      <PageHeader title="Cronograma Anual" subtitle="Las fechas más importantes de nuestro año escolar." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(cronograma).map(([mes, actividades]) => {
          const principal = actividades[0]; // actividad principal
          const resto = actividades.slice(1);

          return (
            <div key={mes} className="border rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Cabecera del mes */}
              <button
                onClick={() => setOpenMonth(openMonth === mes ? null : mes)}
                className="flex items-center justify-between p-3 bg-primary text-white font-bold"
              >
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  {mes}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openMonth === mes ? "rotate-180" : ""}`}
                />
              </button>

              {/* Principal destacado */}
              <div className="p-3 bg-primary/5 font-semibold text-primary">
                {principal}
              </div>

              {/* Resto de actividades */}
              {openMonth === mes && (
                <ul className="p-3 space-y-2 text-sm bg-white flex-1">
                  {resto.map((act) => (
                    <li key={act} className="border rounded-lg p-2 hover:bg-gray-50 transition">
                      {act}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
