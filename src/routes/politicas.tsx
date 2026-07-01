import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/PageHeader'

export const Route = createFileRoute('/politicas')({
  head: () => ({
    meta: [
      { title: "Política de Privacidad" },
      { name: "description", content: "Conoce nuestras políticas de privacidad y protección de datos en la institución La Alborada." },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return (
    <>
      <PageHeader 
        title="Política de Privacidad" 
        subtitle="Comprometidos con la protección de los datos personales de nuestra comunidad educativa." 
      />
      <section className="mx-auto max-w-4xl px-6 py-12 space-y-8 text-muted-foreground">
        <p className="text-sm italic">
          Fecha de última actualización: {formattedDate}
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">1. Información General</h2>
          <p>
            La institución La Alborada protege la privacidad de estudiantes, padres de familia, docentes y personal administrativo, cumpliendo con la Ley de Protección de Datos Personales (Ley N° 29733).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">2. Finalidad de la página</h2>
          <p>
            Brindar información sobre la institución, como cronogramas, actividades y personal administrativo.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">3. Compartición de Información</h2>
          <p>
            No compartimos datos con terceros salvo en casos legales, emergencias médicas o con proveedores bajo contrato de confidencialidad.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">4. Derechos ARCO</h2>
          <p>
            Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición contactándonos en:
          </p>
          <ul className="list-disc pl-6 text-sm">
            <li>Email: Laalborada30225@gmail.com</li>
            <li>Teléfono: 064 636258</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">5. Conservación de Datos</h2>
          <p>
            Los datos se conservarán mientras sean necesarios para las finalidades descritas y según lo requerido por la legislación peruana.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">6. Cookies</h2>
          <p>
            Nuestro sitio web utiliza cookies para mejorar la experiencia de usuario, analizar tráfico y recordar preferencias. Puede configurar su navegador para rechazarlas.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">7. Cambios en la Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política. Los cambios serán publicados en esta página y comunicados por nuestros canales oficiales.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary">8. Contacto</h2>
          <p>
            Para consultas sobre esta política, puede comunicarse con la Dirección de la institución La Alborada:
          </p>
          <ul className="list-disc pl-6 text-sm">
            <li>Email: Laalborada30225@gmail.com</li>
            <li>Teléfono: 064 636258</li>
            <li>Horario: Lunes a Viernes — 8:00 a.m. a 3:30 p.m.</li>
          </ul>
        </div>

        <p className="font-semibold text-primary">
          En la institución La Alborada reafirmamos nuestro compromiso con la protección de los datos personales de nuestra comunidad educativa.
        </p>
      </section>
    </>
  )
}
